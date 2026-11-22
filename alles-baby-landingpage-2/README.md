# Alles Baby – Landingpage

Statische Website (reines HTML/CSS/JS, kein Build-Schritt). Gestaltet nach dem PWA-Styleguide v1.6.

## Lokal ansehen
`index.html` per Doppelklick im Browser öffnen.

## Struktur
| Datei | Zweck |
|---|---|
| `index.html` | Landingpage |
| `impressum.html`, `datenschutz.html` | Rechtstexte – **Platzhalter in [eckigen Klammern] ausfüllen!** |
| `404.html` | Fehlerseite |
| `assets/css/style.css` | Alle Styles (Tokens oben = Styleguide) |
| `assets/js/main.js` | Header-Linie beim Scrollen, Einblend-Effekt |
| `assets/fonts/` | Outfit + Figtree, lokal (kein Google-Fonts-Abruf → DSGVO) |
| `assets/img/` | Favicon, App-Icon, Vorschaubild (og-image.png) |
| `CNAME` | Eigene Domain für GitHub Pages (nur dort nötig) |
| `robots.txt`, `sitemap.xml` | Für Suchmaschinen |

## Häufige Änderungen
- **App-Link ändern** (z. B. auf `https://app.allesbabyapp.de`): in `index.html` alle `https://alles-baby.netlify.app` ersetzen.
- **Andere Domain:** `CNAME`, `robots.txt`, `sitemap.xml` und die `https://allesbabyapp.de`-Angaben im `<head>` der HTML-Dateien anpassen.
- **Texte:** direkt in `index.html` ändern – jede Sektion ist mit einem Kommentar `<!-- ==== NAME ==== -->` markiert.
- **Farben/Abstände:** nur die Variablen oben in `style.css` ändern.

Icons: [Lucide](https://lucide.dev) (ISC-Lizenz), inline als SVG. Eigene Icons: Baby-Body, Zahn.
