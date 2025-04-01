# 来贺白酒官方网站

基于 React + Vite 构建的来贺白酒官方网站。

## 项目结构

```
react_template/
├── src/                    # 源代码目录
│   ├── components/         # 组件目录
│   ├── constants/         # 常量定义
│   ├── styles/           # 样式文件
│   ├── utils/            # 工具函数
│   ├── hooks/            # 自定义 Hooks
│   ├── App.jsx          # 应用入口
│   └── main.jsx         # 主渲染文件
│
├── docs/                  # 项目文档
│   ├── brand/            # 品牌相关文档
│   │   ├── market_insight_report.md    # 市场洞察
│   │   ├── content_strategy.md         # 内容策略
│   │   └── content_strategy_evaluation.md  # 策略评估
│   │
│   ├── design/           # 设计文档
│   │   ├── system_design.md           # 系统设计
│   │   ├── mobile_website_prd.md      # 移动端PRD
│   │   └── implementation_plan.md      # 实施计划
│   │
│   ├── features/         # 功能文档
│   │   └── flashcards_design.md       # 闪卡系统设计
│   │
│   └── technical/        # 技术文档
│       ├── deployment_guide.md        # 部署指南
│       └── website_structure.json     # 网站结构
│
├── public/               # 静态资源
├── dist/                # 构建输出目录
├── node_modules/        # 依赖包
│
├── Dockerfile           # Docker 配置
├── docker-compose.yml   # Docker Compose 配置
├── nginx.conf          # Nginx 配置
│
├── package.json        # 项目配置
├── vite.config.js      # Vite 配置
├── tailwind.config.js  # Tailwind CSS 配置
├── postcss.config.js   # PostCSS 配置
└── eslint.config.js    # ESLint 配置
```

## 快速开始

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm run dev
```

3. 构建生产版本
```bash
npm run build
```

## Docker 部署

1. 构建镜像
```bash
docker-compose build
```

2. 启动服务
```bash
docker-compose up -d
```

## 文档

- 品牌文档位于 `docs/brand/` 目录
- 设计文档位于 `docs/design/` 目录
- 功能文档位于 `docs/features/` 目录
- 技术文档位于 `docs/technical/` 目录

## 技术栈

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- TypeScript

## 开发规范

请参考 `docs/technical/` 目录下的开发规范文档。

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支
3. 提交您的改动
4. 推送到您的分支
5. 创建新的 Pull Request

## 许可证

[MIT](LICENSE)
