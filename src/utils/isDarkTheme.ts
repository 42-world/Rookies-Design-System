export function isDarkTheme() {
  const document = window.document;

  return document.documentElement.classList.contains('dark');
}
