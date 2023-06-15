/**
 * Returns true if the OS is in dark mode.
 *
 * @note
 * This function only works when `window` exists.
 *
 * @returns
 */
export function isOsDarkTheme(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
