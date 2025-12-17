# Constraint Compass Data Set (v1)
This file contains **ready-to-copy TypeScript data exports** for:
- `desiredResults` (team outcomes) + `watchFors` (observable indicators)
- `problemSignals` (what the coach notices)
- `constraintMoves` (70+ constraint adjustments) tagged for **System State**, optional **Format**, and optional **Desired Result / Signal**, plus **tuning** (`base`, `too_easy`, `too_hard`, `too_chaotic`).

---
## desiredResults.ts
```ts
export const desiredResults = [
  {
    "id": "DR_READ_EARLY",
    "label": "Earlier reads before contact",
    "stateTags": [
      "clarity",
      "connection"
    ],
    "watchFors": [
      "More players scan before first/second contact",
      "Earlier first step (less reacting)",
      "Fewer surprise balls landing untouched"
    ]
  },
  {
    "id": "DR_BASE_SHAPE_FAST",
    "label": "Faster base shape formation",
    "stateTags": [
      "clarity",
      "flow"
    ],
    "watchFors": [
      "Defense organizes earlier (by attacker contact)",
      "Less mid-rally drifting/crossing",
      "Fewer last-second collisions/seam confusion"
    ]
  },
  {
    "id": "DR_TARGET_VISIBILITY",
    "label": "Clearer target availability (setter options)",
    "stateTags": [
      "clarity",
      "connection"
    ],
    "watchFors": [
      "Setter has 2+ visible options most rallies",
      "More sets delivered without panic rushing",
      "Attackers arrive with a plan earlier"
    ]
  },
  {
    "id": "DR_SEAM_OWNERSHIP",
    "label": "Clear seam responsibility",
    "stateTags": [
      "clarity",
      "connection"
    ],
    "watchFors": [
      "Fewer 'mine?' hesitations",
      "More decisive first-contact calls",
      "Reduced double-contacts / no-contacts in seams"
    ]
  },
  {
    "id": "DR_OPTION_VARIETY",
    "label": "Greater variety of solutions",
    "stateTags": [
      "challenge",
      "flow"
    ],
    "watchFors": [
      "More than one attack shot used intentionally",
      "Receivers vary targets when needed",
      "Defenders change starting positions based on cues"
    ]
  },
  {
    "id": "DR_DECIDE_FAST",
    "label": "Faster decisions under pressure",
    "stateTags": [
      "challenge",
      "flow"
    ],
    "watchFors": [
      "Less freezing after imperfect contacts",
      "Earlier commit to option (swing/tip/roll)",
      "More productive second-ball choices"
    ]
  },
  {
    "id": "DR_RISK_SMART",
    "label": "Smarter risk-taking",
    "stateTags": [
      "challenge",
      "stability"
    ],
    "watchFors": [
      "More aggressive choices without reckless errors",
      "Errors trend from 'trying' not 'avoiding'",
      "Players take calculated shots to open space"
    ]
  },
  {
    "id": "DR_ADAPT_MIDRALLY",
    "label": "Mid-rally adjustment ability",
    "stateTags": [
      "challenge",
      "flow"
    ],
    "watchFors": [
      "Players change plan after new info appears",
      "Coverage adjusts to hitter/set changes",
      "Less repeating same failed option"
    ]
  },
  {
    "id": "DR_COVERAGE_NETWORK",
    "label": "Stronger coverage network",
    "stateTags": [
      "connection",
      "stability"
    ],
    "watchFors": [
      "More playable second contacts after blocks/digs",
      "Fewer uncovered tips/rolls",
      "Teammates fill behind/inside hitter more consistently"
    ]
  },
  {
    "id": "DR_SPACING_FUNCTIONAL",
    "label": "Functional spacing and lanes",
    "stateTags": [
      "connection",
      "flow"
    ],
    "watchFors": [
      "Less bunching around the ball",
      "Clearer approach/defense lanes",
      "More 'options available' moments"
    ]
  },
  {
    "id": "DR_TRANSITION_SYNC",
    "label": "More synchronized transition",
    "stateTags": [
      "connection",
      "flow"
    ],
    "watchFors": [
      "More players move on first contact",
      "Setter/hitters arrive in time together",
      "Fewer late arrivals into attack/defense"
    ]
  },
  {
    "id": "DR_COMM_MEANINGFUL",
    "label": "More meaningful communication",
    "stateTags": [
      "connection",
      "clarity"
    ],
    "watchFors": [
      "Calls happen before contact not after",
      "Calls reduce confusion (not noise)",
      "Non-verbal cues support decisions"
    ]
  },
  {
    "id": "DR_PLAYABLE_FIRST_CONTACT",
    "label": "More playable first contacts",
    "stateTags": [
      "stability",
      "clarity"
    ],
    "watchFors": [
      "More passes/digs to a usable zone",
      "Fewer pure shanks/overpasses",
      "More rallies reach 3rd contact"
    ]
  },
  {
    "id": "DR_RALLY_EXTENSION",
    "label": "Extend rallies under pressure",
    "stateTags": [
      "stability",
      "flow"
    ],
    "watchFors": [
      "More 'one more ball' moments",
      "Fewer immediate rally collapses",
      "Team stays organized after scrambles"
    ]
  },
  {
    "id": "DR_RESET_SPEED",
    "label": "Faster emotional reset",
    "stateTags": [
      "stability",
      "connection"
    ],
    "watchFors": [
      "Less visible frustration time",
      "Next-ball behavior returns quicker",
      "Communication stays constructive after errors"
    ]
  },
  {
    "id": "DR_OUT_OF_SYSTEM_OK",
    "label": "Better out-of-system stability",
    "stateTags": [
      "stability",
      "clarity"
    ],
    "watchFors": [
      "More controlled freeballs when needed",
      "More attacks from non-ideal sets",
      "Fewer panic plays on 2nd contact"
    ]
  },
  {
    "id": "DR_TEMPO_CONTINUITY",
    "label": "More continuity of play tempo",
    "stateTags": [
      "flow",
      "connection"
    ],
    "watchFors": [
      "Less stopping/standing between contacts",
      "More consistent rally rhythm",
      "Transitions happen automatically"
    ]
  },
  {
    "id": "DR_FAST_TRANSITION_TO_OFF",
    "label": "Faster defense-to-offense transition",
    "stateTags": [
      "flow",
      "challenge"
    ],
    "watchFors": [
      "Setter becomes available sooner",
      "Attackers approach earlier",
      "Fewer free balls from slow transition"
    ]
  },
  {
    "id": "DR_SERVE_TO_SCORE_RHYTHM",
    "label": "Serve-to-score rhythm",
    "stateTags": [
      "flow",
      "challenge"
    ],
    "watchFors": [
      "Servers ready sooner",
      "Team organizes quickly after serve",
      "More immediate pressure after serve"
    ]
  },
  {
    "id": "DR_ROLE_ROTATION_FLUID",
    "label": "Fluid role switching",
    "stateTags": [
      "flow",
      "connection"
    ],
    "watchFors": [
      "Second contact handled smoothly when setter takes first",
      "Players cover seamlessly when roles swap",
      "Fewer confusion moments on broken plays"
    ]
  }
] as const;

```
---
## problemSignals.ts
```ts
export const problemSignals = [
  {
    "id": "PS_LATE_FEET",
    "label": "Late first step / reacting",
    "stateTags": [
      "clarity"
    ]
  },
  {
    "id": "PS_NO_SCAN",
    "label": "Not scanning before contact",
    "stateTags": [
      "clarity"
    ]
  },
  {
    "id": "PS_HESITATE_SEAM",
    "label": "Hesitation in seams",
    "stateTags": [
      "clarity",
      "connection"
    ]
  },
  {
    "id": "PS_SETTER_HIDDEN",
    "label": "Setter/options not visible",
    "stateTags": [
      "clarity",
      "connection"
    ]
  },
  {
    "id": "PS_ONE_SOLUTION",
    "label": "Forcing one solution",
    "stateTags": [
      "challenge"
    ]
  },
  {
    "id": "PS_PLAYING_SAFE",
    "label": "Playing safe / avoiding risk",
    "stateTags": [
      "challenge",
      "stability"
    ]
  },
  {
    "id": "PS_RUSH_DECISION",
    "label": "Rushing decisions blindly",
    "stateTags": [
      "challenge"
    ]
  },
  {
    "id": "PS_REPEATING_FAIL",
    "label": "Repeating same failing choice",
    "stateTags": [
      "challenge"
    ]
  },
  {
    "id": "PS_DISCONNECTED_COVER",
    "label": "Coverage missing / no one behind",
    "stateTags": [
      "connection"
    ]
  },
  {
    "id": "PS_BUNCHING",
    "label": "Bunching around ball",
    "stateTags": [
      "connection"
    ]
  },
  {
    "id": "PS_SILENT",
    "label": "Too quiet (no actionable calls)",
    "stateTags": [
      "connection"
    ]
  },
  {
    "id": "PS_NOISY",
    "label": "Too noisy (calls not useful)",
    "stateTags": [
      "connection"
    ]
  },
  {
    "id": "PS_LATE_TRANSITION",
    "label": "Slow transition / watching",
    "stateTags": [
      "flow",
      "connection"
    ]
  },
  {
    "id": "PS_CHOPPY_RHYTHM",
    "label": "Choppy rhythm / stops",
    "stateTags": [
      "flow"
    ]
  },
  {
    "id": "PS_LOW_ENERGY",
    "label": "Flat energy / low intent",
    "stateTags": [
      "flow"
    ]
  },
  {
    "id": "PS_PANIC_AFTER_ERROR",
    "label": "Emotional spike after errors",
    "stateTags": [
      "stability"
    ]
  },
  {
    "id": "PS_RALLY_COLLAPSE",
    "label": "Rallies collapse fast",
    "stateTags": [
      "stability"
    ]
  },
  {
    "id": "PS_EMERGENCY_TOUCHES",
    "label": "Too many emergency contacts",
    "stateTags": [
      "stability",
      "clarity"
    ]
  },
  {
    "id": "PS_OOS_PANIC",
    "label": "Panic out-of-system second contacts",
    "stateTags": [
      "stability"
    ]
  },
  {
    "id": "PS_FREEBALL_GIVEAWAY",
    "label": "Giving away freeballs",
    "stateTags": [
      "stability",
      "challenge"
    ]
  },
  {
    "id": "PS_OVERPASS",
    "label": "Overpasses gifting points",
    "stateTags": [
      "stability"
    ]
  },
  {
    "id": "PS_TOO_EASY",
    "label": "Activity too easy / cruising",
    "stateTags": [
      "challenge"
    ]
  },
  {
    "id": "PS_TOO_HARD",
    "label": "Activity too hard / constant failure",
    "stateTags": [
      "stability"
    ]
  },
  {
    "id": "PS_TOO_CHAOTIC",
    "label": "Chaos without learning",
    "stateTags": [
      "clarity",
      "stability"
    ]
  },
  {
    "id": "PS_STUCK",
    "label": "Team feels stuck in a pattern",
    "stateTags": [
      "connection",
      "clarity"
    ]
  }
] as const;

```
---
## constraintMoves.ts
```ts
export const constraintMoves = [
  {
    "id": "CM_001",
    "lever": "information",
    "title": "Silent rallies (no coach talk) for 3 rallies",
    "effect": "Forces scanning and self-organization of information sharing.",
    "stateTags": [
      "clarity",
      "connection"
    ],
    "tune": "base",
    "resultTags": [
      "DR_READ_EARLY",
      "DR_SEAM_OWNERSHIP"
    ],
    "signalTags": [
      "PS_NO_SCAN",
      "PS_HESITATE_SEAM"
    ]
  },
  {
    "id": "CM_002",
    "lever": "rules",
    "title": "Point only counts if a pre-contact call happens (mine/seam/short/deep)",
    "effect": "Shifts attention to earlier reads and responsibility.",
    "stateTags": [
      "clarity",
      "connection"
    ],
    "tune": "base",
    "resultTags": [
      "DR_SEAM_OWNERSHIP",
      "DR_COMM_MEANINGFUL"
    ],
    "signalTags": [
      "PS_HESITATE_SEAM",
      "PS_SILENT"
    ]
  },
  {
    "id": "CM_003",
    "lever": "space",
    "title": "Base boxes: bonus if defenders are in base at attacker contact",
    "effect": "Encourages earlier base-shape formation.",
    "stateTags": [
      "clarity",
      "flow"
    ],
    "tune": "base",
    "formatTags": [
      "4v4",
      "6v6"
    ],
    "resultTags": [
      "DR_BASE_SHAPE_FAST"
    ],
    "signalTags": [
      "PS_LATE_FEET"
    ]
  },
  {
    "id": "CM_004",
    "lever": "rules",
    "title": "Setter must call target before 2nd contact",
    "effect": "Improves shared intention + target visibility.",
    "stateTags": [
      "clarity",
      "connection"
    ],
    "tune": "base",
    "formatTags": [
      "4v4",
      "6v6"
    ],
    "resultTags": [
      "DR_TARGET_VISIBILITY",
      "DR_COMM_MEANINGFUL"
    ],
    "signalTags": [
      "PS_SETTER_HIDDEN"
    ]
  },
  {
    "id": "CM_005",
    "lever": "scoring",
    "title": "Bonus for any 3-contact rally (win or lose)",
    "effect": "Incentivizes organization and playable contacts.",
    "stateTags": [
      "clarity",
      "stability"
    ],
    "tune": "base",
    "resultTags": [
      "DR_PLAYABLE_FIRST_CONTACT",
      "DR_RALLY_EXTENSION"
    ],
    "signalTags": [
      "PS_RALLY_COLLAPSE"
    ]
  },
  {
    "id": "CM_006",
    "lever": "numbers",
    "title": "Add a tip-only support defender",
    "effect": "Clarifies coverage and seam ownership for short balls.",
    "stateTags": [
      "clarity",
      "connection"
    ],
    "tune": "base",
    "formatTags": [
      "4v4",
      "6v6"
    ],
    "resultTags": [
      "DR_COVERAGE_NETWORK"
    ],
    "signalTags": [
      "PS_DISCONNECTED_COVER"
    ]
  },
  {
    "id": "CM_007",
    "lever": "equipment",
    "title": "Use a slightly lighter ball for 5 minutes",
    "effect": "Reduces speed to allow earlier perception and organization.",
    "stateTags": [
      "clarity"
    ],
    "tune": "base",
    "resultTags": [
      "DR_READ_EARLY"
    ],
    "signalTags": [
      "PS_TOO_HARD"
    ]
  },
  {
    "id": "CM_008",
    "lever": "information",
    "title": "One-word intention before each rally ('read','seam','early')",
    "effect": "Aligns shared attention quickly without long talks.",
    "stateTags": [
      "clarity",
      "connection"
    ],
    "tune": "base",
    "resultTags": [
      "DR_COMM_MEANINGFUL",
      "DR_READ_EARLY"
    ],
    "signalTags": [
      "PS_STUCK"
    ]
  },
  {
    "id": "CM_009",
    "lever": "space",
    "title": "Cone seam: mark the seam lane; bonus if first contact decision is decisive",
    "effect": "Makes seam decisions visible and discussable.",
    "stateTags": [
      "clarity",
      "connection"
    ],
    "tune": "base",
    "resultTags": [
      "DR_SEAM_OWNERSHIP"
    ],
    "signalTags": [
      "PS_HESITATE_SEAM"
    ]
  },
  {
    "id": "CM_010",
    "lever": "time",
    "title": "5-second restart after rally ends",
    "effect": "Reveals whether organization is automatic or coach-dependent.",
    "stateTags": [
      "clarity",
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_TEMPO_CONTINUITY"
    ],
    "signalTags": [
      "PS_CHOPPY_RHYTHM"
    ]
  },
  {
    "id": "CM_011",
    "lever": "rules",
    "title": "No 'help' touch unless called\u2014first caller owns ball",
    "effect": "Builds decisive ownership under uncertainty.",
    "stateTags": [
      "clarity",
      "connection"
    ],
    "tune": "base",
    "resultTags": [
      "DR_SEAM_OWNERSHIP"
    ],
    "signalTags": [
      "PS_HESITATE_SEAM"
    ]
  },
  {
    "id": "CM_012",
    "lever": "information",
    "title": "Coach may only ask one question between rallies",
    "effect": "Reduces over-coaching; supports noticing and self-regulation.",
    "stateTags": [
      "clarity",
      "stability"
    ],
    "tune": "base",
    "resultTags": [
      "DR_RESET_SPEED",
      "DR_READ_EARLY"
    ],
    "signalTags": [
      "PS_TOO_CHAOTIC"
    ]
  },
  {
    "id": "CM_013",
    "lever": "scoring",
    "title": "Bonus for scoring with a new solution (no repeats twice in a row)",
    "effect": "Encourages exploration and solution variety.",
    "stateTags": [
      "challenge",
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_OPTION_VARIETY"
    ],
    "signalTags": [
      "PS_ONE_SOLUTION"
    ]
  },
  {
    "id": "CM_014",
    "lever": "rules",
    "title": "Every other rally: must use an off-speed attack (roll/tip)",
    "effect": "Forces adaptation and reading.",
    "stateTags": [
      "challenge"
    ],
    "tune": "base",
    "formatTags": [
      "2v2",
      "3v3",
      "4v4"
    ],
    "resultTags": [
      "DR_OPTION_VARIETY",
      "DR_ADAPT_MIDRALLY"
    ],
    "signalTags": [
      "PS_REPEATING_FAIL"
    ]
  },
  {
    "id": "CM_015",
    "lever": "time",
    "title": "Shot clock: attack must happen within 3 seconds of first contact",
    "effect": "Increases decision speed + transition urgency.",
    "stateTags": [
      "challenge",
      "flow"
    ],
    "tune": "base",
    "formatTags": [
      "4v4",
      "6v6"
    ],
    "resultTags": [
      "DR_DECIDE_FAST",
      "DR_FAST_TRANSITION_TO_OFF"
    ],
    "signalTags": [
      "PS_LATE_TRANSITION"
    ]
  },
  {
    "id": "CM_016",
    "lever": "space",
    "title": "Create a 2-point bonus lane (deep corner or short zone)",
    "effect": "Invites intentional shot selection + space use.",
    "stateTags": [
      "challenge"
    ],
    "tune": "base",
    "resultTags": [
      "DR_RISK_SMART"
    ],
    "signalTags": [
      "PS_PLAYING_SAFE"
    ]
  },
  {
    "id": "CM_017",
    "lever": "information",
    "title": "Random constraint card each rally ('short','line','deep','seam')",
    "effect": "Adds variability without changing the activity.",
    "stateTags": [
      "challenge"
    ],
    "tune": "base",
    "resultTags": [
      "DR_OPTION_VARIETY",
      "DR_ADAPT_MIDRALLY"
    ],
    "signalTags": [
      "PS_TOO_EASY"
    ]
  },
  {
    "id": "CM_018",
    "lever": "numbers",
    "title": "Play uneven for 2 minutes (remove one defender)",
    "effect": "Creates adaptive pressure and smarter risk choices.",
    "stateTags": [
      "challenge"
    ],
    "tune": "base",
    "formatTags": [
      "uneven"
    ],
    "resultTags": [
      "DR_RISK_SMART",
      "DR_DECIDE_FAST"
    ],
    "signalTags": [
      "PS_TOO_EASY"
    ]
  },
  {
    "id": "CM_019",
    "lever": "rules",
    "title": "No freeballs: must send an attackable ball (downball minimum)",
    "effect": "Reduces avoidance and increases purposeful action.",
    "stateTags": [
      "challenge",
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_RISK_SMART"
    ],
    "signalTags": [
      "PS_FREEBALL_GIVEAWAY",
      "PS_PLAYING_SAFE"
    ]
  },
  {
    "id": "CM_020",
    "lever": "scoring",
    "title": "Aggressive-attempt errors count half (for 5 minutes)",
    "effect": "Reinforces trying/learning vs fear of error.",
    "stateTags": [
      "challenge",
      "stability"
    ],
    "tune": "base",
    "resultTags": [
      "DR_RISK_SMART",
      "DR_RESET_SPEED"
    ],
    "signalTags": [
      "PS_PLAYING_SAFE"
    ]
  },
  {
    "id": "CM_021",
    "lever": "space",
    "title": "Short-court (move endline up) for 4 minutes",
    "effect": "Increases information density; speeds decisions.",
    "stateTags": [
      "challenge",
      "flow"
    ],
    "tune": "base",
    "formatTags": [
      "2v2",
      "3v3",
      "4v4"
    ],
    "resultTags": [
      "DR_DECIDE_FAST"
    ],
    "signalTags": [
      "PS_TOO_EASY"
    ]
  },
  {
    "id": "CM_022",
    "lever": "time",
    "title": "Serve prep time capped at 3 seconds",
    "effect": "Raises readiness under pressure; keeps rhythm.",
    "stateTags": [
      "challenge",
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_SERVE_TO_SCORE_RHYTHM"
    ],
    "signalTags": [
      "PS_TOO_EASY"
    ]
  },
  {
    "id": "CM_023",
    "lever": "rules",
    "title": "Constraint swap at 5 points (must change the rule)",
    "effect": "Prevents pattern-lock; forces mid-session adaptation.",
    "stateTags": [
      "challenge",
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_ADAPT_MIDRALLY"
    ],
    "signalTags": [
      "PS_STUCK"
    ]
  },
  {
    "id": "CM_024",
    "lever": "information",
    "title": "Defense chooses the bonus zone; offense must figure it out",
    "effect": "Encourages scanning and experimentation.",
    "stateTags": [
      "challenge",
      "clarity"
    ],
    "tune": "base",
    "resultTags": [
      "DR_ADAPT_MIDRALLY",
      "DR_READ_EARLY"
    ],
    "signalTags": [
      "PS_ONE_SOLUTION"
    ]
  },
  {
    "id": "CM_025",
    "lever": "numbers",
    "title": "Rotate 'coverage captain' each rally",
    "effect": "Improves shared responsibility and meaningful talk.",
    "stateTags": [
      "connection"
    ],
    "tune": "base",
    "resultTags": [
      "DR_COVERAGE_NETWORK",
      "DR_COMM_MEANINGFUL"
    ],
    "signalTags": [
      "PS_DISCONNECTED_COVER",
      "PS_SILENT"
    ]
  },
  {
    "id": "CM_026",
    "lever": "rules",
    "title": "Point only counts if a coverage touch happens after an attack",
    "effect": "Keeps players connected after the swing.",
    "stateTags": [
      "connection"
    ],
    "tune": "base",
    "formatTags": [
      "4v4",
      "6v6"
    ],
    "resultTags": [
      "DR_COVERAGE_NETWORK"
    ],
    "signalTags": [
      "PS_DISCONNECTED_COVER"
    ]
  },
  {
    "id": "CM_027",
    "lever": "space",
    "title": "Start zones: each player must start in a distinct zone",
    "effect": "Prevents bunching; creates lanes.",
    "stateTags": [
      "connection",
      "clarity"
    ],
    "tune": "base",
    "resultTags": [
      "DR_SPACING_FUNCTIONAL"
    ],
    "signalTags": [
      "PS_BUNCHING"
    ]
  },
  {
    "id": "CM_028",
    "lever": "information",
    "title": "Non-verbal round (hand signals only)",
    "effect": "Builds shared cues and scanning.",
    "stateTags": [
      "connection"
    ],
    "tune": "base",
    "resultTags": [
      "DR_COMM_MEANINGFUL"
    ],
    "signalTags": [
      "PS_NOISY"
    ]
  },
  {
    "id": "CM_029",
    "lever": "rules",
    "title": "Default seam ownership: left owns seam unless called otherwise",
    "effect": "Reduces hesitation and clarifies responsibility.",
    "stateTags": [
      "connection",
      "clarity"
    ],
    "tune": "base",
    "resultTags": [
      "DR_SEAM_OWNERSHIP"
    ],
    "signalTags": [
      "PS_HESITATE_SEAM"
    ]
  },
  {
    "id": "CM_030",
    "lever": "scoring",
    "title": "Bonus if 3 different players touch ball in a rally",
    "effect": "Encourages coordinated involvement.",
    "stateTags": [
      "connection",
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_ROLE_ROTATION_FLUID",
      "DR_COVERAGE_NETWORK"
    ],
    "signalTags": [
      "PS_DISCONNECTED_COVER"
    ]
  },
  {
    "id": "CM_031",
    "lever": "numbers",
    "title": "Add a neutral setter (both teams can use)",
    "effect": "Stabilizes second contact so team can focus on spacing/coverage.",
    "stateTags": [
      "connection",
      "stability"
    ],
    "tune": "base",
    "resultTags": [
      "DR_SPACING_FUNCTIONAL",
      "DR_COVERAGE_NETWORK"
    ]
  },
  {
    "id": "CM_032",
    "lever": "time",
    "title": "Everyone must move within 0.5s of first contact",
    "effect": "Speeds collective transition timing.",
    "stateTags": [
      "connection",
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_TRANSITION_SYNC"
    ],
    "signalTags": [
      "PS_LATE_TRANSITION"
    ]
  },
  {
    "id": "CM_033",
    "lever": "space",
    "title": "No-stand strip in middle third (must pass through, not park)",
    "effect": "Encourages dynamic spacing and lanes.",
    "stateTags": [
      "connection",
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_SPACING_FUNCTIONAL",
      "DR_TEMPO_CONTINUITY"
    ],
    "signalTags": [
      "PS_CHOPPY_RHYTHM"
    ]
  },
  {
    "id": "CM_034",
    "lever": "information",
    "title": "Pre-serve check: each player points to responsibility zone",
    "effect": "Externalizes shared understanding quickly.",
    "stateTags": [
      "connection",
      "clarity"
    ],
    "tune": "base",
    "resultTags": [
      "DR_SEAM_OWNERSHIP",
      "DR_BASE_SHAPE_FAST"
    ],
    "signalTags": [
      "PS_HESITATE_SEAM"
    ]
  },
  {
    "id": "CM_035",
    "lever": "rules",
    "title": "Coverage rule: after attack, at least 2 players must be inside 3m line",
    "effect": "Creates predictable coverage behaviors.",
    "stateTags": [
      "connection",
      "stability"
    ],
    "tune": "base",
    "formatTags": [
      "4v4",
      "6v6"
    ],
    "resultTags": [
      "DR_COVERAGE_NETWORK"
    ],
    "signalTags": [
      "PS_DISCONNECTED_COVER"
    ]
  },
  {
    "id": "CM_036",
    "lever": "scoring",
    "title": "Bonus for winning a rally after a teammate makes an emergency touch",
    "effect": "Reinforces staying connected after chaos.",
    "stateTags": [
      "connection",
      "stability"
    ],
    "tune": "base",
    "resultTags": [
      "DR_RALLY_EXTENSION",
      "DR_COVERAGE_NETWORK"
    ],
    "signalTags": [
      "PS_EMERGENCY_TOUCHES"
    ]
  },
  {
    "id": "CM_037",
    "lever": "scoring",
    "title": "Bonus for making first contact playable (even if rally lost)",
    "effect": "Reinforces stability behaviors under pressure.",
    "stateTags": [
      "stability",
      "clarity"
    ],
    "tune": "base",
    "resultTags": [
      "DR_PLAYABLE_FIRST_CONTACT"
    ],
    "signalTags": [
      "PS_EMERGENCY_TOUCHES",
      "PS_OVERPASS"
    ]
  },
  {
    "id": "CM_038",
    "lever": "rules",
    "title": "OOS second contact must be a controlled ball to a target zone",
    "effect": "Reduces panic and giveaways.",
    "stateTags": [
      "stability",
      "clarity"
    ],
    "tune": "base",
    "resultTags": [
      "DR_OUT_OF_SYSTEM_OK"
    ],
    "signalTags": [
      "PS_OOS_PANIC"
    ]
  },
  {
    "id": "CM_039",
    "lever": "space",
    "title": "Create a 'safe lane' for freeballs worth 2 points",
    "effect": "Encourages intentional freeballs instead of giveaways.",
    "stateTags": [
      "stability",
      "challenge"
    ],
    "tune": "base",
    "resultTags": [
      "DR_OUT_OF_SYSTEM_OK"
    ],
    "signalTags": [
      "PS_FREEBALL_GIVEAWAY"
    ]
  },
  {
    "id": "CM_040",
    "lever": "equipment",
    "title": "Use larger/softer ball for 4 minutes after collapse",
    "effect": "Stabilizes contact quality to rebuild organization.",
    "stateTags": [
      "stability"
    ],
    "tune": "base",
    "resultTags": [
      "DR_RALLY_EXTENSION"
    ],
    "signalTags": [
      "PS_RALLY_COLLAPSE"
    ]
  },
  {
    "id": "CM_041",
    "lever": "time",
    "title": "Error reset: 1 breath + name intention before next serve",
    "effect": "Supports emotional regulation and readiness.",
    "stateTags": [
      "stability"
    ],
    "tune": "base",
    "resultTags": [
      "DR_RESET_SPEED"
    ],
    "signalTags": [
      "PS_PANIC_AFTER_ERROR"
    ]
  },
  {
    "id": "CM_042",
    "lever": "information",
    "title": "Coach feedback cap: one sentence only at 3-rally breaks",
    "effect": "Prevents over-control; supports self-correction.",
    "stateTags": [
      "stability",
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_RESET_SPEED",
      "DR_TEMPO_CONTINUITY"
    ]
  },
  {
    "id": "CM_043",
    "lever": "rules",
    "title": "Start with freeball (not serve) for 5 rallies",
    "effect": "Stabilizes initial information to build rally structure.",
    "stateTags": [
      "stability"
    ],
    "tune": "base",
    "formatTags": [
      "4v4",
      "6v6"
    ],
    "resultTags": [
      "DR_RALLY_EXTENSION"
    ],
    "signalTags": [
      "PS_TOO_HARD"
    ]
  },
  {
    "id": "CM_044",
    "lever": "scoring",
    "title": "Penalty only for avoidances (no-move, no-call), not for misses",
    "effect": "Shifts focus from fear to engagement.",
    "stateTags": [
      "stability",
      "challenge"
    ],
    "tune": "base",
    "resultTags": [
      "DR_RESET_SPEED",
      "DR_RISK_SMART"
    ],
    "signalTags": [
      "PS_PLAYING_SAFE"
    ]
  },
  {
    "id": "CM_045",
    "lever": "numbers",
    "title": "Add a back-row safety who can only keep ball in play",
    "effect": "Increases rally length and learning time.",
    "stateTags": [
      "stability",
      "flow"
    ],
    "tune": "base",
    "formatTags": [
      "4v4",
      "6v6"
    ],
    "resultTags": [
      "DR_RALLY_EXTENSION"
    ],
    "signalTags": [
      "PS_RALLY_COLLAPSE"
    ]
  },
  {
    "id": "CM_046",
    "lever": "space",
    "title": "Expand boundaries by 1m each side (cones)",
    "effect": "Reduces density; helps overwhelmed groups stabilize.",
    "stateTags": [
      "stability"
    ],
    "tune": "base",
    "resultTags": [
      "DR_PLAYABLE_FIRST_CONTACT"
    ],
    "signalTags": [
      "PS_TOO_HARD"
    ]
  },
  {
    "id": "CM_047",
    "lever": "rules",
    "title": "Allow one 'reset freeball' per rally after scramble",
    "effect": "Prevents panic giveaways while keeping play alive.",
    "stateTags": [
      "stability"
    ],
    "tune": "base",
    "resultTags": [
      "DR_RALLY_EXTENSION",
      "DR_OUT_OF_SYSTEM_OK"
    ],
    "signalTags": [
      "PS_RALLY_COLLAPSE"
    ]
  },
  {
    "id": "CM_048",
    "lever": "equipment",
    "title": "Use a slightly heavier ball for 4 minutes",
    "effect": "Slows tempo slightly; supports controlled contacts.",
    "stateTags": [
      "stability",
      "clarity"
    ],
    "tune": "base",
    "resultTags": [
      "DR_PLAYABLE_FIRST_CONTACT"
    ],
    "signalTags": [
      "PS_EMERGENCY_TOUCHES"
    ]
  },
  {
    "id": "CM_049",
    "lever": "time",
    "title": "Continuous play: coach toss immediately after rally ends",
    "effect": "Builds rhythm and reduces downtime.",
    "stateTags": [
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_TEMPO_CONTINUITY"
    ],
    "signalTags": [
      "PS_CHOPPY_RHYTHM"
    ]
  },
  {
    "id": "CM_050",
    "lever": "scoring",
    "title": "2 points if you win within 2 contacts after a dig",
    "effect": "Rewards fast transition to offense.",
    "stateTags": [
      "flow",
      "challenge"
    ],
    "tune": "base",
    "resultTags": [
      "DR_FAST_TRANSITION_TO_OFF"
    ],
    "signalTags": [
      "PS_LATE_TRANSITION"
    ]
  },
  {
    "id": "CM_051",
    "lever": "rules",
    "title": "Setter takes first contact \u2192 anyone can set; call 'I got 2'",
    "effect": "Encourages fluid role switching.",
    "stateTags": [
      "flow",
      "connection"
    ],
    "tune": "base",
    "resultTags": [
      "DR_ROLE_ROTATION_FLUID"
    ],
    "signalTags": [
      "PS_SETTER_HIDDEN"
    ]
  },
  {
    "id": "CM_052",
    "lever": "numbers",
    "title": "Serve-to-score wash: keep serving until you score on serve",
    "effect": "Creates serve rhythm and pressure flow.",
    "stateTags": [
      "flow",
      "challenge"
    ],
    "tune": "base",
    "resultTags": [
      "DR_SERVE_TO_SCORE_RHYTHM"
    ],
    "signalTags": [
      "PS_LOW_ENERGY"
    ]
  },
  {
    "id": "CM_053",
    "lever": "information",
    "title": "No coaching during rallies; only at 3-rally breaks",
    "effect": "Protects continuity and reduces fragmentation.",
    "stateTags": [
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_TEMPO_CONTINUITY"
    ],
    "signalTags": [
      "PS_CHOPPY_RHYTHM"
    ]
  },
  {
    "id": "CM_054",
    "lever": "information",
    "title": "One-word intention before each serve ('fast','read','cover')",
    "effect": "Aligns collective tempo intention.",
    "stateTags": [
      "flow",
      "connection"
    ],
    "tune": "base",
    "resultTags": [
      "DR_SERVE_TO_SCORE_RHYTHM",
      "DR_TEMPO_CONTINUITY"
    ],
    "signalTags": [
      "PS_LOW_ENERGY"
    ]
  },
  {
    "id": "CM_055",
    "lever": "rules",
    "title": "Bonus if transition attack uses full approach (no standing roll)",
    "effect": "Encourages early movement and readiness.",
    "stateTags": [
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_FAST_TRANSITION_TO_OFF"
    ],
    "signalTags": [
      "PS_LATE_TRANSITION"
    ]
  },
  {
    "id": "CM_056",
    "lever": "time",
    "title": "Between-rally reset capped at 8 seconds",
    "effect": "Maintains tempo; exposes slow organization.",
    "stateTags": [
      "flow",
      "clarity"
    ],
    "tune": "base",
    "resultTags": [
      "DR_TEMPO_CONTINUITY"
    ],
    "signalTags": [
      "PS_CHOPPY_RHYTHM"
    ]
  },
  {
    "id": "CM_057",
    "lever": "scoring",
    "title": "Bonus for winning 2 rallies in a row without coach prompt",
    "effect": "Encourages self-sustained flow.",
    "stateTags": [
      "flow",
      "stability"
    ],
    "tune": "base",
    "resultTags": [
      "DR_TEMPO_CONTINUITY",
      "DR_RESET_SPEED"
    ],
    "signalTags": [
      "PS_STUCK"
    ]
  },
  {
    "id": "CM_058",
    "lever": "numbers",
    "title": "Rotate who sets each rally (temporary)",
    "effect": "Increases adaptability and continuity through change.",
    "stateTags": [
      "flow",
      "challenge"
    ],
    "tune": "base",
    "formatTags": [
      "3v3",
      "4v4"
    ],
    "resultTags": [
      "DR_ROLE_ROTATION_FLUID",
      "DR_ADAPT_MIDRALLY"
    ],
    "signalTags": [
      "PS_TOO_EASY"
    ]
  },
  {
    "id": "CM_059",
    "lever": "space",
    "title": "Bonus zone moves each rally (coach slides cone)",
    "effect": "Keeps rhythm while adding variability.",
    "stateTags": [
      "flow",
      "challenge"
    ],
    "tune": "base",
    "resultTags": [
      "DR_OPTION_VARIETY",
      "DR_TEMPO_CONTINUITY"
    ],
    "signalTags": [
      "PS_TOO_EASY"
    ]
  },
  {
    "id": "CM_060",
    "lever": "time",
    "title": "Rally batch: play 6 rallies straight before any reflection",
    "effect": "Prevents stop-start coaching; supports natural rhythm.",
    "stateTags": [
      "flow"
    ],
    "tune": "base",
    "resultTags": [
      "DR_TEMPO_CONTINUITY"
    ],
    "signalTags": [
      "PS_CHOPPY_RHYTHM"
    ]
  },
  {
    "id": "CM_061",
    "lever": "space",
    "title": "Shrink scoring zone to a 3x3 box",
    "effect": "Raises precision demands without changing activity.",
    "stateTags": [
      "challenge",
      "clarity"
    ],
    "tune": "too_easy",
    "resultTags": [
      "DR_TARGET_VISIBILITY"
    ],
    "signalTags": [
      "PS_TOO_EASY"
    ]
  },
  {
    "id": "CM_062",
    "lever": "time",
    "title": "Max 2 team contacts for 2 minutes",
    "effect": "Increases decision speed and scanning.",
    "stateTags": [
      "challenge"
    ],
    "tune": "too_easy",
    "resultTags": [
      "DR_DECIDE_FAST"
    ],
    "signalTags": [
      "PS_TOO_EASY"
    ]
  },
  {
    "id": "CM_063",
    "lever": "rules",
    "title": "Add 'must attack to score' rule",
    "effect": "Adds consequence pressure and removes passive play.",
    "stateTags": [
      "challenge",
      "flow"
    ],
    "tune": "too_easy",
    "resultTags": [
      "DR_RISK_SMART"
    ],
    "signalTags": [
      "PS_TOO_EASY"
    ]
  },
  {
    "id": "CM_064",
    "lever": "numbers",
    "title": "Remove one attacker for 3 minutes",
    "effect": "Forces smarter transition and coverage under pressure.",
    "stateTags": [
      "challenge",
      "connection"
    ],
    "tune": "too_easy",
    "formatTags": [
      "uneven"
    ],
    "resultTags": [
      "DR_TRANSITION_SYNC"
    ],
    "signalTags": [
      "PS_TOO_EASY"
    ]
  },
  {
    "id": "CM_065",
    "lever": "rules",
    "title": "Allow one catch-and-release on first contact",
    "effect": "Reduces overwhelm while keeping intention.",
    "stateTags": [
      "stability",
      "clarity"
    ],
    "tune": "too_hard",
    "resultTags": [
      "DR_PLAYABLE_FIRST_CONTACT"
    ],
    "signalTags": [
      "PS_TOO_HARD"
    ]
  },
  {
    "id": "CM_066",
    "lever": "numbers",
    "title": "Add one extra defender temporarily (7th player)",
    "effect": "Stabilizes rallies; increases learning time.",
    "stateTags": [
      "stability"
    ],
    "tune": "too_hard",
    "formatTags": [
      "6v6"
    ],
    "resultTags": [
      "DR_RALLY_EXTENSION"
    ],
    "signalTags": [
      "PS_TOO_HARD"
    ]
  },
  {
    "id": "CM_067",
    "lever": "space",
    "title": "Widen lanes / remove bonus zones",
    "effect": "Reduces conflicting goals; stabilizes action.",
    "stateTags": [
      "stability"
    ],
    "tune": "too_hard",
    "resultTags": [
      "DR_PLAYABLE_FIRST_CONTACT"
    ],
    "signalTags": [
      "PS_TOO_HARD"
    ]
  },
  {
    "id": "CM_068",
    "lever": "time",
    "title": "Add 2 seconds before serve to re-organize base",
    "effect": "Creates calmer starts and clearer roles.",
    "stateTags": [
      "stability",
      "clarity"
    ],
    "tune": "too_hard",
    "resultTags": [
      "DR_BASE_SHAPE_FAST"
    ],
    "signalTags": [
      "PS_TOO_HARD"
    ]
  },
  {
    "id": "CM_069",
    "lever": "information",
    "title": "Freeze-word after first contact ('up/line/short')",
    "effect": "Turns chaos into shared information quickly.",
    "stateTags": [
      "clarity",
      "connection"
    ],
    "tune": "too_chaotic",
    "resultTags": [
      "DR_COMM_MEANINGFUL"
    ],
    "signalTags": [
      "PS_TOO_CHAOTIC"
    ]
  },
  {
    "id": "CM_070",
    "lever": "scoring",
    "title": "Only count points that include 3 contacts",
    "effect": "Forces organization over randomness.",
    "stateTags": [
      "clarity",
      "stability"
    ],
    "tune": "too_chaotic",
    "resultTags": [
      "DR_RALLY_EXTENSION"
    ],
    "signalTags": [
      "PS_TOO_CHAOTIC"
    ]
  },
  {
    "id": "CM_071",
    "lever": "time",
    "title": "Add a 10-second reset ritual after errors (breathe + name intention)",
    "effect": "Regulates arousal and recommitment.",
    "stateTags": [
      "stability"
    ],
    "tune": "too_chaotic",
    "resultTags": [
      "DR_RESET_SPEED"
    ],
    "signalTags": [
      "PS_PANIC_AFTER_ERROR",
      "PS_TOO_CHAOTIC"
    ]
  },
  {
    "id": "CM_072",
    "lever": "rules",
    "title": "Limit simultaneous constraints to ONE for 5 minutes",
    "effect": "Reduces noise; improves learning signal-to-noise.",
    "stateTags": [
      "clarity",
      "stability"
    ],
    "tune": "too_chaotic",
    "resultTags": [
      "DR_READ_EARLY",
      "DR_PLAYABLE_FIRST_CONTACT"
    ],
    "signalTags": [
      "PS_TOO_CHAOTIC"
    ]
  }
] as const;

```
---
### Counts
- Desired Results: 20
- Problem Signals: 25
- Constraint Moves: 72
