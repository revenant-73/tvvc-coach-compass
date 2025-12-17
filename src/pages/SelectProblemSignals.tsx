import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../state/SessionContext'
import { problemSignals } from '../data/problemSignals'
import { buildFocusCard } from '../logic/buildFocusCard'
import { Chip } from '../components/Chip'
import { Stepper } from '../components/Stepper'

export const SelectProblemSignals: React.FC = () => {
  const navigate = useNavigate()
  const {
    systemState,
    format,
    desiredResult,
    problemSignals: selectedSignals,
    setProblemSignals,
    setFocusCard
  } = useSession()

  if (!systemState || !format || !desiredResult) {
    navigate('/')
    return null
  }

  const handleToggle = (signalId: string) => {
    setProblemSignals(
      selectedSignals.includes(signalId)
        ? selectedSignals.filter(id => id !== signalId)
        : [...selectedSignals, signalId].slice(0, 2)
    )
  }

  const handleContinue = () => {
    const card = buildFocusCard(systemState, format, desiredResult, selectedSignals)
    setFocusCard(card)
    navigate('/focus')
  }

  return (
    <div className="space-y-6">
      <Stepper steps={['State', 'Format', 'Result', 'Signals', 'Focus']} currentStep={3} />

      <div>
        <h2 className="text-2xl font-bold text-teal mb-2">What are you seeing right now?</h2>
        <p className="text-text-secondary mb-2">
          Optional: Pick 1–2 problem signals (max).
        </p>
        <p className="text-text-secondary text-sm mb-6">
          Skip if you want to go straight to constraints.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {problemSignals.map(signal => (
            <Chip
              key={signal.id}
              onClick={() => handleToggle(signal.id)}
              selected={selectedSignals.includes(signal.id)}
              removable
            >
              {signal.label}
            </Chip>
          ))}
        </div>

        <button
          onClick={handleContinue}
          className="w-full px-4 py-3 bg-teal text-midnight rounded-lg font-semibold hover:bg-teal-dark transition-all"
        >
          See Focus Card
        </button>
      </div>
    </div>
  )
}
