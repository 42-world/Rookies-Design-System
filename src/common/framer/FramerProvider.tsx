import { ThemeProvider } from '../../context';
import { useFramerThemeData } from './useFramerThemeData';

export function FramerProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider value={useFramerThemeData() ? 'dark' : 'light'}>{children}</ThemeProvider>;
}
