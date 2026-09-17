# Inhalte pflegen – ohne Programmierkenntnisse

Diese Anleitung zeigt, wie man Texte, Bilder und Kontaktangaben auf der Website
ändert, ohne ein Entwicklungsprogramm zu installieren. Alles funktioniert direkt
im Browser auf GitHub.com.

## a) So bearbeitet man eine Datei auf GitHub.com

1. Im Repository (z. B. `github.com/joshuabinswanger/simone-beratung`) zur
   gewünschten Datei navigieren, z. B. `src/content/site.yaml`.
2. Oben rechts auf das **Stift-Symbol** («Edit this file») klicken.
3. Text direkt im Browser ändern. Die Struktur (Einrückungen, Anführungszeichen)
   dabei unbedingt beibehalten – siehe Abschnitt c).
4. Nach unten scrollen zu **«Commit changes»**, einen kurzen Kommentar eintragen
   (z. B. «Telefonnummer aktualisiert») und auf den grünen Button **«Commit
   changes»** klicken.
5. Die Website baut sich danach automatisch neu und ist nach **ca. 2 Minuten**
   aktualisiert. Wie man das prüft, steht in Abschnitt f).

Kein Software-Download nötig, kein Risiko etwas «kaputt zu machen»: Jede
Änderung bleibt als Verlauf erhalten und kann bei Bedarf rückgängig gemacht
werden (im Zweifel bei der Agentur/Betreuung melden).

## b) Welcher Text steht in welcher Datei?

Alle redaktionellen Inhalte liegen in `src/content/`. Die wichtigste Datei ist
`site.yaml`. Die folgende Tabelle zeigt, wo jeder sichtbare Abschnitt der
Website gepflegt wird.

| Seite | Sichtbarer Abschnitt | Datei | Feld(er) |
|---|---|---|---|
| Alle Seiten | Navigation (Menüpunkte) | `site.yaml` | `nav` |
| Alle Seiten | Fusszeile (Text unten) | `site.yaml` | `footer.note`, `name`, `location` |
| Alle Seiten | Seitentitel/Beschreibung für Suchmaschinen | `site.yaml` | `name`, `description` |
| Start | Titelbereich mit wechselnden Wörtern («Raum für Klarheit …») | `site.yaml` | `hero.prefix`, `hero.words`, `hero.lead`, `hero.primaryCta`, `hero.secondaryCta` |
| Start | Werte-Band (pragmatisch · interdisziplinär · lösungsorientiert) | `site.yaml` | `values` |
| Start | «Wobei ich Sie unterstütze» (drei Säulen) | `site.yaml` | `home.pillarsTitle`, `home.pillars` |
| Start | «So arbeite ich» | `site.yaml` | `home.approach` |
| Start | «Wer Sie begleitet» (Teaser zu Über mich) | `site.yaml` | `home.aboutTeaser` |
| Start | «Ein erstes Gespräch» (Kontakt-Aufruf) | `site.yaml` | `home.contactCta` |
| Angebot | Einleitungstext | `site.yaml` | `angebot.title`, `angebot.intro` |
| Angebot | Formate (kurz/länger) | `site.yaml` | `angebot.formatsTitle`, `angebot.formats` |
| Angebot | Für wen (Einzelpersonen, Paare, …) | `site.yaml` | `angebot.audiencesTitle`, `angebot.audiences` |
| Angebot | Themen-Liste | `site.yaml` | `angebot.topicsTitle`, `angebot.topics` |
| Angebot | Ablauf in vier Schritten | `site.yaml` | `angebot.processTitle`, `angebot.process` |
| Angebot | Rahmen und Kosten | `site.yaml` | `angebot.costs` |
| Angebot | Die drei Angebots-Karten (Titel, Kurztext, Beschreibung) | `src/content/angebote/*.md` | Kopfzeile (`title`, `summary`, `highlights`) + Fliesstext darunter |
| Über mich | Titel, Einleitungssatz | `site.yaml` | `ueberMich.title`, `ueberMich.lead` |
| Über mich | Lebenslauf-Absätze | `site.yaml` | `ueberMich.paragraphs` |
| Über mich | «Meine Haltung» | `site.yaml` | `ueberMich.haltung` |
| Über mich | Sprachen | `site.yaml` | `ueberMich.languages` |
| Über mich | Berufliche Stationen (Zeitleiste) | `werdegang.yaml` | `stationsTitle`, `stations` |
| Über mich | Aus- und Weiterbildung | `werdegang.yaml` | `educationTitle`, `education` |
| Über mich | Porträtfoto | `src/assets/simone-portrait.jpg` | Bilddatei ersetzen (siehe Abschnitt d) |
| Kontakt | Titel, Einleitung | `site.yaml` | `kontakt.title`, `kontakt.intro` |
| Kontakt | Vertraulichkeitshinweis | `site.yaml` | `kontakt.confidentiality` |
| Kontakt | E-Mail, Telefon, Adresse | `site.yaml` | `contact.email`, `contact.phone`, `contact.address` |
| Kontakt | Formular-Beschriftungen (Name, Nachricht, Button …) | `site.yaml` | `kontakt.form` |
| Kontakt | Ob das Formular überhaupt erscheint | `site.yaml` | `contact.formEndpoint` (siehe Abschnitt e) |
| Impressum | ganzer Text | `src/content/rechtliches/impressum.md` | Kopfzeile + Fliesstext |
| Datenschutz | ganzer Text | `src/content/rechtliches/datenschutz.md` | Kopfzeile + Fliesstext |
| Alle Seiten | Vorschaubild beim Teilen (Social Media) | `public/og-image.jpg` | Bilddatei ersetzen (siehe Abschnitt d) |

## c) YAML-Regeln in einfachen Worten

Die Dateien `site.yaml` und `werdegang.yaml` folgen dem Format **YAML**. Ein
paar einfache Regeln reichen, um nichts zu zerstören:

1. **Einrückung mit Leerzeichen, nicht mit Tabulator.** Zeilen, die zu einem
   Abschnitt gehören, müssen genau gleich weit eingerückt sein wie ihre
   Nachbarzeilen (meist 2 Leerzeichen pro Ebene).
2. **Texte mit Doppelpunkt oder Sonderzeichen in Anführungszeichen setzen.**
   Beispiel: `phone: "+41 00 000 00 00"`. Ein einfacher Text ohne Doppelpunkt
   braucht keine Anführungszeichen zwingend, schadet aber nicht.
3. **`>-` steht für einen längeren, umbrechenden Text.** Alles, was danach
   eingerückt folgt, wird zu einem einzigen Absatz zusammengefügt – Zeilenumbrüche
   im Editor spielen dabei keine Rolle. Wichtig: die Einrückung aller Zeilen
   dieses Absatzes muss gleich bleiben.
4. **Listen beginnen mit `- ` (Bindestrich + Leerzeichen).** Jeder Listeneintrag
   auf eigener Zeile, gleich eingerückt wie die anderen Einträge derselben Liste.
5. Im Zweifel: **eine bestehende Zeile als Vorlage kopieren** und nur den Text
   darin ersetzen – Struktur, Anführungszeichen und Einrückung bleiben so
   automatisch korrekt.

## d) Bilder austauschen

- **Porträtfoto:** Datei `src/assets/simone-portrait.jpg` ersetzen (gleicher
  Dateiname). Format Hochkant im Verhältnis **4:5**, mindestens **900 Pixel**
  breit, JPG.
- **Vorschaubild für Social Media** (erscheint z. B. bei WhatsApp/LinkedIn-Links):
  Datei `public/og-image.jpg` ersetzen, exakt **1200 × 630 Pixel**, JPG.

Beide Dateien einfach über GitHub.com hochladen: im jeweiligen Ordner auf
**«Add file» → «Upload files»**, die neue Datei mit demselben Namen hochladen
und mit **«Commit changes»** bestätigen (überschreibt die alte Datei automatisch).

## e) Kontaktformular aktivieren

Solange `contact.formEndpoint` in `site.yaml` leer ist (`formEndpoint: ""`),
zeigt die Kontaktseite nur die Kontaktangaben und einen E-Mail-Button. Um ein
echtes Formular zu aktivieren:

1. Kostenloses Konto auf [formspree.io](https://formspree.io) erstellen.
2. Dort ein neues Formular anlegen (die eigene E-Mail-Adresse als Empfänger
   hinterlegen).
3. Formspree zeigt eine **Endpoint-URL** an (Form: `https://formspree.io/f/xxxxxxx`).
4. Diese URL in `site.yaml` bei `contact.formEndpoint` eintragen, z. B.
   `formEndpoint: "https://formspree.io/f/xxxxxxx"`.
5. Nach dem Commit erscheint das Formular automatisch auf der Kontaktseite.

## f) Ergebnis prüfen

1. Im Repository auf den Reiter **«Actions»** klicken.
2. Der oberste Eintrag zeigt den Build, der durch den letzten Commit ausgelöst
   wurde. Ein **grünes Häkchen** heisst: erfolgreich veröffentlicht.
   Ein gelber Punkt heisst «läuft noch», ein rotes Kreuz heisst «Fehler» (in
   diesem Fall die Agentur/Betreuung kontaktieren).
3. Danach die Live-Website neu laden (ggf. mit `Strg+F5` bzw. `Cmd+Shift+R`,
   um alte Zwischenspeicherungen zu umgehen): https://joshuabinswanger.github.io/simone-beratung/
