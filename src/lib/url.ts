/**
 * Baut interne Links mit dem konfigurierten `base` (GitHub Pages läuft unter
 * einem Unterpfad). Immer für href/src interner Ziele verwenden.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}` || "/";
}

export function isActive(current: string, href: string): boolean {
  const a = url(href).replace(/\/$/, "");
  const b = current.replace(/\/$/, "");
  return href === "/" ? a === b : b.startsWith(a);
}
