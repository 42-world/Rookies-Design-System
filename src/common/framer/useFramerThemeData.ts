import { useEffect, useState } from 'react';

/**
 * Get the theme from the framer.
 */
export function useFramerThemeData() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Listen for OS theme changes
    const handleOsThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const isOsDarkMode = darkModeQuery.matches;
    darkModeQuery.addEventListener('change', handleOsThemeChange);

    // Listen for theme changes from Framer
    const handleFramerThemeChange = (e: WindowEventMap['message']) => {
      if ('appearance' in e.data) {
        setIsDarkMode(e.data.appearance === 'dark');
      }
    };
    window.addEventListener('message', handleFramerThemeChange);
    const isFramerDarkMode = window.document.querySelector('body')?.classList.contains('framer-theme-dark') ?? false;
    const isFramerEditor = window.location.href.includes('framercanvas');

    // Set the initial theme
    if (isFramerEditor) {
      setIsDarkMode(isFramerDarkMode);
    } else {
      setIsDarkMode(isOsDarkMode);
    }

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('message', handleFramerThemeChange);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleOsThemeChange);
    };
  }, []);

  return isDarkMode;
}
