# Übergabedokumentation

Diese Seite richtet sich an die Person oder Agentur, die die Website künftig
technisch betreut. Für reine Textänderungen genügt
[INHALTE-PFLEGEN.md](INHALTE-PFLEGEN.md).

## Architektur in Kürze

1. Die Website ist mit **Astro** gebaut: statische HTML-Seiten, kein Server,
   kein Datenbankzugriff zur Laufzeit.
2. Sprache: **TypeScript** (Astro-Komponenten, Konfiguration), reines **CSS**
   (keine Frameworks wie Tailwind oder Bootstrap).
3. **GSAP** animiert nur die wechselnden Wörter im Titelbereich der Startseite;
   Linie und Einblenden sind reine CSS-Animationen. Alles respektiert
   `prefers-reduced-motion`; die Scroll-Einblendungen laufen nur ab
   Tablet-Breite, auf dem Handy ist alles sofort sichtbar.
4. Seiten liegen in `src/pages/`, wiederverwendbare Bausteine in
   `src/components/`, das Grundgerüst (Kopf, `<head>`, Skip-Link) in
   `src/layouts/BaseLayout.astro`.
5. Redaktionelle Inhalte liegen **getrennt vom Code** in `src/content/`
   (`site.yaml`, `werdegang.yaml`, `angebote/*.md`, `rechtliches/*.md`) und
   werden über `src/lib/site.ts` bzw. `src/content.config.ts` eingelesen und
   typgeprüft.
6. Design-Tokens (Farben, Schriftgrössen, Abstände) liegen zentral in
   `src/styles/global.css` als CSS-Variablen.
7. Es gibt **keine Datenbank, keine Cookies, kein Tracking, keine
   Drittanbieter-Skripte** – alles ist statisch und datenschutzfreundlich.
8. Bilder werden über `astro:assets`/`sharp` beim Build optimiert.
9. `@astrojs/sitemap` erzeugt automatisch eine `sitemap.xml`.
10. Die vollständige Design-Spezifikation (Hintergrund, Entscheidungen) steht in
    [docs/superpowers/specs/2026-09-17-simone-website-design.md](../docs/superpowers/specs/2026-09-17-simone-website-design.md).

## Hosting & Deployment

- Gehostet auf **GitHub Pages**, kostenlos, solange das Repository öffentlich
  ist (Voraussetzung für kostenlose Pages bei privaten Konten).
- Repository-Einstellung: **Settings → Pages → Source → «GitHub Actions»**.
- Jeder Push auf den Branch `main` löst automatisch
  `.github/workflows/deploy.yml` aus: Build mit Node 22 über `withastro/action`,
  danach Veröffentlichung über `actions/deploy-pages`. Dauer ca. 1–2 Minuten.
- Fortschritt/Fehler: Reiter **«Actions»** im Repository.
- Aktuelle Live-URL: https://joshuabinswanger.github.io/simone-beratung/

## Repository übertragen (an Simone oder eine Agentur)

1. Im aktuellen Repository: **Settings → (ganz unten) Danger Zone → Transfer
   ownership**.
2. Zielkonto (neuer GitHub-Benutzername/-Organisation) eingeben und bestätigen.
   Das Zielkonto muss die Übertragung annehmen.
3. **Nach der Übertragung neu einrichten**, da GitHub Pages beim Besitzerwechsel
   nicht automatisch übernommen wird:
   - **Settings → Pages → Source → «GitHub Actions»** erneut setzen.
   - Die Live-URL ändert sich zu `https://<neuer-benutzername>.github.io/simone-beratung/`.
   - `SITE_URL` (bzw. die Konstante `SITE` in `astro.config.mjs`, aktuell
     `https://joshuabinswanger.github.io`) muss auf den neuen Benutzernamen
     angepasst werden. `SITE_BASE`/`base` (`/simone-beratung`) bleibt gleich,
     solange der Repository-Name unverändert bleibt.

## Eigene Domain anbinden

1. Domain kaufen, z. B. bei einem Schweizer Anbieter wie
   [Infomaniak](https://www.infomaniak.com) oder [Hostpoint](https://www.hostpoint.ch)
   (empfohlen wegen Schweizer Support und `.ch`-Verwaltung).
2. Beim Domain-Anbieter einen **CNAME-Eintrag** für die gewünschte Subdomain
   (z. B. `www`) auf `joshuabinswanger.github.io` setzen (oder auf den neuen
   Benutzernamen, falls das Repository übertragen wurde).
3. Im Repository die Datei `public/CNAME` anlegen mit der Domain als einzigem
   Inhalt, z. B.:
   ```
   www.simone-binswanger.ch
   ```
4. In `astro.config.mjs` bzw. per Umgebungsvariable:
   - `site` auf `https://www.simone-binswanger.ch` setzen (bzw. `SITE_URL` in
     den Workflow-/Build-Einstellungen entsprechend setzen),
   - `base` **entfernen** (nicht mehr benötigt, da keine Unterpfad-Installation
     mehr nötig ist).
   Beide Wege – Umgebungsvariablen setzen **oder** die zwei Konstanten in
   `astro.config.mjs` direkt bearbeiten – funktionieren gleichwertig; wichtig
   ist nur, dass am Ende genau eine der beiden Varianten aktiv ist.
5. In den Repository-Einstellungen unter **Settings → Pages** die Domain
   eintragen und **«Enforce HTTPS»** aktivieren, sobald verfügbar (kann nach
   der DNS-Umstellung einige Stunden dauern).

## Alternative Hosting-Anbieter

Falls GitHub Pages nicht mehr gewünscht ist, lässt sich das Projekt unverändert
auch bei anderen kostenlosen Anbietern bauen:

- **Cloudflare Pages** – kostenlos, Build-Befehl `npm run build`, Ausgabe-Ordner `dist`.
- **Netlify** – kostenlos, gleicher Build-Befehl `npm run build`, Ausgabe-Ordner `dist`.

Bei beiden entfällt in der Regel der `base`-Unterpfad (analog zur eigenen
Domain oben), da sie Projekte unter einer eigenen Root-Domain ausliefern.

## Lokale Entwicklung

Voraussetzung: **Node.js 22 oder neuer**.

```bash
npm install        # einmalig
npm run dev         # Entwicklungsserver mit Live-Reload
npm run build        # Produktions-Build nach dist/
npm run preview      # Produktions-Build lokal testen
```

## Qualitätsprüfung vor jeder grösseren Änderung

```bash
npm run build        # schlägt fehl, falls Inhalte/Code fehlerhaft sind
npx astro check       # prüft Typen (TypeScript) und Astro-Komponenten
```

## Design-Tokens (`src/styles/global.css`)

Farben (als CSS-Variablen definiert):

| Variable | Hex | Verwendung |
|---|---|---|
| `--bg` | `#FFFFFF` | Hintergrund |
| `--bg-soft` | `#F4F7FB` | abwechselnde, leicht getönte Abschnitte |
| `--line` | `#E3E8F0` | Rahmen, Trenner |
| `--ink` | `#16213A` | Haupttext |
| `--ink-soft` / `--ink-muted` | `#485368` / `#76819A` | Nebentext |
| `--blue` | `#2A5BD7` | Primärfarbe: Links, Buttons, Nummern |
| `--blue-tint` | `#E9F0FC` | helle blaue Flächen (z. B. Kontakt-Block) |
| `--warm` | `#E38B5A` | warmer Akzent (Apricot), sparsam eingesetzt |
| `--warm-tint` | `#FDEEE4` | helle warme Fläche hinter dem Porträt |

Schriften: **Manrope** (Überschriften) und **Inter** (Fliesstext), beide als
Variable Fonts selbst gehostet über `@fontsource-variable` – kein Google-Fonts-
Aufruf, keine externe Anfrage.

## Barrierefreiheit & Datenschutz

- Keine Cookies, kein Tracking, keine Drittanbieter-Skripte.
- Schriften sind selbst gehostet (kein Datenabfluss an Google Fonts o. Ä.).
- Animationen respektieren `prefers-reduced-motion` (Betriebssystem-Einstellung
  für reduzierte Bewegung wird beachtet).
- Semantische Landmarken, Skip-Link, sichtbare Fokus-Stile, Alt-Texte für Bilder.

## Kosten

- Hosting über GitHub Pages: **0 CHF**.
- Eigene Domain (optional): **ca. 15 CHF/Jahr**, abhängig vom Anbieter und der
  Endung (`.ch` günstiger als z. B. `.com` bei manchen Registraren).
