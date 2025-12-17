import './OutcomeSelector.css'

const OUTCOMES = {
  individual: [
    { id: 'decision-making', label: 'Better decision-making' },
    { id: 'positioning', label: 'Better positioning' },
    { id: 'movement-rhythm', label: 'Movement & rhythm' },
    { id: 'confidence', label: 'Build confidence' },
    { id: 'passing-accuracy', label: 'Passing accuracy' },
    { id: 'game-awareness', label: 'Game awareness' },
  ],
  team: [
    { id: 'possession', label: 'Better possession' },
    { id: 'spacing', label: 'Better team spacing' },
    { id: 'communication', label: 'Team communication' },
    { id: 'transition', label: 'Transition play' },
    { id: 'intensity', label: 'Increase intensity' },
    { id: 'shape', label: 'Maintain shape' },
  ],
}

export default function OutcomeSelector({ objectiveType, onSelect }) {
  const outcomes = OUTCOMES[objectiveType] || []

  return (
    <div className="outcome-selector">
      <div className="selector-header">
        <h2>Select Outcome</h2>
        <p className="selector-subtitle">What's the desired result?</p>
      </div>

      <div className="outcome-grid">
        {outcomes.map((outcome) => (
          <button
            key={outcome.id}
            className="outcome-button"
            onClick={() => onSelect(outcome.id)}
          >
            {outcome.label}
          </button>
        ))}
      </div>
    </div>
  )
}
