# 来贺白酒项目前端开发规范

## 1. 项目结构规范

### 组件组织
- `/src/components/` 采用功能优先的组织方式
  - `core/`: 基础组件 (Button, Input, Card)
  - `layout/`: 布局组件 (Header, Footer, Navigation)
  - `sections/`: 页面区块 (Hero, Products, Story)
  - `features/`: 复杂功能 (EmotionalCards, ProductShowcase)

### 资源管理
- `/public/assets/`
  - `images/`: 按区块分类 (products/, brand-story/, etc.)
  - `fonts/`: 用于传统中国美学的自定义字体
  - `videos/`: 产品演示和品牌故事
- 使用描述性命名: `[section]-[purpose]-[variant].ext`

### 实用函数
- `/src/utils/`
  - 将不同关注点分离到不同文件 (animation.ts, scroll.ts)
  - 使用 TypeScript 提供更好的类型安全
  - 导出命名函数以实现更好的 tree-shaking

## 2. 编码标准

### React 最佳实践
- 使用带钩子的函数组件
- 实现错误边界保护各个区块
- 懒加载组件提升性能
```typescript
const ProductShowcase = lazy(() => import('./components/features/ProductShowcase'));
```

### Tailwind CSS 约定
- 在 tailwind.config.js 中使用自定义主题扩展
- 使用 @apply 创建可复用的类组合
- 遵循命名模式: `[size]-[component]-[state]`
```css
.lg-card-hover {
  @apply hover:shadow-xl transition-shadow duration-300;
}
```

### 文件命名
- 组件: PascalCase (EmotionalFlashCards.tsx)
- 工具函数: camelCase (scrollUtils.ts)
- 常量: SCREAMING_SNAKE_CASE
- 样式: kebab-case (component-styles.css)

## 3. 组件开发模式

### 组件组合
- 使用组合而非继承
- 实现 render props 以获得灵活布局
- 创建 HOCs 用于共享功能

### Props 和状态管理
- 定义清晰的 prop 接口
```typescript
interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  onSelect?: (id: string) => void;
}
```
- 使用 context 管理主题和共享状态
- 合理避免 prop drilling

### 可复用组件
- 构建原子设计系统
- 维护组件 storybook
- 记录 props 和使用示例

## 4. 性能优化

### 图片和媒体优化
- 使用 Next.js Image 组件自动优化图片
- 懒加载非首屏内容
- 为不同设备提供适当大小的资源

### 代码分割和懒加载
- 按路由分割代码
- 懒加载非关键组件
- 预加载可能的用户路径

### 性能监控
- 实现核心网页指标监控
- 设置性能预算
- 定期进行性能审查

## 5. 测试策略

### 单元测试
- 使用 Jest 和 React Testing Library
- 测试关键组件和功能
- 模拟外部依赖

### 集成测试
- 测试组件间交互
- 验证用户流程
- 测试数据流

### 端到端测试
- 使用 Cypress 或 Playwright
- 测试关键用户旅程
- 验证不同设备和浏览器

## 6. Cursor 特定功能

### 快捷键和命令
- 使用 `/` 命令菜单快速访问功能
- 使用 `Ctrl+K` 进行代码搜索
- 使用 `Ctrl+Shift+L` 进行多光标编辑

### AI 辅助编码
- 使用 Cursor AI 生成组件骨架
- 通过 AI 获取编码建议和优化
- 使用 AI 帮助重构和文档生成 