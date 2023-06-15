/**
 * Set the theme of the website.
 * @note
 * This function only works when `window` exists.
 *
 * @param theme
 * @returns
 */
export function setTheme(theme?: 'light' | 'dark'): void {
  if (typeof window === 'undefined') {
    return;
  }

  const document = window.document;
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
