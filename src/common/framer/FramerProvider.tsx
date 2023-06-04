import { ThemeProvider } from '../../context';
import '../../styles/_tailwind.css';
import { useFramerThemeData } from './useFramerThemeData';

export function FramerProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider value={useFramerThemeData() ? 'dark' : 'light'}>
      <div>{children}</div>
    </ThemeProvider>
  );
}
