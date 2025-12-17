import React, { useState, useEffect } from 'react'

interface TimerProps {
  initialSeconds?: number
  onComplete?: () => void
}

export const Timer: React.FC<TimerProps> = ({ initialSeconds = 240, onComplete }) => {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning || seconds <= 0) return

    const interval = setInterval(() => {
      setSeconds(s => {
        if (s <= 1) {
          setIsRunning(false)
          onComplete?.()
          return 0
        }
        return s - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, onComplete])

  const minutes = Math.floor(seconds / 60)
  const displaySeconds = seconds % 60

  const toggleTimer = () => setIsRunning(!isRunning)
  const resetTimer = () => {
    setSeconds(initialSeconds)
    setIsRunning(false)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-5xl font-bold text-teal">
        {String(minutes).padStart(2, '0')}:{String(displaySeconds).padStart(2, '0')}
      </div>
      <div className="flex gap-2">
        <button
          onClick={toggleTimer}
          className="px-4 py-2 bg-teal text-midnight rounded-lg font-semibold hover:bg-teal-dark"
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-charcoal text-text-primary border border-divider rounded-lg hover:border-teal"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
