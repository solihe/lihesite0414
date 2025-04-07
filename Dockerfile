# 构建阶段
FROM node:20-alpine as build

WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY lihe-website/package*.json ./

# 安装依赖
RUN npm install

# 复制源代码
COPY lihe-website/ ./

# 构建应用
RUN npm run build

# 运行阶段
FROM nginx:alpine as runtime

# 复制构建产物到 nginx 目录
COPY --from=build /app/dist /usr/share/nginx/html

# 复制 nginx 配置
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 