import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-6 max-w-md">
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-teal mb-2">Constraint Compass</h2>
        <p className="text-text-secondary">
          A mobile-first coaching decision tool for ecological volleyball practice
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => navigate('/select')}
          className="w-full px-6 py-4 bg-teal text-midnight rounded-lg font-semibold hover:bg-teal-dark transition-all text-lg"
        >
          Start New Focus
        </button>

        <button
          onClick={() => navigate('/notes')}
          className="w-full px-6 py-4 bg-charcoal text-text-primary border-2 border-divider rounded-lg font-semibold hover:border-teal transition-all"
        >
          View Saved Notes
        </button>

        <button
          onClick={() => navigate('/library')}
          className="w-full px-6 py-4 bg-charcoal text-text-primary border-2 border-divider rounded-lg font-semibold hover:border-teal transition-all"
        >
          Browse Constraint Library
        </button>
      </div>

      <div className="bg-charcoal rounded-lg p-6 border border-divider">
        <h3 className="text-lg font-bold text-teal mb-3">How It Works</h3>
        <ol className="text-text-secondary text-sm space-y-2">
          <li>
            <span className="text-teal font-semibold">1. Notice</span> the system state
          </li>
          <li>
            <span className="text-teal font-semibold">2. Select</span> a desired team outcome
          </li>
          <li>
            <span className="text-teal font-semibold">3. Get</span> constraint suggestions
          </li>
          <li>
            <span className="text-teal font-semibold">4. Commit</span> for 10 minutes
          </li>
          <li>
            <span className="text-teal font-semibold">5. Reflect</span> and save
          </li>
        </ol>
      </div>
    </div>
  )
}
