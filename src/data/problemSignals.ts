import { ProblemSignal } from '../types'

export const problemSignals: ProblemSignal[] = [
  {
    id: 'PS_LATE_FEET',
    label: 'Late first step / reacting',
    stateTags: ['clarity']
  },
  {
    id: 'PS_NO_SCAN',
    label: 'Not scanning before contact',
    stateTags: ['clarity']
  },
  {
    id: 'PS_HESITATE_SEAM',
    label: 'Hesitation in seams',
    stateTags: ['clarity', 'connection']
  },
  {
    id: 'PS_SETTER_HIDDEN',
    label: 'Setter/options not visible',
    stateTags: ['clarity', 'connection']
  },
  {
    id: 'PS_ONE_SOLUTION',
    label: 'Forcing one solution',
    stateTags: ['challenge']
  },
  {
    id: 'PS_PLAYING_SAFE',
    label: 'Playing safe / avoiding risk',
    stateTags: ['challenge', 'stability']
  },
  {
    id: 'PS_RUSH_DECISION',
    label: 'Rushing decisions blindly',
    stateTags: ['challenge']
  },
  {
    id: 'PS_REPEATING_FAIL',
    label: 'Repeating same failing choice',
    stateTags: ['challenge']
  },
  {
    id: 'PS_DISCONNECTED_COVER',
    label: 'Coverage missing / no one behind',
    stateTags: ['connection']
  },
  {
    id: 'PS_BUNCHING',
    label: 'Bunching around ball',
    stateTags: ['connection']
  },
  {
    id: 'PS_SILENT',
    label: 'Too quiet (no actionable calls)',
    stateTags: ['connection']
  },
  {
    id: 'PS_NOISY',
    label: 'Too noisy (calls not useful)',
    stateTags: ['connection']
  },
  {
    id: 'PS_LATE_TRANSITION',
    label: 'Slow transition / watching',
    stateTags: ['flow', 'connection']
  },
  {
    id: 'PS_CHOPPY_RHYTHM',
    label: 'Choppy rhythm / stops',
    stateTags: ['flow']
  },
  {
    id: 'PS_LOW_ENERGY',
    label: 'Flat energy / low intent',
    stateTags: ['flow']
  },
  {
    id: 'PS_PANIC_AFTER_ERROR',
    label: 'Emotional spike after errors',
    stateTags: ['stability']
  },
  {
    id: 'PS_RALLY_COLLAPSE',
    label: 'Rallies collapse fast',
    stateTags: ['stability']
  },
  {
    id: 'PS_EMERGENCY_TOUCHES',
    label: 'Too many emergency contacts',
    stateTags: ['stability', 'clarity']
  },
  {
    id: 'PS_OOS_PANIC',
    label: 'Panic out-of-system second contacts',
    stateTags: ['stability']
  },
  {
    id: 'PS_FREEBALL_GIVEAWAY',
    label: 'Giving away freeballs',
    stateTags: ['stability', 'challenge']
  },
  {
    id: 'PS_OVERPASS',
    label: 'Overpasses gifting points',
    stateTags: ['stability']
  },
  {
    id: 'PS_TOO_EASY',
    label: 'Activity too easy / cruising',
    stateTags: ['challenge']
  },
  {
    id: 'PS_TOO_HARD',
    label: 'Activity too hard / constant failure',
    stateTags: ['stability']
  },
  {
    id: 'PS_TOO_CHAOTIC',
    label: 'Chaos without learning',
    stateTags: ['clarity', 'stability']
  },
  {
    id: 'PS_STUCK',
    label: 'Team feels stuck in a pattern',
    stateTags: ['connection', 'clarity']
  }
]
