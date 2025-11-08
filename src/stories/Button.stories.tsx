import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Game-inspired button component with retro pixel-perfect styling. Supports multiple variants, sizes, and states for gamified UI experiences.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'outline'],
      description: 'Visual style variant',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    pixelated: {
      control: 'boolean',
      description: 'Enable retro pixel font style',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interaction',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: '✓ Success',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: '✗ Danger',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

// Size Variations
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const DisabledDanger: Story = {
  args: {
    variant: 'danger',
    disabled: true,
    children: 'Disabled Danger',
  },
};

// Font Styles
export const PixelatedFont: Story = {
  args: {
    pixelated: true,
    children: 'Retro Pixel Font',
  },
};

export const NonPixelatedFont: Story = {
  args: {
    pixelated: false,
    children: 'Modern Sans Font',
  },
};

// Interactive Examples
export const WithEmoji: Story = {
  args: {
    variant: 'success',
    size: 'lg',
    children: '🎮 Level Up!',
  },
};

export const XPButton: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: '+10 XP',
  },
};

export const AchievementUnlocked: Story = {
  args: {
    variant: 'success',
    size: 'lg',
    children: '🏆 Achievement Unlocked!',
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// Gaming UI Examples
export const GamingUIExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <Button variant="primary" size="lg">▶ Start Game</Button>
      <Button variant="secondary">⚙️ Settings</Button>
      <Button variant="success">💾 Save Progress</Button>
      <Button variant="danger">🚪 Quit</Button>
      <Button variant="outline">📊 Leaderboard</Button>
    </div>
  ),
};
