Designregeln — UI
=================

Kurzüberblick der geltenden Regeln für die Benutzeroberfläche.

Farben (Hex)
- Primär (dunkel): #052838
- Akzent: #59B8B3
- Warm / Button: #C39642
- Papier / hell: #FDF6EA
- Weiß: #FFFFFF

Typografie
- Überschriften: zwei erlaubte Fonts
  - EB Garamond — Verwendung nur in GROSSBUCHSTABEN (z. B. Hauptüberschriften)
    https://fonts.google.com/specimen/EB+Garamond
  - Pinyon Script — dekorative, handschriftliche Überschriften
    https://fonts.google.com/specimen/Pinyon+Script
- Fließtext & UI (Buttons, Labels, Inputs): Inter
  https://fonts.google.com/specimen/Inter

Regeln / Hinweise
- EB Garamond darf nur in Großbuchstaben eingesetzt werden (CSS: `text-transform: uppercase`).
- Pinyon Script nur für dekorative, kurze Headlines (nicht für lange Texte).
- Inter ist die Standard-Schrift für alle Bedienelemente, Formularfelder und Fließtext.
- Farbvariablen sind in `style.css` als CSS Custom Properties definiert (z. B. `--color-primary`).

Kurzes CSS-Beispiel
--------------------
```
/* Fonts per @import in style.css */
.heading--garamond { font-family: 'EB Garamond', serif; text-transform: uppercase; }
.heading--pinyon   { font-family: 'Pinyon Script', cursive; }
body, input, button { font-family: 'Inter', sans-serif; }

:root { --color-primary: #052838; --color-accent: #59B8B3; --color-warm: #C39642; --color-paper: #FDF6EA; }
.btn { background: var(--color-warm); color: var(--color-primary); }
```

Bei Fragen oder wenn du Varianten (z. B. dunkles Theme) brauchst, sag Bescheid.
