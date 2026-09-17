> Spiegelkopie der Memory-Datei `~/.claude/projects/E--Simone/memory/simone-website-project.md` – damit jede Claude-Instanz sie direkt im Repo lesen kann.

---
name: simone-website-project
description: Website project for Simone Binswanger (spiritual care / psychosocial counselling, Winterthur) – repo location, hosting, source material, open placeholders
metadata:
  type: project
---

Website for Simone Binswanger (Josh's relative; lic. iur., Sozialarbeiterin, CAS Spiritual Care, Standortleiterin DFA Winterthur). Built overnight 2026-09-17 as a first draft for a presentation on 2026-09-18.

- **Code:** `E:\Simone\website` (Astro 7 + TS + plain CSS + GSAP). Repo: https://github.com/joshuabinswanger/simone-beratung (public, needed for free GitHub Pages).
- **Live:** https://joshuabinswanger.github.io/simone-beratung/ via GitHub Actions (`.github/workflows/deploy.yml`, `withastro/action`). `base: /simone-beratung` in `astro.config.mjs`; env `SITE_URL`/`SITE_BASE` override for a custom domain.
- **Source material** (not in repo, contains AHV number etc.): `E:\Simone\` – sketch photo (highest weight), 6 WhatsApp voice notes (transcribed to `E:\Simone\Sprachnotizen Transkript.txt` with faster-whisper), Bewerbungsdossier PDF (text in `E:\Simone\CV Textextrakt.txt`), portrait `.jfif`.
- **Content** lives in `src/content/` (site.yaml, werdegang.yaml, angebote/*.md, rechtliches/*.md); types in `src/lib/site.ts`.
- **Placeholders Simone must fill:** e-mail, phone, practice address, Honorar text, Formspree endpoint (`contact.formEndpoint`), approval of photo/texts, education years (Nachdiplom FH 2004 vs CV 2000–2003). Tracked in `docs/OFFENE-PUNKTE.md`.
- **Spec:** `docs/superpowers/specs/2026-09-17-simone-website-design.md`.

**Why:** Josh wanted a shareable, free, handover-ready project; his stack is Astro (see [[user-web-stack]]).
**How to apply:** Edit content in `src/content/`, not components. Keep Swiss German («ss», «…»). Run `npm run build` + `npx astro check` before pushing; a push to `main` deploys automatically.
