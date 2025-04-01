# Laihe Baijiu Project Development Rules for WindSurf AI IDE

## 1. Project Structure Rules

### Component Organization
- `/src/components/` follows feature-first organization
  - `core/`: Base components (Button, Input, Card)
  - `layout/`: Layout components (Header, Footer, Navigation)
  - `sections/`: Page sections (Hero, Products, Story)
  - `features/`: Complex features (EmotionalCards, ProductShowcase)

### Asset Management
- `/public/assets/`
  - `images/`: Categorized by section (products/, brand-story/, etc.)
  - `fonts/`: Custom fonts for traditional Chinese aesthetics
  - `videos/`: Product demonstrations and brand stories
- Use descriptive naming: `[section]-[purpose]-[variant].ext`

### Utility Functions
- `/src/utils/`
  - Separate concerns into distinct files (animation.ts, scroll.ts)
  - Use TypeScript for better type safety
  - Export named functions for better tree-shaking

## 2. Coding Standards

### React Best Practices
- Use functional components with hooks
- Implement error boundaries for sections
- Lazy load components for better performance
```typescript
const ProductShowcase = lazy(() => import('./components/features/ProductShowcase'));
```

### Tailwind CSS Conventions
- Use custom theme extensions in tailwind.config.js
- Create reusable class combinations with @apply
- Follow naming pattern: `[size]-[component]-[state]`
```css
.lg-card-hover {
  @apply hover:shadow-xl transition-shadow duration-300;
}
```

### File Naming
- Components: PascalCase (EmotionalFlashCards.tsx)
- Utilities: camelCase (scrollUtils.ts)
- Constants: SCREAMING_SNAKE_CASE
- Styles: kebab-case (component-styles.css)

## 3. Component Development Patterns

### Component Composition
- Use composition over inheritance
- Implement render props for flexible layouts
- Create HOCs for shared functionality

### Props and State Management
- Define clear prop interfaces
```typescript
interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  onSelect?: (id: string) => void;
}
```
- Use context for theme and shared state
- Implement proper prop drilling prevention

### Reusable Components
- Build atomic design system
- Maintain a component storybook
- Document props and usage examples

## 4. WindSurf AI Integration Rules

### AI Prompting Guidelines
- Start prompts with component purpose and requirements
- Include design system constraints
- Specify error handling requirements

Example prompt:
```
Create a ProductCard component that:
- Follows the brand's traditional Chinese aesthetic
- Uses Tailwind CSS for styling
- Implements hover animations
- Handles loading and error states
```

### Code Generation Patterns
- Generate component scaffolding
- Create unit test templates
- Generate type definitions

### Testing Procedures
- Unit tests for components
- Integration tests for features
- E2E tests for critical paths

## Development Workflow

1. Feature Planning
   - Create component specification
   - Define AI prompts
   - Set acceptance criteria

2. Implementation
   - Generate initial code with WindSurf
   - Review and refine AI output
   - Implement additional requirements

3. Testing
   - Run unit tests
   - Perform visual regression testing
   - Validate responsive behavior

4. Review and Refinement
   - Code review
   - Performance optimization
   - Documentation update

## WindSurf AI Commands

### Component Generation
```bash
ws generate component ProductCard --template feature
ws generate test ProductCard
ws generate story ProductCard
```

### Common Prompts
1. Component Creation:
```
Create a [ComponentName] that implements [specific features] using Tailwind CSS and follows our traditional Chinese aesthetic guidelines.
```

2. Styling Enhancement:
```
Enhance [ComponentName] with animations and hover effects that reflect traditional Chinese design elements.
```

3. Feature Implementation:
```
Implement [FeatureName] in [ComponentName] with proper error handling and loading states.
```

## Version Control

- Feature branches: `feature/[component-name]`
- Bug fixes: `fix/[issue-number]-[brief-description]`
- Releases: `release/v[major].[minor].[patch]`

## Documentation

- Maintain README.md with setup instructions
- Document component props and examples
- Include visual references for design patterns

These rules ensure consistency and maintainability while leveraging WindSurf AI's capabilities for efficient development of the Laihe Baijiu project.