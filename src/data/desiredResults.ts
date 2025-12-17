import { DesiredResult } from '../types'

export const desiredResults: DesiredResult[] = [
  {
    id: 'DR_READ_EARLY',
    label: 'Earlier reads before contact',
    stateTags: ['clarity', 'connection'],
    watchFors: [
      'More players scan before first/second contact',
      'Earlier first step (less reacting)',
      'Fewer surprise balls landing untouched'
    ]
  },
  {
    id: 'DR_BASE_SHAPE_FAST',
    label: 'Faster base shape formation',
    stateTags: ['clarity', 'flow'],
    watchFors: [
      'Defense organizes earlier (by attacker contact)',
      'Less mid-rally drifting/crossing',
      'Fewer last-second collisions/seam confusion'
    ]
  },
  {
    id: 'DR_TARGET_VISIBILITY',
    label: 'Clearer target availability (setter options)',
    stateTags: ['clarity', 'connection'],
    watchFors: [
      'Setter has 2+ visible options most rallies',
      'More sets delivered without panic rushing',
      'Attackers arrive with a plan earlier'
    ]
  },
  {
    id: 'DR_SEAM_OWNERSHIP',
    label: 'Clear seam responsibility',
    stateTags: ['clarity', 'connection'],
    watchFors: [
      "Fewer 'mine?' hesitations",
      'More decisive first-contact calls',
      'Reduced double-contacts / no-contacts in seams'
    ]
  },
  {
    id: 'DR_OPTION_VARIETY',
    label: 'Greater variety of solutions',
    stateTags: ['challenge', 'flow'],
    watchFors: [
      'More than one attack shot used intentionally',
      'Receivers vary targets when needed',
      'Defenders change starting positions based on cues'
    ]
  },
  {
    id: 'DR_DECIDE_FAST',
    label: 'Faster decisions under pressure',
    stateTags: ['challenge', 'flow'],
    watchFors: [
      'Less freezing after imperfect contacts',
      'Earlier commit to option (swing/tip/roll)',
      'More productive second-ball choices'
    ]
  },
  {
    id: 'DR_RISK_SMART',
    label: 'Smarter risk-taking',
    stateTags: ['challenge', 'stability'],
    watchFors: [
      'More aggressive choices without reckless errors',
      "Errors trend from 'trying' not 'avoiding'",
      'Players take calculated shots to open space'
    ]
  },
  {
    id: 'DR_ADAPT_MIDRALLY',
    label: 'Mid-rally adjustment ability',
    stateTags: ['challenge', 'flow'],
    watchFors: [
      'Players change plan after new info appears',
      'Coverage adjusts to hitter/set changes',
      'Less repeating same failed option'
    ]
  },
  {
    id: 'DR_COVERAGE_NETWORK',
    label: 'Stronger coverage network',
    stateTags: ['connection', 'stability'],
    watchFors: [
      'More playable second contacts after blocks/digs',
      'Fewer uncovered tips/rolls',
      'Teammates fill behind/inside hitter more consistently'
    ]
  },
  {
    id: 'DR_SPACING_FUNCTIONAL',
    label: 'Functional spacing and lanes',
    stateTags: ['connection', 'flow'],
    watchFors: [
      'Less bunching around the ball',
      'Clearer approach/defense lanes',
      "'More 'options available' moments"
    ]
  },
  {
    id: 'DR_TRANSITION_SYNC',
    label: 'More synchronized transition',
    stateTags: ['connection', 'flow'],
    watchFors: [
      'More players move on first contact',
      'Setter/hitters arrive in time together',
      'Fewer late arrivals into attack/defense'
    ]
  },
  {
    id: 'DR_COMM_MEANINGFUL',
    label: 'More meaningful communication',
    stateTags: ['connection', 'clarity'],
    watchFors: [
      'Calls happen before contact not after',
      'Calls reduce confusion (not noise)',
      'Non-verbal cues support decisions'
    ]
  },
  {
    id: 'DR_PLAYABLE_FIRST_CONTACT',
    label: 'More playable first contacts',
    stateTags: ['stability', 'clarity'],
    watchFors: [
      'More passes/digs to a usable zone',
      'Fewer pure shanks/overpasses',
      'More rallies reach 3rd contact'
    ]
  },
  {
    id: 'DR_RALLY_EXTENSION',
    label: 'Extend rallies under pressure',
    stateTags: ['stability', 'flow'],
    watchFors: [
      "'More 'one more ball' moments",
      'Fewer immediate rally collapses',
      'Team stays organized after scrambles'
    ]
  },
  {
    id: 'DR_RESET_SPEED',
    label: 'Faster emotional reset',
    stateTags: ['stability', 'connection'],
    watchFors: [
      'Less visible frustration time',
      'Next-ball behavior returns quicker',
      'Communication stays constructive after errors'
    ]
  },
  {
    id: 'DR_OUT_OF_SYSTEM_OK',
    label: 'Better out-of-system stability',
    stateTags: ['stability', 'clarity'],
    watchFors: [
      'More controlled freeballs when needed',
      'More attacks from non-ideal sets',
      'Fewer panic plays on 2nd contact'
    ]
  },
  {
    id: 'DR_TEMPO_CONTINUITY',
    label: 'More continuity of play tempo',
    stateTags: ['flow', 'connection'],
    watchFors: [
      'Less stopping/standing between contacts',
      'More consistent rally rhythm',
      'Transitions happen automatically'
    ]
  },
  {
    id: 'DR_FAST_TRANSITION_TO_OFF',
    label: 'Faster defense-to-offense transition',
    stateTags: ['flow', 'challenge'],
    watchFors: [
      'Setter becomes available sooner',
      'Attackers approach earlier',
      'Fewer free balls from slow transition'
    ]
  },
  {
    id: 'DR_SERVE_TO_SCORE_RHYTHM',
    label: 'Serve-to-score rhythm',
    stateTags: ['flow', 'challenge'],
    watchFors: [
      'Servers ready sooner',
      'Team organizes quickly after serve',
      'More immediate pressure after serve'
    ]
  },
  {
    id: 'DR_ROLE_ROTATION_FLUID',
    label: 'Fluid role switching',
    stateTags: ['flow', 'connection'],
    watchFors: [
      'Second contact handled smoothly when setter takes first',
      'Players cover seamlessly when roles swap',
      'Fewer confusion moments on broken plays'
    ]
  }
]
