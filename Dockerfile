# 构建阶段
FROM node:20-alpine as build

WORKDIR /app

# 复制整个项目
COPY . ./

# 安装依赖并构建
RUN npm install
RUN npm run build

# 运行阶段
FROM nginx:alpine as runtime

# 复制构建产物到 nginx 目录
COPY --from=build /app/dist /usr/share/nginx/html

# 复制 nginx 配置
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 