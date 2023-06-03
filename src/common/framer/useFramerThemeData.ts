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
    darkModeQuery.addEventListener('change', handleOsThemeChange);

    // Set initial theme
    setIsDarkMode(darkModeQuery.matches);

    // Listen for theme changes from Framer
    const handleFramerThemeChange = (e: WindowEventMap['message']) => {
      if ('appearance' in e.data) {
        setIsDarkMode(e.data.appearance === 'dark');
        return;
      }
    };
    window.addEventListener('message', handleFramerThemeChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('message', handleFramerThemeChange);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleOsThemeChange);
    };
  }, []);

  return isDarkMode;
}
