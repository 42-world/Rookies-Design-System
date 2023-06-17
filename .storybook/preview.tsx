import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import '../src/styles/_tailwind.css';
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
      classTarget: 'html',
      stylePreview: true,
    },
  },
  decorators: [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>],
};

export default preview;

function ThemeWrapper(props) {
  const isDark = useDarkMode();

  useEffect(() => {
    const document = window.document;
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return <>{props.children}</>;
}
