# Sarankumar K — Portfolio

**Glitch Logic** Neobrutalist portfolio built with React + Vite + Tailwind CSS v4.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

### Option 2: Git Integration
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Vite — click **Deploy**

The included `vercel.json` handles the build config and SPA routing automatically.

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (with `@tailwindcss/vite` plugin)
- **Lucide React** icons
- **Glitch Logic** Neobrutalist design system

## Project Structure

```
src/
├── components/
│   ├── ui/           # Shared primitives (Card, Badge, Button, SectionHeading)
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css         # Design tokens + neobrutalist utilities
```

## License

© 2026 Sarankumar K
