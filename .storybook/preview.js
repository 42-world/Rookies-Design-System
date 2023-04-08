import React, { useState } from 'react';
import { Button, ThemeProvider } from '../src';
import '../src/assets/styles/reset.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const ThemeDecorator = (Story) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider value={theme}>
      <div style={{ marginBottom: '16px' }}>
        <Button type="text" text="ToggleTheme" size="small" style="default" theme={theme} onClick={toggleTheme} />
      </div>
      {Story()}
    </ThemeProvider>
  );
};

export const decorators = [ThemeDecorator];
