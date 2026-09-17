# Offene Punkte vor der Veröffentlichung

Diese Checkliste sammelt alles, was Simone Binswanger noch liefern, entscheiden
oder freigeben muss, bevor die Website öffentlich beworben wird. Erledigte
Punkte können direkt hier abgehakt werden (Kästchen anklicken bzw. `[x]`
setzen und committen).

## Muss vor dem Livegang geklärt sein

- [ ] **Praxisadresse.** Ersetzt den Platzhalter «Praxisadresse folgt» in
      `site.yaml` (`contact.address`) sowie in `impressum.md` und
      `datenschutz.md`.
- [ ] **Telefonnummer.** Ersetzt `+41 00 000 00 00` in `site.yaml`
      (`contact.phone`).
- [ ] **E-Mail-Adresse.** Ersetzt `kontakt@example.ch` in `site.yaml`
      (`contact.email`) sowie in `impressum.md` und `datenschutz.md`.
- [ ] **Domainwunsch.** Eigene Domain gewünscht (z. B. `simone-binswanger.ch`)
      oder bleibt es bei der kostenlosen `github.io`-Adresse? Siehe
      [HANDOVER.md](HANDOVER.md), Abschnitt «Eigene Domain anbinden».
- [ ] **Honorar/Kosten-Text.** Der Platzhaltertext «auf Anfrage» in
      `angebot.costs` (`site.yaml`) soll durch einen definitiven oder bewusst
      offenen Text ersetzt bzw. bestätigt werden.
- [ ] **Freigabe des Porträtfotos.** Aktuelles Bild in
      `src/assets/simone-portrait.jpg` freigeben oder ein neues Foto liefern.
- [ ] **Freigabe aller Texte**, insbesondere:
  - [ ] Erwähnung des aktuellen Arbeitgebers **DFA** (Standortleiterin seit
        2021) auf der Seite «Über mich» / in `werdegang.yaml`.
  - [ ] Erwähnung der früheren Tätigkeiten bei der **KESB** (Kindes- und
        Erwachsenenschutzbehörde Pfäffikon ZH und St. Gallen) in
        `werdegang.yaml` und im Fliesstext von `site.yaml` (`ueberMich.paragraphs`).
- [ ] **Formspree-Kontaktformular:** ja oder nein? Falls ja, Konto erstellen
      und Endpoint-URL liefern (Anleitung in
      [INHALTE-PFLEGEN.md](INHALTE-PFLEGEN.md), Abschnitt e). Falls nein, bleibt
      es bei E-Mail-Button und Kontaktangaben.
- [ ] **Ausbildungsjahre bestätigen** – die Angaben in `werdegang.yaml`
      weichen leicht von anderen Quellen ab, bitte das jeweils korrekte Jahr
      bestimmen:
  - [ ] Nachdiplomstudium Gesetzliche Sozialarbeit: Website/`werdegang.yaml`
        nennt **2004**, das Dossier/CV nennt den Zeitraum **2000–2003**.
  - [ ] NDK Coaching für Führungskräfte: Website/`werdegang.yaml` nennt
        **2003**, das vorliegende Zertifikat ist auf **2004** datiert.

## Optional / nice-to-have

- [ ] Professionelle Fotos (Porträt und/oder Umgebung der Praxis) in besserer
      Qualität als das aktuelle Bild.
- [ ] Testimonials/Referenzen von Klientinnen und Klienten – **nur mit deren
      ausdrücklichem Einverständnis** und in anonymisierter Form, falls
      gewünscht.
- [ ] Google-Unternehmensprofil (Google Business Profile) einrichten und in
      der Kontaktseite verlinken.
- [ ] LinkedIn-Profil verlinken (z. B. im Footer oder auf «Über mich»).

## Ideen für später

- [ ] Blog/Aktuelles-Bereich für Neuigkeiten oder Fachartikel.
- [ ] FAQ-Seite mit häufigen Fragen zu Ablauf, Kosten, Vertraulichkeit.
- [ ] Downloads-Bereich (z. B. Informationsblatt als PDF).
- [ ] Französische Sprachversion der Website.
