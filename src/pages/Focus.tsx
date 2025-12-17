import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../state/SessionContext'
import { FocusCard as FocusCardComponent } from '../components/FocusCard'
import { Timer } from '../components/Timer'
import { getTuningConstraints } from '../logic/buildFocusCard'

export const Focus: React.FC = () => {
  const navigate = useNavigate()
  const { focusCard, setFocusCard, reset } = useSession()
  const [showTimer, setShowTimer] = useState(false)
  const [tunedConstraints, setTunedConstraints] = useState<any[] | null>(null)
  const [tuneType, setTuneType] = useState<'too_easy' | 'too_hard' | 'too_chaotic' | null>(null)

  if (!focusCard) {
    navigate('/')
    return null
  }

  const handleTooEasy = () => {
    const tuned = getTuningConstraints(focusCard.constraints, 'too_easy')
    setTunedConstraints(tuned)
    setTuneType('too_easy')
  }

  const handleTooHard = () => {
    const tuned = getTuningConstraints(focusCard.constraints, 'too_hard')
    setTunedConstraints(tuned)
    setTuneType('too_hard')
  }

  const handleTooChaotic = () => {
    const tuned = getTuningConstraints(focusCard.constraints, 'too_chaotic')
    setTunedConstraints(tuned)
    setTuneType('too_chaotic')
  }

  const handleStartTimer = () => {
    setShowTimer(true)
  }

  const handleTimerComplete = () => {
    setShowTimer(false)
  }

  const handleNewFocus = () => {
    reset()
    navigate('/')
  }

  const handleSaveNote = () => {
    navigate('/notes?new=true')
  }

  if (tunedConstraints && tuneType) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-teal">Tuned Constraints ({tuneType})</h2>
        <div className="space-y-3">
          {tunedConstraints.map(constraint => (
            <div
              key={constraint.id}
              className="bg-charcoal rounded p-4 border-l-2 border-coral"
            >
              <h4 className="font-semibold text-text-primary">{constraint.title}</h4>
              <p className="text-text-secondary text-sm mt-1">{constraint.effect}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            setTunedConstraints(null)
            setTuneType(null)
          }}
          className="w-full px-4 py-2 bg-charcoal text-text-primary border border-divider rounded-lg hover:border-teal"
        >
          Back to Focus Card
        </button>
      </div>
    )
  }

  if (showTimer) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-teal mb-6">Commit to These Constraints</h2>
        <Timer initialSeconds={240} onComplete={handleTimerComplete} />

        <div className="space-y-2">
          <button
            onClick={handleSaveNote}
            className="w-full px-4 py-3 bg-teal text-midnight rounded-lg font-semibold hover:bg-teal-dark"
          >
            Save This Session
          </button>
          <button
            onClick={handleNewFocus}
            className="w-full px-4 py-3 bg-charcoal text-text-primary border border-divider rounded-lg hover:border-teal"
          >
            New Focus
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <FocusCardComponent
        data={focusCard}
        onTooEasy={handleTooEasy}
        onTooHard={handleTooHard}
        onTooChaotic={handleTooChaotic}
      />

      <div className="space-y-2">
        <button
          onClick={handleStartTimer}
          className="w-full px-4 py-3 bg-teal text-midnight rounded-lg font-semibold hover:bg-teal-dark"
        >
          Start 4-Min Commit
        </button>
        <button
          onClick={handleNewFocus}
          className="w-full px-4 py-3 bg-charcoal text-text-primary border border-divider rounded-lg hover:border-teal"
        >
          Try Different Focus
        </button>
      </div>
    </div>
  )
}
