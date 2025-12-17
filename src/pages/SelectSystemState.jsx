import { useNavigate } from 'react-router-dom'
import { useSession } from '../state/SessionContext'
import { systemStates } from '../data/systemStates'

export default function SelectSystemState() {
  const navigate = useNavigate()
  const { setSystemState } = useSession()

  const handleStateSelect = (state) => {
    setSystemState(state)
    navigate('/format')
  }

  return (
    <div className="min-h-screen bg-background-dark flex flex-col">
      <header className="bg-background-card border-b border-background-divider p-lg sticky top-0 z-10">
        <h1 className="text-2xl font-semibold text-teal-primary text-center m-0">
          Constraint Compass
        </h1>
      </header>

      <main className="flex-1 px-md md:px-lg py-lg max-w-2xl w-full mx-auto">
        <div className="mb-2xl">
          <h2 className="text-2xl font-semibold text-text-primary mb-md">
            What's the system state?
          </h2>
          <p className="text-text-secondary text-base">
            You're not choosing a drill. You're choosing what to notice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md auto-rows-max">
          {systemStates.map((state) => (
            <button
              key={state.id}
              onClick={() => handleStateSelect(state)}
              className="p-lg bg-background-card hover:bg-background-divider border border-background-divider rounded-lg transition-colors text-left"
            >
              <h3 className="text-lg font-semibold text-teal-primary mb-sm">
                {state.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {state.hint}
              </p>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
