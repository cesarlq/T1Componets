// .storybook/preview.tsx
import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/styles/theme';

const withThemeProvider = (StoryFn) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoryFn />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;