# Website Simone Binswanger – Hinweise für KI-Assistenten

Statische Astro-Website (Deutsch, Schweiz) für Simone Binswanger: spirituelle Beratung
und Begleitung, psychosoziale Beratung, Entwicklung/Coaching in Winterthur.

## Leitplanken

- **Sprache:** Deutsch mit Schweizer Schreibweise («ss» statt «ß», Guillemets «…»).
  Besucher werden mit «Sie» angesprochen, Simone spricht in der Ich-Form.
- **Ton:** ruhig, professionell, warm, konkret. Keine Esoterik-Klischees, keine Werbesprache,
  keine erfundenen Fakten, Zitate oder Preise.
- **Inhalte** liegen in `src/content/` (YAML + Markdown) und werden über `src/lib/site.ts`
  (Typen!) und `src/content.config.ts` (Zod-Schemas) geladen. Texte dort ändern, nicht in
  den Komponenten.
- **Design-Tokens** in `src/styles/global.css` (Farben, Schriftgrössen, Abstände). Kein
  Tailwind, keine externen Requests (Fonts sind selbst gehostet).
- **Interne Links** immer über `url()` aus `src/lib/url.ts` bauen (GitHub Pages läuft unter
  dem Unterpfad `/simone-beratung`).
- **Scoped Styles:** Für SVGs aus `<Icon />` innerhalb einer Komponente `:global(svg)` verwenden.
- **Animationen** (GSAP im Hero, `.reveal`) müssen `prefers-reduced-motion` respektieren.
- Persönliche Daten aus dem Bewerbungsdossier (AHV-Nr., Zivilstand, Kinder) gehören
  **nicht** auf die Website oder ins Repository.

## Befehle

```bash
npm install
npm run dev        # Entwicklung (Astro empfiehlt: npx astro dev --background)
npm run build      # Produktions-Build nach dist/
npm run preview    # Build lokal ansehen
npx astro check    # Typprüfung
```

## Dokumentation

- Design-Spezifikation: `docs/superpowers/specs/2026-09-17-simone-website-design.md`
- Übergabe / Hosting: `Docs/HANDOVER.md`
- Inhalte pflegen: `Docs/INHALTE-PFLEGEN.md`
- Offene Punkte: `Docs/OFFENE-PUNKTE.md`
- Astro-Hinweise des Starters: `AGENTS.md`
