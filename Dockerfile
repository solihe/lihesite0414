# 构建阶段
FROM node:18-alpine as builder

# 安装 git 和 git-lfs
RUN apk add --no-cache git git-lfs

WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制源代码和资源文件
COPY . .

# 初始化 Git LFS 并拉取文件
RUN git lfs install && git lfs pull

# 构建应用
RUN npm run build

# 生产阶段
FROM nginx:alpine

# 复制 nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 从构建阶段复制构建产物
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"] 