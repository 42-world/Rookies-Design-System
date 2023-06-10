export function toggleTheme(isDark: boolean) {
  const document = window.document;
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
