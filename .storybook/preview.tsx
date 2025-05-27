// .storybook/preview.tsx
import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/styles/theme';

// Importar Tailwind CSS
import '../src/styles/globals.css';

// Global decorator
const GlobalDecorator = (Story: any) => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-gray-50">
        <Story />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    layout: 'fullscreen',
  },
  decorators: [GlobalDecorator],
};

export default preview;