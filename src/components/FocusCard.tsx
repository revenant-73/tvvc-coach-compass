import React from 'react'
import { FocusCardData, ConstraintMove, DesiredResult } from '../types'
import { desiredResults } from '../data/desiredResults'

interface FocusCardProps {
  data: FocusCardData
  onTooEasy?: () => void
  onTooHard?: () => void
  onTooChaotic?: () => void
}

export const FocusCard: React.FC<FocusCardProps> = ({
  data,
  onTooEasy,
  onTooHard,
  onTooChaotic
}) => {
  const desiredResult = desiredResults.find(dr => dr.id === data.desiredResult)

  return (
    <div className="space-y-6">
      <div className="bg-charcoal rounded-lg p-6 border border-divider">
        <h2 className="text-lg font-bold text-teal mb-2">Focus Statement</h2>
        <p className="text-text-primary">
          {desiredResult?.label || 'Focus on the team outcome'}
        </p>
      </div>

      <div className="bg-charcoal rounded-lg p-6 border border-divider">
        <h3 className="text-lg font-bold text-teal mb-4">Watch-Fors</h3>
        <ul className="space-y-2">
          {desiredResult?.watchFors.map((watchFor, idx) => (
            <li key={idx} className="flex gap-2 text-text-primary">
              <span className="text-coral">•</span>
              <span>{watchFor}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-charcoal rounded-lg p-6 border border-divider">
        <h3 className="text-lg font-bold text-teal mb-4">Start Here Constraints</h3>
        <div className="space-y-3">
          {data.constraints.map(constraint => (
            <div
              key={constraint.id}
              className="bg-midnight rounded p-3 border-l-2 border-teal"
            >
              <h4 className="font-semibold text-text-primary">{constraint.title}</h4>
              <p className="text-text-secondary text-sm mt-1">{constraint.effect}</p>
              <p className="text-coral text-xs mt-2 font-semibold">{constraint.lever}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-charcoal rounded-lg p-6 border border-divider">
        <h3 className="text-lg font-bold text-teal mb-4">Adjust If Needed</h3>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={onTooEasy}
            className="px-3 py-2 text-sm bg-teal text-midnight rounded font-semibold hover:bg-teal-dark transition-all"
          >
            Too Easy
          </button>
          <button
            onClick={onTooHard}
            className="px-3 py-2 text-sm bg-coral text-midnight rounded font-semibold hover:bg-coral-muted transition-all"
          >
            Too Hard
          </button>
          <button
            onClick={onTooChaotic}
            className="px-3 py-2 text-sm bg-divider text-text-primary rounded font-semibold hover:bg-text-secondary hover:text-midnight transition-all"
          >
            Chaotic
          </button>
        </div>
      </div>
    </div>
  )
}
