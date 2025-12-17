export type SystemState = 'clarity' | 'challenge' | 'connection' | 'stability' | 'flow'

export interface SystemStateOption {
  id: SystemState
  label: string
  description: string
}

export interface Format {
  id: string
  label: string
}

export interface DesiredResult {
  id: string
  label: string
  stateTags: SystemState[]
  watchFors: string[]
}

export interface ProblemSignal {
  id: string
  label: string
  stateTags: SystemState[]
}

export interface ConstraintMove {
  id: string
  lever: string
  title: string
  effect: string
  stateTags: SystemState[]
  formatTags?: string[]
  resultTags?: string[]
  signalTags?: string[]
  tune: 'base' | 'too_easy' | 'too_hard' | 'too_chaotic'
}

export interface FocusCardData {
  systemState: SystemState
  format: string
  desiredResult: string
  problemSignals: string[]
  constraints: ConstraintMove[]
}

export interface SavedNote {
  id: string
  timestamp: number
  systemState: SystemState
  format: string
  desiredResult: string
  problemSignals: string[]
  constraintsUsed: string[]
  reflection: string
}

export interface SessionContextType {
  systemState: SystemState | null
  format: string | null
  desiredResult: string | null
  problemSignals: string[]
  focusCard: FocusCardData | null
  setSystemState: (state: SystemState | null) => void
  setFormat: (format: string | null) => void
  setDesiredResult: (result: string | null) => void
  setProblemSignals: (signals: string[]) => void
  setFocusCard: (card: FocusCardData | null) => void
  reset: () => void
}
