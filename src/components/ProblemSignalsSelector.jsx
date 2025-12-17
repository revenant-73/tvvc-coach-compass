import { useState } from 'react'
import './ProblemSignalsSelector.css'

const PROBLEM_SIGNALS = [
  { id: 'slow-decision', label: 'Slow decision-making' },
  { id: 'poor-spacing', label: 'Poor spacing' },
  { id: 'rushed', label: 'Players rushing' },
  { id: 'hesitant', label: 'Hesitant/cautious' },
  { id: 'crowded', label: 'Too crowded' },
  { id: 'disorganized', label: 'Disorganized' },
  { id: 'low-intensity', label: 'Low intensity' },
  { id: 'turnovers', label: 'Turnovers' },
  { id: 'flat-movement', label: 'Flat/predictable movement' },
  { id: 'communication', label: 'Poor communication' },
  { id: 'positioning', label: 'Wrong positioning' },
  { id: 'first-touch', label: 'Poor first touch' },
]

export default function ProblemSignalsSelector({ onSelect }) {
  const [selected, setSelected] = useState([])

  const toggleSignal = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    )
  }

  const handleContinue = () => {
    if (selected.length > 0) {
      onSelect(selected)
    }
  }

  return (
    <div className="problem-signals-selector">
      <div className="selector-header">
        <h2>Problem Signals</h2>
        <p className="selector-subtitle">What are you seeing? (select any)</p>
      </div>

      <div className="signals-grid">
        {PROBLEM_SIGNALS.map((signal) => (
          <button
            key={signal.id}
            className={`signal-button ${selected.includes(signal.id) ? 'selected' : ''}`}
            onClick={() => toggleSignal(signal.id)}
          >
            <span className="signal-checkbox">
              {selected.includes(signal.id) ? '✓' : ''}
            </span>
            {signal.label}
          </button>
        ))}
      </div>

      <button
        className="continue-button"
        onClick={handleContinue}
        disabled={selected.length === 0}
      >
        Generate Focus Card
      </button>
    </div>
  )
}
