# Constraint Compass

A mobile-first, web-based coaching decision tool for TVVC coaches using Ecological Dynamics principles and the NAC Method (Notice → Adapt → Commit).

## Quick Start

### Prerequisites

- Node.js 18+ and npm installed
- A modern web browser

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will open at `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── main.tsx              # Entry point
├── App.tsx              # Main app with routing
├── index.css            # Global styles
├── types.ts             # TypeScript type definitions
├── state/
│   └── SessionContext.tsx  # Session state management
├── logic/
│   └── buildFocusCard.ts   # Focus card generation logic
├── data/
│   ├── systemStates.ts       # 5 system states (clarity, challenge, etc)
│   ├── formats.ts            # Training formats (2v2, 3v3, etc)
│   ├── desiredResults.ts     # 20 desired team outcomes
│   ├── problemSignals.ts     # 25 observable problem signals
│   └── constraintMoves.ts    # 72 constraint adjustments
├── components/
│   ├── AppShell.tsx       # Main layout wrapper
│   ├── CardButton.tsx     # Button component for selections
│   ├── Chip.tsx           # Selection chip component
│   ├── Stepper.tsx        # Progress indicator
│   ├── Timer.tsx          # 4-minute commitment timer
│   ├── Toast.tsx          # Notification component
│   ├── FocusCard.tsx      # Main output display
│   └── LeverAccordion.tsx # Constraint browser accordion
└── pages/
    ├── Home.tsx                  # Homepage
    ├── SelectSystemState.tsx     # Step 1: System state selection
    ├── SelectFormat.tsx          # Step 2: Format selection
    ├── SelectDesiredResult.tsx   # Step 3: Desired outcome selection
    ├── SelectProblemSignals.tsx  # Step 4: Problem signal selection (optional)
    ├── Focus.tsx                 # Step 5: Focus card display & timer
    ├── Notes.tsx                 # Saved notes & reflections
    └── ConstraintLibrary.tsx     # Browse all 72 constraints
```

## How It Works

### The NAC Flow

1. **Notice** - Select current system state
2. **Adapt** - Get constraint suggestions tailored to your situation
3. **Commit** - Use the 4-minute timer to give constraints time to work

### Data

- **5 System States**: clarity, challenge, connection, stability, flow
- **5 Formats**: 2v2, 3v3, 4v4, 6v6, uneven numbers
- **20 Desired Results**: Observable team outcomes (e.g., "Earlier reads before contact")
- **25 Problem Signals**: What you're seeing (e.g., "Late first step / reacting")
- **72 Constraint Moves**: Organized by lever (space, rules, time, scoring, numbers, information, equipment)

### Key Features

- **Mobile-first design**: Optimized for use on court between rallies
- **Dark mode native**: Built with TVVC colors (teal, coral)
- **Local storage**: All notes saved on device (no data sent off)
- **No authentication**: Open access, no login required
- **No backend**: Static build, works offline after loading

## Tech Stack

- **Vite** - Fast build tool
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router 6** - Client-side routing (HashRouter for GitHub Pages)
- **Tailwind CSS** - Styling
- **LocalStorage** - Note persistence

## Color Palette

- **Midnight Black**: `#0E0F12`
- **Charcoal Panel**: `#181A1F`
- **Teal (Primary)**: `#1FB6B2`
- **Deep Teal (Active)**: `#148C88`
- **Coral (Accent)**: `#FF6B5A`
- **Primary Text**: `#E6E7EB`
- **Secondary Text**: `#9DA3AE`

## Deployment

Built with GitHub Pages in mind:

1. Build the app: `npm run build`
2. Deploy `dist/` folder to GitHub Pages
3. Uses HashRouter for compatibility

## Development

### Running lint
```bash
npm run lint
```

### Type checking
TypeScript is checked automatically during build.

## Notes

- Saved notes are stored in browser's localStorage
- Clearing browser data will delete saved notes
- The app works offline after initial load (browser caches assets)

## Philosophy

Constraint Compass exists to help coaches:
- **Slow down** - One decision per screen
- **See more clearly** - Structured observation prompts
- **Change less, but better** - Focused constraint selection
- **Trust learning to emerge** - 4-minute commitment ritual

**Joy is the training plan.**
