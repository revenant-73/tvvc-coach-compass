import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../state/SessionContext'
import { systemStates } from '../data/systemStates'
import { CardButton } from '../components/CardButton'
import { Stepper } from '../components/Stepper'

export const SelectSystemState: React.FC = () => {
  const navigate = useNavigate()
  const { systemState, setSystemState } = useSession()

  const handleSelect = (id: any) => {
    setSystemState(id)
    navigate('/format')
  }

  return (
    <div className="space-y-6">
      <Stepper steps={['State', 'Format', 'Result', 'Signals', 'Focus']} currentStep={0} />

      <div>
        <h2 className="text-2xl font-bold text-teal mb-2">What does the team need right now?</h2>
        <p className="text-text-secondary mb-6">
          Notice the system state and pick what feels most urgent.
        </p>

        <div className="space-y-3">
          {systemStates.map(state => (
            <CardButton
              key={state.id}
              onClick={() => handleSelect(state.id)}
              selected={systemState === state.id}
            >
              <div className="text-left">
                <div className="font-semibold text-lg">{state.label}</div>
                <div className="text-text-secondary text-sm mt-1">{state.description}</div>
              </div>
            </CardButton>
          ))}
        </div>
      </div>
    </div>
  )
}
