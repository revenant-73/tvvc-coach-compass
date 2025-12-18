import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useSession } from '../state/SessionContext'
import { SavedNote } from '../types'
import { desiredResults } from '../data/desiredResults'
import { problemSignals } from '../data/problemSignals'

export const Notes: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { focusCard } = useSession()
  const [notes, setNotes] = useState<SavedNote[]>([])
  const [reflection, setReflection] = useState('')

  const isNew = searchParams.get('new') === 'true'

  useEffect(() => {
    const saved = localStorage.getItem('constraint-compass-notes')
    if (saved) {
      setNotes(JSON.parse(saved))
    }
  }, [])

  const handleSave = () => {
    if (!focusCard || !reflection.trim()) {
      alert('Please write a reflection.')
      return
    }

    const newNote: SavedNote = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      systemState: focusCard.systemState,
      format: focusCard.format,
      desiredResult: focusCard.desiredResult,
      problemSignals: focusCard.problemSignals,
      constraintsUsed: focusCard.constraints.map(c => c.id),
      reflection
    }

    const updated = [newNote, ...notes]
    setNotes(updated)
    localStorage.setItem('constraint-compass-notes', JSON.stringify(updated))

    navigate('/')
  }

  const handleDelete = (id: string) => {
    const updated = notes.filter(n => n.id !== id)
    setNotes(updated)
    localStorage.setItem('constraint-compass-notes', JSON.stringify(updated))
  }

  if (isNew && focusCard) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-teal">Save This Practice Note</h2>

        <div className="bg-charcoal rounded-lg p-4 border border-divider">
          <p className="text-text-secondary text-sm mb-2">System State</p>
          <p className="font-semibold text-text-primary capitalize">{focusCard.systemState}</p>
        </div>

        <div className="bg-charcoal rounded-lg p-4 border border-divider">
          <label className="block text-text-secondary text-sm mb-2">Quick Reflection</label>
          <textarea
            value={reflection}
            onChange={e => setReflection(e.target.value)}
            placeholder="What did you notice? What worked? What's next?"
            className="w-full bg-midnight text-text-primary rounded p-2 border border-divider focus:border-teal focus:outline-none"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <button
            onClick={handleSave}
            className="w-full px-4 py-3 bg-teal text-midnight rounded-lg font-semibold hover:bg-teal-dark"
          >
            Save Note
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full px-4 py-3 bg-charcoal text-text-primary border border-divider rounded-lg hover:border-teal"
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-teal mb-6">Saved Notes</h2>

      {notes.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-text-secondary mb-4">No saved notes yet.</p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-teal text-midnight rounded-lg font-semibold hover:bg-teal-dark"
          >
            Start New Focus
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {notes.map(note => {
            const desiredResult = desiredResults.find(dr => dr.id === note.desiredResult)
            const signals = note.problemSignals
              .map(id => problemSignals.find(ps => ps.id === id)?.label)
              .filter(Boolean)

            return (
              <div key={note.id} className="bg-charcoal rounded-lg p-4 border border-divider">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-text-secondary text-sm">
                      {new Date(note.timestamp).toLocaleDateString()} at{' '}
                      {new Date(note.timestamp).toLocaleTimeString()}
                    </p>
                    <p className="font-semibold text-teal">{desiredResult?.label}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="text-coral hover:text-coral-muted text-sm font-semibold"
                  >
                    Delete
                  </button>
                </div>

                <div className="text-text-secondary text-sm space-y-1 mb-2">
                  <p>
                    <span className="text-text-primary">Format:</span> {note.format}
                  </p>
                  {signals.length > 0 && (
                    <p>
                      <span className="text-text-primary">Signals:</span> {signals.join(', ')}
                    </p>
                  )}
                </div>

                <p className="text-text-primary text-sm italic">{note.reflection}</p>
              </div>
            )
          })}
        </div>
      )}

      <button
        onClick={() => navigate('/')}
        className="w-full px-4 py-3 bg-charcoal text-text-primary border border-divider rounded-lg hover:border-teal"
      >
        Back Home
      </button>
    </div>
  )
}
