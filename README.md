# GezinsFit — GitHub Pages

Deze map is klaar om rechtstreeks op GitHub Pages te zetten.

## Bestanden
- `index.html` — de app
- `styles.css` — opmaak
- `app.js` — functies
- `manifest.json` — app-instellingen
- `404.html` — fallback voor GitHub Pages

## Zo zet je hem online

1. Ga naar GitHub en maak een nieuwe repository, bijvoorbeeld `gezinsfit`.
2. Kies **Add file → Upload files**.
3. Upload alle bestanden uit deze map naar de hoofdmap van de repository.
4. Klik op **Commit changes**.
5. Ga naar **Settings → Pages**.
6. Kies bij **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
7. Klik op **Save**.

GitHub toont daarna de link van je app. Bij een repository met naam `gezinsfit` ziet die er meestal zo uit:
`https://JOUW-GITHUB-NAAM.github.io/gezinsfit/`

## Op iPhone / Android als app gebruiken

Open de GitHub Pages-link in Safari of Chrome en kies:
- iPhone: **Deel → Zet op beginscherm**
- Android: **Menu → Toevoegen aan startscherm** of **App installeren**

## Belangrijk over vrienden, foto's en reacties

Deze versie draait volledig in de browser en slaat gegevens lokaal op elk toestel op.
Dat betekent:
- elk profiel blijft op het eigen toestel;
- foto's en reacties zijn nog niet live gedeeld tussen verschillende telefoons.

Voor echte gedeelde posts, comments en emoji-reacties tussen vrienden is een online backend nodig, bijvoorbeeld Supabase of Firebase.

## Allergieën

De app kan voorkeuren en allergieën registreren, maar kan niet garanderen dat een maaltijd medisch allergieveilig is. Controleer altijd ingrediënten, etiketten en kruisbesmetting.
