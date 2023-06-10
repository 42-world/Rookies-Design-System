import { isDarkTheme } from './isDarkTheme';

export function toggleTheme(initialTheme?: 'light' | 'dark') {
  const document = window.document;
  const isDark = initialTheme ? initialTheme === 'light' : isDarkTheme();

  if (isDark) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
}
