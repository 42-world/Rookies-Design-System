import { useEffect } from 'react';
import '../../styles/_tailwind.css';
import { useFramerThemeData } from './useFramerThemeData';

export function FramerProvider({ children }: { children: React.ReactNode }) {
  const isDark = useFramerThemeData();

  useEffect(() => {
    const document = window.document;
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return <>{children}</>;
}
