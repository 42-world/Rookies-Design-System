import { createContext } from '../utils';

export type Theme = 'light' | 'dark';

const [useTheme, ThemeProvider] = createContext<Theme>('light');

export { useTheme, ThemeProvider };
