import './FocusCard.css'

const FOCUS_DATA_TEMPLATES = {
  'individual|decision-making': {
    focus: 'Speed of Decision',
    playerMessage: 'Look first, decide fast',
    constraints: [
      { lever: 'Touches', options: ['Limit to 2 touches', 'One-touch play', '3+ touches allowed'] },
      { lever: 'Space', options: ['Smaller area', 'Open field', 'Reduce options'] },
      { lever: 'Time', options: ['No time limit', 'Call time pressure', 'React to pace'] },
    ],
    watchFor: ['First touch quality', 'Time to first action', 'Movement off the ball'],
    tooEasy: 'Add time pressure or reduce space',
    tooHard: 'Open more space or increase touches allowed',
    tooChaotic: 'Reduce players or simplify positioning',
  },
  'individual|positioning': {
    focus: 'Positioning & Movement',
    playerMessage: 'Find space, move with purpose',
    constraints: [
      { lever: 'Space', options: ['Narrow width', 'Reduce depth', 'Half-field'] },
      { lever: 'Positioning', options: ['Mark a player', 'Cover space', 'Stay between lines'] },
      { lever: 'Movement', options: ['Continuous motion', 'Dynamic shape', 'Set positions'] },
    ],
    watchFor: ['Body position', 'Timing of movement', 'Scanning behavior'],
    tooEasy: 'Tighten the space or add more opponents',
    tooHard: 'Expand space or reduce defensive pressure',
    tooChaotic: 'Add clear positioning instructions',
  },
  'team|possession': {
    focus: 'Team Possession',
    playerMessage: 'Keep the ball, move it quickly',
    constraints: [
      { lever: 'Spacing', options: ['8-10 yards apart', '5 yards apart', 'Spread wide'] },
      { lever: 'Passing', options: ['5-pass sequence', 'No backward pass', 'Free play'] },
      { lever: 'Area', options: ['Half-field', 'Full field', 'Zone'] },
    ],
    watchFor: ['First touch', 'Passing accuracy', 'Movement to receive'],
    tooEasy: 'Add pressure or reduce spacing',
    tooHard: 'Increase spacing or allow free play',
    tooChaotic: 'Reduce field size or add clear zones',
  },
  'team|spacing': {
    focus: 'Team Spacing & Shape',
    playerMessage: 'Stay organized, move as one',
    constraints: [
      { lever: 'Distance', options: ['2-3 yards apart', '5 yards apart', '10 yards apart'] },
      { lever: 'Shape', options: ['Maintain line', 'Diamond', 'Flexible'] },
      { lever: 'Movement', options: ['Move together', 'Individual freedom', 'Follow possession'] },
    ],
    watchFor: ['Distance between players', 'Shape integrity', 'Recovery movement'],
    tooEasy: 'Increase pressure or tighten spacing',
    tooHard: 'Loosen spacing requirements or reduce pressure',
    tooChaotic: 'Add clear positioning references',
  },
}

export default function FocusCard({ data, onNew }) {
  if (!data) return null

  const templateKey = `${data.objectiveType}|${data.outcome}`
  const template = FOCUS_DATA_TEMPLATES[templateKey] || FOCUS_DATA_TEMPLATES['individual|decision-making']

  return (
    <div className="focus-card">
      <div className="card-header">
        <div className="context-badges">
          <span className="badge">{data.context.team}</span>
          <span className="badge">{data.context.moment}</span>
        </div>
      </div>

      <section className="card-section focus-section">
        <h2 className="focus-title">{template.focus}</h2>
        <p className="player-message">"{template.playerMessage}"</p>
      </section>

      <section className="card-section constraints-section">
        <h3 className="section-title">Constraint Levers</h3>
        <div className="constraints-list">
          {template.constraints.map((constraint, idx) => (
            <div key={idx} className="constraint-item">
              <h4 className="constraint-lever">{constraint.lever}</h4>
              <div className="constraint-options">
                {constraint.options.map((option, optIdx) => (
                  <button key={optIdx} className="constraint-option">
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card-section watch-section">
        <h3 className="section-title">Watch For</h3>
        <ul className="watch-list">
          {template.watchFor.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card-section pivots-section">
        <h3 className="section-title">Quick Pivots</h3>
        <div className="pivot-item">
          <span className="pivot-label">Too Easy?</span>
          <p className="pivot-suggestion">{template.tooEasy}</p>
        </div>
        <div className="pivot-item">
          <span className="pivot-label">Too Hard?</span>
          <p className="pivot-suggestion">{template.tooHard}</p>
        </div>
        <div className="pivot-item">
          <span className="pivot-label">Chaos/Breakdown?</span>
          <p className="pivot-suggestion">{template.tooChaotic}</p>
        </div>
      </section>

      <div className="card-footer">
        <button className="new-card-button" onClick={onNew}>
          New Focus Card
        </button>
      </div>

      <p className="timestamp">Generated {data.generatedAt}</p>
    </div>
  )
}
