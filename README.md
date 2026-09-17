# Website Simone Binswanger

Website für die Beratungspraxis von Simone Binswanger (spirituelle Beratung &
Begleitung, psychosoziale Beratung, Entwicklung & Coaching) in Winterthur.

**Live:** https://joshuabinswanger.github.io/simone-beratung/

## Für wen ist welches Dokument?

- **Texte ändern, ohne zu programmieren** → [docs/INHALTE-PFLEGEN.md](docs/INHALTE-PFLEGEN.md)
- **Hosting, Domain, Übergabe an eine Agentur oder neue Besitzerin** → [docs/HANDOVER.md](docs/HANDOVER.md)
- **Was Simone noch liefern/entscheiden muss, bevor die Seite live geht** → [docs/OFFENE-PUNKTE.md](docs/OFFENE-PUNKTE.md)
- **Warum die Seite so aufgebaut ist (Design-Entscheidungen)** → [docs/superpowers/specs/2026-09-17-simone-website-design.md](docs/superpowers/specs/2026-09-17-simone-website-design.md)

## Technik-Stack

- [Astro](https://astro.build) (statischer Seitengenerator, TypeScript)
- Reines CSS mit Custom Properties (kein Tailwind) – siehe [src/styles/global.css](src/styles/global.css)
- [GSAP](https://gsap.com) für die Wort-Animation im Hero-Bereich
- Node.js ≥ 22 erforderlich

## Schnellstart (lokal)

```bash
npm install        # Abhängigkeiten installieren (einmalig)
npm run dev        # lokalen Entwicklungsserver starten (mit Live-Reload)
npm run build       # Produktions-Build nach dist/ erzeugen
npm run preview     # den Produktions-Build lokal testen
```

## Wo die Inhalte liegen

Alle Texte liegen getrennt vom Code in [src/content/](src/content/) und lassen sich
direkt auf GitHub bearbeiten – ohne Programmierkenntnisse. Details, inklusive einer
Tabelle «welcher Text steht in welcher Datei», stehen in
[docs/INHALTE-PFLEGEN.md](docs/INHALTE-PFLEGEN.md).

## Wie das Deployment funktioniert

Jeder Push auf den Branch `main` löst über GitHub Actions
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) automatisch einen
Build und eine Veröffentlichung auf GitHub Pages aus (kostenlos, ca. 1–2 Minuten).
Details, Domain-Wechsel und Übergabe: [docs/HANDOVER.md](docs/HANDOVER.md).

## Ordnerübersicht

| Ordner/Datei | Inhalt |
|---|---|
| `src/pages/` | Die Seiten der Website (Start, Angebot, Über mich, Kontakt, 404) |
| `src/content/` | Redaktionelle Inhalte: `site.yaml`, `werdegang.yaml`, `angebote/*.md`, `rechtliches/*.md` |
| `src/components/` | Wiederverwendbare Bausteine (Header, Footer, Hero, Kontakt-Aufruf …) |
| `src/layouts/` | Grundgerüst der Seiten (`BaseLayout.astro`) |
| `src/styles/global.css` | Farben, Schriften und Abstände als CSS-Variablen |
| `src/assets/simone-portrait.jpg` | Porträtfoto |
| `public/` | Favicon, Apple-Touch-Icon, Social-Preview-Bild (`og-image.jpg`) |
| `docs/superpowers/specs/` | Design-Spezifikation der Website |
| `docs/` | Übergabe- und Pflege-Dokumentation (diese Dateien) |
