import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface AppShellProps {
  children: React.ReactNode
  showBackButton?: boolean
}

export const AppShell: React.FC<AppShellProps> = ({ children, showBackButton = true }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-midnight text-text-primary flex flex-col">
      <header className="bg-charcoal border-b border-divider px-4 py-4 sticky top-0">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <h1 className="text-xl font-bold text-teal">Constraint Compass</h1>
          {!isHome && (
            <div className="flex gap-2">
              {showBackButton && (
                <button
                  onClick={() => navigate(-1)}
                  className="px-3 py-1 text-sm bg-divider hover:bg-teal hover:text-midnight rounded transition-all"
                >
                  ← Back
                </button>
              )}
              <button
                onClick={() => navigate('/')}
                className="px-3 py-1 text-sm bg-coral hover:bg-coral-muted text-midnight rounded transition-all font-semibold"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 p-4 max-w-2xl w-full mx-auto">
        {children}
      </main>

      <footer className="bg-charcoal border-t border-divider px-4 py-3 text-center text-text-secondary text-sm">
        <p>Joy is the training plan.</p>
      </footer>
    </div>
  )
}
