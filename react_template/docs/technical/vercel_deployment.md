# Vercel 部署指南

## 准备工作

1. 确保您有：
   - [GitHub](https://github.com) 账号
   - [Vercel](https://vercel.com) 账号（可以使用 GitHub 账号登录）
   - 项目已推送到 GitHub 仓库

2. 项目配置检查：
   ```json
   // package.json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     }
   }
   ```

## 部署步骤

### 1. 推送代码到 GitHub

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加远程仓库
git remote add origin https://github.com/你的用户名/来贺白酒.git

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: 来贺白酒官网项目"

# 推送到主分支
git push -u origin main
```

### 2. Vercel 部署配置

1. 登录 [Vercel 控制台](https://vercel.com)
2. 点击 "New Project"
3. 导入 GitHub 仓库
4. 配置项目：
   - Framework Preset: Vite
   - Root Directory: `react_template`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 3. 环境变量配置（如需要）

在 Vercel 项目设置中：
1. 进入 Settings > Environment Variables
2. 添加必要的环境变量

### 4. 域名配置

1. 在 Vercel 项目设置中：
   - 进入 Settings > Domains
   - 添加自定义域名
   - 按照提示配置 DNS 记录

2. SSL 配置会自动完成

## 自动部署

Vercel 会自动监听 GitHub 仓库的变化：
- 每次推送到主分支会自动部署
- 每个 PR 会创建预览部署
- 可以在 Vercel 仪表板查看部署状态

## 部署预览

1. 访问 Vercel 提供的域名
2. 检查以下内容：
   - 页面是否正常加载
   - 样式是否正确
   - 功能是否正常
   - 控制台是否有错误

## 常见问题

### 1. 构建失败
- 检查 `package.json` 中的构建命令
- 确认所有依赖都已正确安装
- 查看构建日志中的错误信息

### 2. 路由问题
- 确保使用了正确的路由配置
- 检查是否需要添加重写规则

### 3. 环境变量
- 确保所有必要的环境变量都已配置
- 检查环境变量名称是否正确

## 性能优化

Vercel 提供了多个优化选项：
1. 自动图片优化
2. 边缘缓存
3. 全球 CDN 分发
4. 自动 GZIP 压缩

## 监控和分析

1. 在 Vercel 仪表板中：
   - 查看访问统计
   - 监控性能指标
   - 查看错误报告
   - 分析部署历史

2. 集成 Analytics（可选）：
   - 在项目设置中启用 Vercel Analytics
   - 查看详细的性能和使用数据

## 回滚部署

如果新部署出现问题：
1. 访问 Vercel 仪表板的部署历史
2. 找到上一个稳定版本
3. 点击 "..." > "Redeploy"
4. 确认回滚操作

## 安全建议

1. 不要在代码中硬编码敏感信息
2. 使用环境变量存储密钥
3. 定期更新依赖包
4. 启用双因素认证 