import { createContext } from 'utils/createContext';

type Theme = 'light' | 'dark';

const [useTheme, ThemeProvider] = createContext<Theme>('light');

export { useTheme, ThemeProvider };
