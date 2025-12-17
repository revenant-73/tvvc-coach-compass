# TVVC Constraint Compass

A mobile-first web app for TVVC coaches to make in-the-moment coaching decisions during practice.

## Quick Start

### Prerequisites
- Node.js 18+
- npm

### Installation & Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

The built app will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

The app automatically deploys to GitHub Pages when you push to the `main` branch via GitHub Actions.

To set up your repository:

1. Push this code to a GitHub repository
2. Go to repository Settings → Pages
3. Set "Source" to "Deploy from a branch"
4. Set branch to `gh-pages`
5. Save

After the first push, the GitHub Actions workflow will build and deploy automatically.

## Project Structure

```
src/
├── components/          # React components for each step
│   ├── ContextSelector.jsx
│   ├── ObjectiveTypeSelector.jsx
│   ├── OutcomeSelector.jsx
│   ├── ProblemSignalsSelector.jsx
│   └── FocusCard.jsx
├── App.jsx             # Main app component
├── App.css             # App layout styles
├── index.css           # Global styles & color palette
└── main.jsx            # React entry point

vite.config.js          # Vite configuration for GitHub Pages
index.html              # HTML template
```

## Features

- **Mobile-first design** - Optimized for on-court use
- **5-step flow** - Quick decision-making in 30 seconds
- **Dark mode** - Gym-friendly interface
- **Local storage** - Saves focus card history
- **No backend** - Entirely client-side
- **GitHub Pages** - Easy deployment

## Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --midnight-black: #0E0F12;
  --tvvc-teal: #1FB6B2;
  /* ... etc */
}
```

### Coaching Content
Edit the data in component files:
- **Teams & moments**: `src/components/ContextSelector.jsx`
- **Objectives**: `src/components/ObjectiveTypeSelector.jsx`
- **Outcomes**: `src/components/OutcomeSelector.jsx`
- **Problem signals**: `src/components/ProblemSignalsSelector.jsx`
- **Focus card templates**: `src/components/FocusCard.jsx`

## Local Storage

The app saves up to 50 recent focus cards in browser local storage under the key `tvvc-compass-history`. This data persists across browser sessions and is only stored locally on the device.

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support
