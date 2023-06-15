/**
 * Returns true if the current theme is dark.
 *
 * @note
 * This function only works when `window` exists.
 *
 * @returns
 */
export function isDarkTheme(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const document = window.document;
  return document.documentElement.classList.contains('dark');
}
