import './ObjectiveTypeSelector.css'

const OBJECTIVE_TYPES = [
  { id: 'individual', label: 'Individual Focus', icon: '👤' },
  { id: 'team', label: 'Team Focus', icon: '👥' },
]

export default function ObjectiveTypeSelector({ onSelect }) {
  return (
    <div className="objective-selector">
      <div className="selector-header">
        <h2>Choose Objective</h2>
        <p className="selector-subtitle">What are we focusing on?</p>
      </div>

      <div className="objective-grid">
        {OBJECTIVE_TYPES.map((type) => (
          <button
            key={type.id}
            className="objective-card"
            onClick={() => onSelect(type.id)}
          >
            <div className="objective-icon">{type.icon}</div>
            <div className="objective-label">{type.label}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
