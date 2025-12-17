import { useNavigate } from 'react-router-dom'
import { useSession } from '../state/SessionContext'

export default function NextStep() {
  const navigate = useNavigate()
  const { systemState, format, resetSession } = useSession()

  if (!systemState || !format) {
    navigate('/')
    return null
  }

  const handleNewSession = () => {
    resetSession()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-background-dark flex flex-col">
      <header className="bg-background-card border-b border-background-divider p-lg sticky top-0 z-10">
        <h1 className="text-2xl font-semibold text-teal-primary text-center m-0">
          Constraint Compass
        </h1>
      </header>

      <main className="flex-1 px-md md:px-lg py-lg max-w-2xl w-full mx-auto flex flex-col justify-center">
        <div className="bg-background-card rounded-lg p-lg border border-background-divider">
          <h2 className="text-2xl font-semibold text-text-primary mb-2xl">
            Next Step
          </h2>

          <div className="space-y-xl mb-2xl">
            <div>
              <p className="text-text-secondary text-sm mb-sm">System State</p>
              <p className="text-text-primary text-lg font-semibold">
                {systemState.title}
              </p>
            </div>

            <div>
              <p className="text-text-secondary text-sm mb-sm">Activity Format</p>
              <p className="text-text-primary text-lg font-semibold">
                {format}
              </p>
            </div>
          </div>

          <button
            onClick={handleNewSession}
            className="w-full py-md px-lg bg-teal-primary hover:bg-teal-deep text-background-dark font-semibold rounded-lg transition-colors"
          >
            Start New Session
          </button>
        </div>
      </main>
    </div>
  )
}
