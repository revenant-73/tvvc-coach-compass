import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../state/SessionContext'
import { desiredResults } from '../data/desiredResults'
import { CardButton } from '../components/CardButton'
import { Stepper } from '../components/Stepper'

export const SelectDesiredResult: React.FC = () => {
  const navigate = useNavigate()
  const { desiredResult, setDesiredResult, systemState } = useSession()

  if (!systemState) {
    navigate('/')
    return null
  }

  const handleSelect = (resultId: string) => {
    setDesiredResult(resultId)
    navigate('/signals')
  }

  return (
    <div className="space-y-6">
      <Stepper steps={['State', 'Format', 'Result', 'Signals', 'Focus']} currentStep={2} />

      <div>
        <h2 className="text-2xl font-bold text-teal mb-2">What do we want to see more of?</h2>
        <p className="text-text-secondary mb-6">
          Commit to an observable, team-level outcome.
        </p>

        <div className="space-y-3">
          {desiredResults.map(result => (
            <CardButton
              key={result.id}
              onClick={() => handleSelect(result.id)}
              selected={desiredResult === result.id}
            >
              <div className="text-left">
                <div className="font-semibold">{result.label}</div>
              </div>
            </CardButton>
          ))}
        </div>
      </div>
    </div>
  )
}
