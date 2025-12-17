import { SystemState, ConstraintMove, FocusCardData, DesiredResult, ProblemSignal } from '../types'
import { constraintMoves } from '../data/constraintMoves'
import { desiredResults } from '../data/desiredResults'
import { problemSignals } from '../data/problemSignals'

export const buildFocusCard = (
  systemState: SystemState,
  format: string,
  desiredResultId: string,
  selectedSignalIds: string[]
): FocusCardData => {
  const selectedConstraints = selectConstraints(
    systemState,
    format,
    desiredResultId,
    selectedSignalIds
  )

  return {
    systemState,
    format,
    desiredResult: desiredResultId,
    problemSignals: selectedSignalIds,
    constraints: selectedConstraints
  }
}

const selectConstraints = (
  systemState: SystemState,
  format: string,
  desiredResultId: string,
  signalIds: string[]
): ConstraintMove[] => {
  let candidates = constraintMoves.filter(
    cm => cm.stateTags.includes(systemState) && cm.tune === 'base'
  )

  if (format && format !== 'uneven') {
    const formatSpecific = candidates.filter(cm => !cm.formatTags || cm.formatTags.includes(format))
    if (formatSpecific.length > 0) {
      candidates = formatSpecific
    }
  }

  if (desiredResultId) {
    const resultMatches = candidates.filter(cm => cm.resultTags?.includes(desiredResultId))
    if (resultMatches.length > 0) {
      candidates = resultMatches
    }
  }

  if (signalIds.length > 0) {
    const signalMatches = candidates.filter(cm =>
      cm.signalTags?.some(tag => signalIds.includes(tag))
    )
    if (signalMatches.length > 0) {
      candidates = signalMatches
    }
  }

  return candidates.slice(0, 3)
}

export const getTuningConstraints = (
  baseConstraints: ConstraintMove[],
  tuneType: 'too_easy' | 'too_hard' | 'too_chaotic'
): ConstraintMove[] => {
  const baseTags = new Set<string>()
  baseConstraints.forEach(cm => {
    cm.stateTags.forEach(tag => baseTags.add(tag))
  })

  return constraintMoves
    .filter(cm => cm.tune === tuneType && cm.stateTags.some(tag => baseTags.has(tag)))
    .slice(0, 3)
}

export const getDesiredResultData = (id: string): DesiredResult | undefined => {
  return desiredResults.find(dr => dr.id === id)
}

export const getProblemSignalData = (id: string): ProblemSignal | undefined => {
  return problemSignals.find(ps => ps.id === id)
}
