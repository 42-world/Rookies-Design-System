import { useEffect } from 'react';
import '../../styles/_tailwind.css';
import { setTheme } from '../../utils';
import { useFramerThemeData } from './useFramerThemeData';

export function FramerProvider({ children }: { children: React.ReactNode }) {
  const isDark = useFramerThemeData();

  useEffect(() => {
    setTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  return <>{children}</>;
}
