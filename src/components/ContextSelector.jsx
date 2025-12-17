import './ContextSelector.css'

const TEAMS = ['U14', 'U16', 'U18', 'Mixed']

const MOMENTS = [
  { label: 'Practice Start', value: 'start' },
  { label: 'Mid-Practice', value: 'mid' },
  { label: 'Practice End', value: 'end' },
  { label: 'We\'re Stuck', value: 'stuck' },
  { label: 'Practice Flat', value: 'flat' },
  { label: 'Chaos/Energy', value: 'chaos' },
]

export default function ContextSelector({ onSelect }) {
  const handleTeamMomentSelect = (team, moment) => {
    onSelect(team, moment)
  }

  return (
    <div className="context-selector">
      <div className="selector-header">
        <h2>Select Context</h2>
        <p className="selector-subtitle">Team & practice moment</p>
      </div>

      <div className="context-grid">
        {TEAMS.map((team) => (
          <div key={team} className="team-section">
            <h3 className="team-label">{team}</h3>
            <div className="moments-grid">
              {MOMENTS.map((moment) => (
                <button
                  key={moment.value}
                  className="moment-button"
                  onClick={() => handleTeamMomentSelect(team, moment.value)}
                >
                  {moment.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
