# Constraint Compass — Exact File Tree (v1)

This file shows the **exact, recommended file and folder structure** for the Constraint Compass app,
aligned with Ecological Dynamics + NAC, optimized for **GitHub Pages** deployment.

---

constraint-compass/
├── README.md
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── index.html
├── public/
│   └── logo.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── styles/
│   │   └── tokens.css
│   ├── assets/
│   │   └── logo.svg
│   ├── types.ts
│   ├── logic/
│   │   └── buildFocusCard.ts
│   ├── state/
│   │   └── SessionContext.tsx
│   ├── data/
│   │   ├── systemStates.ts
│   │   ├── formats.ts
│   │   ├── desiredResults.ts
│   │   ├── problemSignals.ts
│   │   └── constraintMoves.ts
│   ├── components/
│   │   ├── AppShell.tsx
│   │   ├── CardButton.tsx
│   │   ├── Chip.tsx
│   │   ├── Stepper.tsx
│   │   ├── FocusCard.tsx
│   │   ├── LeverAccordion.tsx
│   │   ├── Timer.tsx
│   │   └── Toast.tsx
│   └── pages/
│       ├── SelectSystemState.tsx
│       ├── SelectFormat.tsx
│       ├── SelectDesiredResult.tsx
│       ├── SelectProblemSignals.tsx
│       ├── Focus.tsx
│       ├── Notes.tsx
│       └── ConstraintLibrary.tsx
│
└── .gitignore

---

## Notes

- Routing should use **HashRouter** for GitHub Pages compatibility
- All content logic lives in `/data` and `/logic`
- UI components remain reusable and dumb
- NAC flow is enforced by page order, not coach compliance
- No backend, no auth, no analytics (v1)

This structure is intentionally opinionated to avoid:
- Drill libraries
- Skill checklists
- Over-instruction
- Tech bloat

