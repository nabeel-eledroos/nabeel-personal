export type ThemeStyle = 'y2k-grid' | 'ethereal';

const THEME_KEY = 'portfolio-theme-style';

export function getTheme(): ThemeStyle {
  if (typeof window === 'undefined') return 'ethereal';
  return (localStorage.getItem(THEME_KEY) as ThemeStyle) || 'ethereal';
}

export function setTheme(theme: ThemeStyle): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.setAttribute('data-theme', theme);
  window.dispatchEvent(new CustomEvent('theme-change', { detail: theme }));
}

export function toggleTheme(): ThemeStyle {
  const current = getTheme();
  const next = current === 'y2k-grid' ? 'ethereal' : 'y2k-grid';
  setTheme(next);
  return next;
}

export function initTheme(): void {
  const theme = getTheme();
  document.documentElement.setAttribute('data-theme', theme);
}
