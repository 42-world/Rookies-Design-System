/**
 * Set the theme of the website.
 * @note
 * This function only works when `window` exists.
 *
 * @param initialTheme
 * @returns
 */
export function setTheme(initialTheme?: 'light' | 'dark') {
  if (typeof window === 'undefined') {
    return;
  }

  const document = window.document;
  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
