import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../state/SessionContext'
import { formats } from '../data/formats'
import { CardButton } from '../components/CardButton'
import { Stepper } from '../components/Stepper'

export const SelectFormat: React.FC = () => {
  const navigate = useNavigate()
  const { format, setFormat, systemState } = useSession()

  if (!systemState) {
    navigate('/')
    return null
  }

  const handleSelect = (formatId: string) => {
    setFormat(formatId)
    navigate('/result')
  }

  return (
    <div className="space-y-6">
      <Stepper steps={['State', 'Format', 'Result', 'Signals', 'Focus']} currentStep={1} />

      <div>
        <h2 className="text-2xl font-bold text-teal mb-2">What structure are you in?</h2>
        <p className="text-text-secondary mb-6">
          Format shapes the constraints we choose.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {formats.map(fmt => (
            <CardButton
              key={fmt.id}
              onClick={() => handleSelect(fmt.id)}
              selected={format === fmt.id}
            >
              <div className="font-semibold">{fmt.label}</div>
            </CardButton>
          ))}
        </div>
      </div>
    </div>
  )
}
