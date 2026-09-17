# Website Simone Binswanger – Design-Spezifikation

Datum: 2026-09-17 · Status: Entwurf für erste Präsentation

## 1. Zweck

Professionelle Website für Simone Binswanger, lic. iur., Sozialarbeiterin/Sozialpädagogin,
CAS Spiritual Care (Universität Bern), Mediatorin. Sie bietet **spirituelle Beratung und
Begleitung**, **psychosoziale Beratung** und **Entwicklung/Coaching** für Einzelpersonen,
Paare, Familien und Gruppen an. Standort: Winterthur, Schweiz. Sprache der Website: Deutsch
(Schweizer Schreibweise: «ss» statt «ß», Guillemets «…»).

Die Website soll Vertrauen schaffen, den Hintergrund (Recht, Soziale Arbeit, Kindes- und
Erwachsenenschutz, Spiritual Care, Mediation) sichtbar machen und eine klare Kontaktaufnahme
ermöglichen. Erster Entwurf wird am 2026-09-18 gezeigt.

## 2. Quellen und Gewichtung

1. **Skizze** (höchste Gewichtung): drei Bereiche – Landingpage mit «Word Animation» auf einer
   geschwungenen Linie, Services (Beratung, Coaching; kurzfristig + lang; Einzelperson +
   Paare/Gruppen), About (Text + Foto). Stichworte: Spirituelle Beratung + Begleitung,
   Psychosoziale Beratung, Entwicklung; pragmatisch, interdisziplinär, lösungsorientiert.
2. **Sprachnotizen** (zweite Gewichtung, liefern Ton und Haltung): komplexe private und
   berufliche Situationen differenziert erfassen; gemeinsam machbare Lösungen entwickeln;
   Schritt für Schritt begleiten; geschützter Rahmen; ganzheitliche Wahrnehmung auf allen
   Ebenen; sinnvolle Triage – die richtigen Personen einbeziehen; ein bis zwei Gespräche oder
   längere Begleitung; auch Paare und Familien; Hilfe zur Selbsthilfe, Ressourcen stärken,
   «Instrumentenkoffer» erweitern; keine Abhängigkeit schaffen.
3. **CV / Dossier** (dritte Gewichtung): Werdegang, Ausbildungen, Sprachen (siehe Abschnitt 6).
   Persönliche Daten wie AHV-Nummer, Zivilstand, Kinder werden **nicht** verwendet.

## 3. Struktur (Seiten)

| Pfad            | Titel            | Inhalt |
|-----------------|------------------|--------|
| `/`             | Start            | Hero mit Wort-Animation auf geschwungener Linie, Claim, drei Angebotssäulen, Werte-Band (pragmatisch · interdisziplinär · lösungsorientiert), Haltung («So arbeite ich»), Über-mich-Teaser mit Foto, Kontakt-Aufruf |
| `/angebot`      | Angebot          | Beratung, Coaching, Begleitung; Formate (1–2 Gespräche oder längere Begleitung); für wen (Einzelpersonen, Paare, Familien, Gruppen); Themen; Ablauf in vier Schritten; Rahmen & Kosten (Platzhalter «auf Anfrage») |
| `/ueber-mich`   | Über mich        | Foto, persönlicher Text, Haltung, Werdegang als Zeitleiste, Aus- und Weiterbildungen, Sprachen |
| `/kontakt`      | Kontakt          | Kontaktdaten (Platzhalter), optionales Formular (aktiv sobald `formEndpoint` gesetzt), Hinweis auf Vertraulichkeit |
| `/impressum`    | Impressum        | Pflichtangaben nach UWG Art. 3 Abs. 1 lit. s (Name, Adresse, E-Mail), Haftungsausschluss |
| `/datenschutz`  | Datenschutz      | Erklärung nach revDSG (Schweiz): Hosting (GitHub Pages, Server-Logs), Kontaktformular/E-Mail, keine Cookies/Tracking, Rechte der Betroffenen |
| `/404`          | Nicht gefunden   | Kurzer Hinweis, Link zur Startseite |

Navigation: Start · Angebot · Über mich · Kontakt. Footer: Name, Ort, E-Mail, Impressum, Datenschutz.

## 4. Gestaltung

- **Ton:** ruhig, klar, professionell, warm; keine Esoterik-Klischees, keine Stockfoto-Optik.
  Sie-Form gegenüber Besucherinnen und Besuchern, Ich-Form für Simone.
- **Farben:** Papier `#F6F3EC` (Hintergrund), Tinte `#1B2430` (Text), Tiefes Petrol
  `#2F5D5A` (Primär, Links, Linie), Gold-Ocker `#C9A46A` (Akzent, sparsam), Nebel `#E4E0D6`
  (Flächen/Trenner). Kontrast mindestens WCAG AA.
- **Typografie:** Fraunces (variable Serif) für Überschriften, Inter (variable) für Fliesstext.
  Selbst gehostet über `@fontsource-variable` (kein Google-Fonts-Request, Datenschutz).
- **Hero-Animation:** organisch geschwungener SVG-Pfad, der beim Laden gezeichnet wird und
  langsam atmet; darauf wechselnde Begriffe (z. B. Klarheit · Orientierung · Begleitung ·
  Entwicklung · Zuversicht) via GSAP. `prefers-reduced-motion` wird respektiert (statisch).
- **Layout:** max. Inhaltsbreite ~72rem, grosszügige Abstände, klare Abschnittsrhythmik,
  mobil ab 360px einspaltig. Bilder mit `astro:assets` optimiert (AVIF/WebP).
- **Barrierefreiheit:** semantische Landmarken, Skip-Link, Fokus-Stile, Alt-Texte, Sprache `de-CH`.

## 5. Technik

- **Stack:** Astro (statisch, TypeScript), plain CSS mit Custom Properties (kein Tailwind),
  GSAP für die Hero-Animation, `@astrojs/sitemap`, `sharp`. Entspricht dem Stack des
  Portfolios rhizome.ch des Betreibers.
- **Inhalte** liegen getrennt vom Code in `src/content/`:
  - `site.yaml` – Name, Claim, Kontakt, Navigation, Hero-Wörter, Werte
  - `angebote/*.md` – je ein Angebot (Frontmatter: title, order, summary; Body: Beschreibung)
  - `werdegang.yaml` – Zeitleiste und Ausbildungen
  - `rechtliches/*.md` – Impressum, Datenschutz
  Texte sind ohne Programmierkenntnisse editierbar.
- **Hosting:** GitHub Pages (kostenlos) über GitHub Actions (`withastro/action`).
  Repository `joshuabinswanger/simone-beratung` (öffentlich, Voraussetzung für kostenloses
  Pages). `astro.config.mjs`: `site` + `base` für Pages; Umstellung auf eigene Domain in
  der Übergabedoku beschrieben.
- **Formular:** statisch; `formEndpoint` in `site.yaml` (z. B. Formspree/Web3Forms) schaltet
  das Formular frei, sonst werden nur Kontaktdaten und ein E-Mail-Button angezeigt.
- **Qualität:** `astro check`, `astro build`, visuelle Prüfung Desktop/Mobil, Lighthouse-nahe
  Grundregeln (keine externen Requests ausser Hosting).

## 6. Fakten aus dem Dossier (für Über mich)

- lic. iur., Universität Zürich (1992)
- Sozialpädagogin, Kantonale Arbeitserziehungsanstalt Uitikon (1992–1998)
- Amtsvormundin, Regionale Amtsvormundschaft Höfe, Pfäffikon SZ (2000–2004)
- Nachdiplomstudium in gesetzlicher Sozialarbeit, FH Luzern (2000–2003)
- NDK Coaching für Führungskräfte, Berner Fachhochschule (2002–2003)
- Sozialarbeiterin / juristische Mitarbeiterin, Jugendsekretariat Winterthur (2004–2007)
- Grund- und Aufbaukurs Mediation / Familienmediation, Konstanzer Schule (2005–2007)
- Vormundschaftssekretärin, Gemeinde Wald ZH (2008–2012)
- Behördenmitglied / Geschäftsleitung KESB Bezirk Pfäffikon ZH (2012–2015)
- Behördenmitglied Kindesschutz, KESB Stadt St. Gallen (2015)
- Sozialarbeiterin, seit 2021 Standortleiterin, DFA – Die kirchliche Fachstelle bei
  Arbeitslosigkeit, Winterthur (seit 2016)
- CAS Spiritual Care, Universität Bern (2017–2018)
- Sprachen: Deutsch, Französisch, Englisch, Italienisch

## 7. Offene Punkte (Platzhalter, von Simone zu ergänzen)

- Postadresse der Praxis, Telefonnummer, E-Mail-Adresse, Domain
- Honorar / Kostenregelung
- Freigabe des Fotos und der Formulierungen zu aktuellen Arbeitgebern
- Formular-Endpoint (Formspree o. ä.), falls Formular gewünscht
