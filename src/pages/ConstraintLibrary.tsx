import React from 'react'
import { useNavigate } from 'react-router-dom'
import { constraintMoves } from '../data/constraintMoves'
import { LeverAccordion } from '../components/LeverAccordion'

export const ConstraintLibrary: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-teal">Constraint Library</h2>
      <p className="text-text-secondary">
        Browse all {constraintMoves.length} constraints organized by lever.
      </p>

      <LeverAccordion constraints={constraintMoves} />

      <button
        onClick={() => navigate('/')}
        className="w-full px-4 py-3 bg-charcoal text-text-primary border border-divider rounded-lg hover:border-teal"
      >
        Back Home
      </button>
    </div>
  )
}
