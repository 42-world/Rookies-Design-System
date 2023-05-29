import { useEffect, useState } from 'react';

/**
 * Get the theme from the framer.
 */
export function useFramerThemeData() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleChange = (e: WindowEventMap['message']) => {
      // framer 에서 테마를 변경할때마다 이벤트가 발생한다.
      if ('appearance' in e.data) {
        setIsDarkMode(e.data.appearance === 'dark');
        return;
      }
    };

    window.addEventListener('message', handleChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('message', handleChange);
    };
  }, []);

  return isDarkMode;
}
