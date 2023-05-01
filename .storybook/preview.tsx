import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from '../src';
import './style.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: themes.dark,
      light: themes.light,
      darkClass: 'darkClass',
      lightClass: 'lightClass',
      current: 'light',
      stylePreview: true,
    },
  },
  decorators: [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>],
};

export default preview;

function ThemeWrapper(props) {
  return <ThemeProvider value={useDarkMode() ? 'dark' : 'light'}>{props.children}</ThemeProvider>;
}
