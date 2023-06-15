import { isDarkTheme } from './isDarkTheme';
import { setTheme } from './setTheme';

/**
 * Toggles the current theme.
 *
 * @note
 * This function only works when `window` exists.
 *
 * @returns
 */
export function toggleTheme(): void {
  if (typeof window === 'undefined') {
    return;
  }

  setTheme(isDarkTheme() ? 'light' : 'dark');
}
