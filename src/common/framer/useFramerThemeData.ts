import { useEffect, useState } from 'react';

/**
 * Get the theme from the framer.
 */
export function useFramerThemeData() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isFramerEditor = window.location.href.includes('framercanvas');
    if (isFramerEditor) {
      // Listen for theme changes from Framer
      const handleFramerThemeChange = (e: WindowEventMap['message']) => {
        if ('appearance' in e.data) {
          setIsDarkMode(e.data.appearance === 'dark');
        }
      };
      window.addEventListener('message', handleFramerThemeChange);
      const isFramerDarkMode = window.document.querySelector('body')?.classList.contains('framer-theme-dark') ?? false;

      // Set the initial theme
      setIsDarkMode(isFramerDarkMode);

      return () => {
        window.removeEventListener('message', handleFramerThemeChange);
      };
    }

    // Listen for OS theme changes
    const handleOsThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const isOsDarkMode = darkModeQuery.matches;
    darkModeQuery.addEventListener('change', handleOsThemeChange);

    // Set the initial theme
    setIsDarkMode(isOsDarkMode);

    // Cleanup listener on unmount
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleOsThemeChange);
    };
  }, []);

  return isDarkMode;
}
