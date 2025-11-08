<div align="center">
  <img src="./public/assets/favicon_io/android-chrome-512x512.png" alt="xpui Logo" width="200"/>

> The Playful React UI Library with pixel-art aesthetics

[![npm version](https://img.shields.io/npm/v/@acadxp/xpui.svg)](https://www.npmjs.com/package/@acadxp/xpui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-Ready-38bdf8.svg)](https://tailwindcss.com/)

[Documentation](https://xpui.vercel.app/) • [NPM Package](https://www.npmjs.com/package/@acadxp/xpui) • [Report Bug](https://github.com/acadxp/xpui/issues)

</div>

---

## 🌟 Why xpui?

**xpui** is a React UI library designed for developers who want to add a unique, game-inspired aesthetic to their applications. Perfect for:

- 🎮 **Gaming platforms** and educational apps
- 🎯 **AcadXP ecosystem** projects
- 🎨 **Creative projects** that need a distinct retro look
- 🚀 **Modern apps** with a nostalgic twist

Built with modern web technologies and best practices, xpui combines the charm of pixel-art design with the power of React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Pixel-art styling** - Retro aesthetic with modern functionality
- 🎯 **TypeScript** - Full type safety
- 🎪 **Tailwind CSS** - Utility-first styling with tailwind-variants
- 🧩 **Flexible** - Customizable with className overrides
- ♿ **Accessible** - Built with accessibility in mind
- 📦 **Lightweight** - Minimal dependencies

## 📦 Installation

```bash
npm install @acadxp/xpui
# or
pnpm add @acadxp/xpui
# or
yarn add @acadxp/xpui
```

### Peer Dependencies

```bash
npm install react react-dom tailwindcss @tailwindcss/vite
```

## 🚀 Quick Start

### 1. Import styles in your app

```tsx
import "@acadxp/xpui/styles";
```

### 2. Use components

```tsx
import { Button } from "@acadxp/xpui";

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
import { Button } from "@acadxp/xpui";

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
import { cn } from "@acadxp/xpui";

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
- 🎭 Tooltip
- 🎪 Dropdown
- And more...

## 🛠️ Development

Want to contribute or run locally?

```bash
# Clone the repository
git clone https://github.com/acadxp/xpui.git
cd xpui

# Install dependencies
pnpm install

# Start Storybook for development
pnpm dev

# Build the library
pnpm build

# Run tests
pnpm test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT © [DripCode-Studio](https://github.com/DripCode-Studio)

---

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@acadxp/xpui)
- [GitHub Repository](https://github.com/acadxp/xpui)
- [Report Issues](https://github.com/acadxp/xpui/issues)
- [AcadXP Platform](https://github.com/acadxp)

---

<div align="center">
  <p>Made with ❤️ by the AcadXP Team</p>
  <p>⭐ Star us on GitHub if you find this project helpful!</p>
</div>
