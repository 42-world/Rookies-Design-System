import { useEffect } from 'react';
import '../../styles/_tailwind.css';
import { toggleTheme } from '../../utils';
import { useFramerThemeData } from './useFramerThemeData';

export function FramerProvider({ children }: { children: React.ReactNode }) {
  const isDark = useFramerThemeData();

  useEffect(() => {
    toggleTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  return <>{children}</>;
}
