# Vercel 部署指南

## 准备工作

1. 确保您有：
   - [GitHub](https://github.com) 账号
   - [Vercel](https://vercel.com) 账号（可以使用 GitHub 账号登录）
   - 项目已推送到 GitHub 仓库：[solihe/lihemobilesite](https://github.com/solihe/lihemobilesite)

## 部署步骤

### 1. 导入项目
1. 访问 [Vercel 控制台](https://vercel.com)
2. 点击 "Add New Project"
3. 选择 "Import Git Repository"
4. 找到并选择 `solihe/lihemobilesite` 仓库

### 2. 配置项目
在项目配置页面中设置以下选项：

1. **项目名称**: `lihemobilesite`（或您喜欢的名称）

2. **Framework Preset**: 
   - 选择 `Vite`
   - Vercel 会自动检测项目为 Vite 项目

3. **构建和输出设置**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Root Directory: `react_template`

4. **环境变量**（如需要）:
   - 暂时不需要设置环境变量

### 3. 部署配置
项目根目录已包含 `vercel.json` 配置文件，内容如下：

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 4. 开始部署
1. 点击 "Deploy" 按钮
2. Vercel 将开始构建和部署过程
3. 等待部署完成（通常需要 1-2 分钟）

### 5. 部署完成后
1. 访问生成的域名（例如：`https://lihemobilesite.vercel.app`）
2. 检查网站功能是否正常：
   - 页面加载
   - 图片显示
   - 动画效果
   - 响应式布局

## 自动部署

配置完成后，每次推送到 GitHub 仓库的 `main` 分支都会自动触发部署：

1. 本地修改代码
2. 提交并推送到 GitHub：
   ```bash
   git add .
   git commit -m "更新说明"
   git push origin main
   ```
3. Vercel 会自动开始新的部署

## 域名设置（可选）

如果需要使用自定义域名：

1. 在 Vercel 项目设置中：
   - 进入 "Settings" > "Domains"
   - 点击 "Add Domain"
   - 输入您的域名

2. 按照 Vercel 提供的说明配置 DNS 记录：
   - 添加 A 记录
   - 或添加 CNAME 记录

## 性能优化

Vercel 自动提供以下优化：

1. 全球 CDN 分发
2. 自动 HTTPS
3. 资源压缩
4. 图片优化
5. 边缘缓存

## 监控和分析

在 Vercel 仪表板中可以查看：

1. 部署状态和历史
2. 性能指标
3. 错误日志
4. 访问统计

## 故障排除

如果遇到部署问题：

1. 检查构建日志
2. 确认项目结构正确
3. 验证依赖版本兼容性
4. 检查 `vercel.json` 配置

需要帮助时可以：
- 查看 [Vercel 文档](https://vercel.com/docs)
- 访问 [Vercel 支持](https://vercel.com/support)
- 在 GitHub 仓库提交 Issue 