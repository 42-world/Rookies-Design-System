import { createContext } from '../utils';

export type Theme = 'light' | 'dark';

export const [useTheme, ThemeProvider] = createContext<Theme>('light');
