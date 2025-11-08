# 🎮 xpui

> The Playful React UI Library with pixel-art aesthetics

[![npm version](https://img.shields.io/npm/v/xpui.svg)](https://www.npmjs.com/package/xpui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Pixel-art styling** - Retro aesthetic with modern functionality
- 🎯 **TypeScript** - Full type safety
- 🎪 **Tailwind CSS** - Utility-first styling with tailwind-variants
- 🧩 **Flexible** - Customizable with className overrides
- ♿ **Accessible** - Built with accessibility in mind
- 📦 **Lightweight** - Minimal dependencies

## 📦 Installation

```bash
npm install xpui
# or
pnpm add xpui
# or
yarn add xpui
```

### Peer Dependencies

```bash
npm install react react-dom tailwindcss @tailwindcss/vite
```

## 🚀 Quick Start

### 1. Import styles in your app

```tsx
import "xpui/styles";
```

### 2. Use components

```tsx
import { Button } from "xpui";

function App() {
  return (
    <Button variant="primary" size="lg" onClick={() => alert("Clicked!")}>
      Click Me!
    </Button>
  );
}
```

## 📚 Components

### Button

A pixel-art styled button component with multiple variants and sizes.

```tsx
import { Button } from 'xpui';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Pixelated font
<Button pixelated>Retro Font</Button>
<Button pixelated={false}>Normal Font</Button>

// Custom styling
<Button className="bg-purple-500 hover:bg-purple-600">
  Custom
</Button>

// Disabled
<Button disabled>Disabled</Button>
```

#### Props

| Prop                       | Type                                                             | Default     | Description                       |
| -------------------------- | ---------------------------------------------------------------- | ----------- | --------------------------------- |
| `variant`                  | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'outline'` | `'primary'` | Button color variant              |
| `size`                     | `'sm' \| 'md' \| 'lg'`                                           | `'md'`      | Button size                       |
| `pixelated`                | `boolean`                                                        | `true`      | Use monospace font for retro look |
| `disabled`                 | `boolean`                                                        | `false`     | Disable the button                |
| `className`                | `string`                                                         | -           | Additional CSS classes            |
| All HTML button attributes | -                                                                | -           | onClick, type, etc.               |

## 🛠️ Utilities

### cn (Class Name Utility)

Merge and conditionally apply CSS classes.

```tsx
import { cn } from "xpui";

<Button className={cn("custom-class", isActive && "active-class")}>
  Button
</Button>;
```

## 🎨 Customization

All components support className overrides for full customization:

```tsx
<Button variant="primary" className="rounded-full shadow-2xl border-4">
  Custom Styled
</Button>
```

## 📖 More Components Coming Soon

- 🎯 Input
- 🎪 Card
- 🎨 Badge
- 📦 Modal
- And more...

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [DripCode-Studio](https://github.com/DripCode-Studio)

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/xpui)
- [GitHub Repository](https://github.com/acadxp/xpui)
- [Report Issues](https://github.com/acadxp/xpui/issues)
