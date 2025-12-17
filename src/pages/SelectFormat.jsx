import { useNavigate } from 'react-router-dom'
import { useSession } from '../state/SessionContext'

const FORMATS = ['2v2', '3v3', '4v4', '6v6', 'Uneven numbers']

export default function SelectFormat() {
  const navigate = useNavigate()
  const { systemState, setFormat } = useSession()

  if (!systemState) {
    navigate('/')
    return null
  }

  const handleFormatSelect = (format) => {
    setFormat(format)
    navigate('/focus')
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
            What's the team format?
          </h2>
          <p className="text-text-secondary text-base">
            Choose the activity structure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md auto-rows-max">
          {FORMATS.map((format) => (
            <button
              key={format}
              onClick={() => handleFormatSelect(format)}
              className="p-lg bg-background-card hover:bg-background-divider border border-background-divider rounded-lg transition-colors text-left"
            >
              <h3 className="text-lg font-semibold text-coral-primary mb-sm">
                {format}
              </h3>
              <p className="text-text-secondary text-sm">
                Select this format
              </p>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
