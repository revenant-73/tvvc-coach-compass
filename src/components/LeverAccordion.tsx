import React, { useState } from 'react'
import { ConstraintMove } from '../types'

interface LeverAccordionProps {
  constraints: ConstraintMove[]
}

export const LeverAccordion: React.FC<LeverAccordionProps> = ({ constraints }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const groupedByLever = constraints.reduce(
    (acc, constraint) => {
      const lever = constraint.lever
      if (!acc[lever]) acc[lever] = []
      acc[lever].push(constraint)
      return acc
    },
    {} as Record<string, ConstraintMove[]>
  )

  return (
    <div className="space-y-2">
      {Object.entries(groupedByLever).map(([lever, items]) => (
        <div key={lever} className="bg-charcoal rounded-lg border border-divider">
          <button
            onClick={() => setExpandedId(expandedId === lever ? null : lever)}
            className="w-full p-4 flex items-center justify-between hover:bg-divider transition-colors"
          >
            <span className="font-semibold text-teal capitalize">{lever}</span>
            <span className="text-text-secondary">{expandedId === lever ? '−' : '+'}</span>
          </button>

          {expandedId === lever && (
            <div className="px-4 pb-4 space-y-3 border-t border-divider">
              {items.map(constraint => (
                <div key={constraint.id} className="bg-midnight rounded p-3">
                  <h4 className="font-semibold text-text-primary text-sm">{constraint.title}</h4>
                  <p className="text-text-secondary text-xs mt-1">{constraint.effect}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
