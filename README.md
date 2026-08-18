# E&S Motors Website

Standalone React + Vite website for E&S Motors, focused on Audi and Porsche electronic steering rack supply, diagnostics and repair.

This folder is independent of Replit. It does not use Replit plugins, Replit services, a database, an API server or environment secrets.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Edit and push to GitHub

1. Unzip this folder.
2. Create a new GitHub repository.
3. Upload the contents of this folder, including `package.json`, `src`, `public` and `vite.config.ts`.
4. In GitHub, open the repository and edit the content in `src/App.tsx` or the styling in `src/index.css`.

## Deploy to Vercel

Import the GitHub repository into Vercel. The included `vercel.json` uses:

- Build command: `npm run build`
- Output directory: `dist`

No environment variables are required.

## Main files

- `src/App.tsx` — page content, navigation, vehicle coverage and request-help form
- `src/index.css` — layout, colors, typography, responsive styles and animations
- `src/assets/` — the uploaded E&S Motors workshop photographs
- `public/steering-rack-hero.jpg` — hero image
- `index.html` — page title and SEO metadata