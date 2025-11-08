import type { Preview } from '@storybook/react-vite';
import '../src/index.css'; // Import component library styles

const preview: Preview = {
  parameters: {
    // AcadXP Theme
    backgrounds: {
      default: 'acadxp-dark',
      values: [
        {
          name: 'acadxp-dark',
          value: 'linear-gradient(135deg, #1e1b4b 0%, #1e3a5f 50%, #0f172a 100%)',
        },
        {
          name: 'dark',
          value: '#1e1b4b',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;