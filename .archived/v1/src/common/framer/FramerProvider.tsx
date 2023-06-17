import { resetCss } from '../../assets/styles/resetCss';
import { ThemeProvider } from '../../context';
import { useFramerThemeData } from './useFramerThemeData';

export function FramerProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider value={useFramerThemeData() ? 'dark' : 'light'}>
      <div className={resetCss}>{children}</div>
    </ThemeProvider>
  );
}
