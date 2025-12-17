# Constraint Compass
### A Mobile-First Coaching Decision Tool for Ecological Volleyball Practice

---

## Overview

**Constraint Compass** is a mobile-first, web-based coaching tool designed for TVVC coaches to support *in-the-moment* practice decisions using principles from **Ecological Dynamics** and the **NAC Method (Notice → Adapt → Commit)**.

This app does **not** provide drills, plays, or activities.

Instead, it helps coaches:
- Identify the **current state of the team**
- Clarify a **desired team outcome**
- Select **constraint levers** to guide learning
- Commit to adjustments long enough for learning to emerge

The app is intentionally lightweight, fast, and calm—built to be used **on the court**, between rallies, not at a desk.

---

## Guiding Philosophy

### Ecological Dynamics
- Learning emerges from interaction with constraints
- Perception, decision-making, and action are inseparable
- The environment *teaches* when shaped intentionally

### NAC Method
- **Notice** the system state
- **Adapt** constraints, not athletes
- **Commit** long enough for the system to respond

Constraint Compass makes these principles *operational*.

---

## What This App Is (and Is Not)

### This App IS:
- A decision-support tool
- A constraint selection guide
- A way to improve coaching clarity and calm
- A shared language for staff

### This App Is NOT:
- A drill library
- A skill checklist
- A technique correction app
- A replacement for coach judgment

---

## Primary User
- TVVC coaches (head and assistants)
- Accessed via phone during practice
- No login required
- No data sent off device (v1)

---

## Core User Flow (NAC-Aligned)

### 1. Select System State — **NOTICE**
**Question:** *What does the team need right now?*

Options:
- We need clarity
- We need challenge
- We need connection
- We need stability
- We need flow

This reframes coaching away from “what drill” toward “what problem.”

---

### 2. Select Activity Format (Context)
**Question:** *What structure are we currently in?*

Options:
- 2v2
- 3v3
- 4v4
- 6v6
- Uneven numbers

Format is treated as a **task constraint**, not the driver.

---

### 3. Select Desired Result — **COMMIT TARGET**
**Question:** *What do we want to see more of?*

Examples:
- Earlier reads before contact
- Stronger coverage network
- Faster defense-to-offense transition
- More playable first contacts
- Greater variety of solutions

Desired results are:
- Team-level
- Observable
- Outcome-focused (not technical)

---

### 4. (Optional) Select Problem Signals — **NOTICE REFINEMENT**
**Question:** *What are you seeing right now?*

Examples:
- Late first step
- Forcing one solution
- Bunching around the ball
- Emotional spike after errors

Limit: 1–2 signals max.

---

### 5. Focus Card — **ADAPT + COMMIT**
This is the main output screen.

Each Focus Card contains:

#### Focus Statement
One sentence clarifying the intention.

#### Player Language
- One question
- One short cue (optional)
- One reset phrase

#### Watch-Fors
3 observable behaviors that indicate progress.

#### “Start Here” Constraints
2–3 constraint adjustments selected based on:
- System state
- Format
- Desired result
- Problem signals

#### Live Adjustment Buttons
- Too Easy
- Too Hard
- Too Chaotic

Each retunes the constraint suggestions without changing the goal.

---

### 6. Micro-Commit Timer — **COMMIT**
Default: 4 minutes

Prevents constant constraint hopping and supports learning emergence.

At timer end:
- Keep
- Tweak
- Switch focus

---

### 7. Save Practice Note
One-tap save including:
- System state
- Format
- Desired result
- Constraints used
- Quick reflection

Stored locally on device.

---

## Secondary Screens

### Saved Notes
- List of prior Focus Cards
- Useful for staff reflection and continuity

### Constraint Library
- Browse all constraints by lever
- Secondary tool, not primary flow

---

## Information Architecture

### Pages
- `/` SelectSystemState
- `/format` SelectFormat
- `/result` SelectDesiredResult
- `/signals` SelectProblemSignals
- `/focus` FocusCard
- `/notes` Notes
- `/library` ConstraintLibrary

Routing uses **HashRouter** for GitHub Pages compatibility.

---

## Tech Stack (Simple + Durable)

### Core
- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- LocalStorage

### Hosting
- GitHub Pages
- Static build (no backend)

### Why This Stack
- Free
- Fast
- Minimal maintenance
- Easy iteration
- No auth or infrastructure burden

---

## Design Principles

- **Mobile-first** (phone is primary device)
- Dark-mode native
- Card-based UI
- One decision per screen
- Calm, confident visual tone

---

## Color Palette (TVVC-Aligned)

### Base
- Midnight Black: `#0E0F12`
- Charcoal Panel: `#181A1F`

### Brand
- Teal (Primary): `#1FB6B2`
- Deep Teal (Active): `#148C88`
- Coral (Accent): `#FF6B5A`
- Muted Coral: `#E05A4C`

### Text
- Primary Text: `#E6E7EB`
- Secondary Text: `#9DA3AE`
- Divider: `#262A33`

---

## Visual Style
- Flat design
- Rounded cards
- Subtle motion only where informative
- No gradients
- No skeuomorphism
- No volleyball clip art

---

## Accessibility
- High contrast text
- Large tap targets
- Minimal cognitive load
- Clear language

---

## Deployment Notes

- Uses HashRouter for route safety
- Built and deployed via GitHub Pages
- Link can be shared directly with coaches
- Works offline once loaded (browser cache)

---

## Version Scope (v1)

Included:
- Full NAC-aligned flow
- Constraint engine
- Local persistence

Not included (intentionally):
- Accounts
- Analytics
- Drill videos
- Skill metrics

---

## Closing Statement

Constraint Compass exists to help coaches:
- Slow down
- See more clearly
- Change less, but better
- Trust learning to emerge

**Joy is the training plan.**
