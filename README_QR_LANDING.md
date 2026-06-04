# QR Landingpage — Masterproef

Mobiele één-pagina landingpage als digitale uitbreiding van de poster
"Gehanteerde strategieën van hoofdverpleegkundigen bij opgelegde
veranderingen in ziekenhuizen".

## PDF-links bijwerken

Open `src/routes/index.tsx` en pas bovenaan de constanten aan:

```ts
const PAPER_URL = "https://...";      // volledige masterproef PDF
const POSTER_URL = "https://...";     // poster PDF
const REFERENCES_URL = "https://...";  // volledige referentielijst PDF
const CONTACT_EMAIL = "naam@student.uhasselt.be";
const LINKEDIN_URL = "https://...";
```

Host de PDF's op een betrouwbare locatie (Google Drive / OneDrive met
"iedereen met de link", eigen server, of de UHasselt repository). Test de
link in incognito om publieke toegang te bevestigen.

## Inhoud bijwerken

Alle tekstblokken staan als arrays bovenaan elke sectie-component in
`src/routes/index.tsx` (`cards`, `references`, `Summary`, `Method`,
`Practice`). Pas de strings aan en de pagina volgt automatisch.

## QR-code voor de poster

1. Publiceer dit project (Publish-knop). Je krijgt een stabiele URL
   `https://project--<id>.lovable.app`.
2. (Optioneel) Koppel een korte custom domain (bv. `mp.uhasselt.be/...`).
3. Genereer de QR met die URL — gebruik foutcorrectie niveau **M of Q**,
   minimaal 4 × 4 cm geprint, met witte rand. Test scanability vanaf
   ~1 meter.

## Privacy

De pagina gebruikt geen tracking cookies en geen externe analytics.