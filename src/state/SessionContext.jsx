import { createContext, useState, useContext } from 'react'

const SessionContext = createContext()

export function SessionProvider({ children }) {
  const [systemState, setSystemState] = useState(null)
  const [format, setFormat] = useState(null)

  const resetSession = () => {
    setSystemState(null)
    setFormat(null)
  }

  const value = {
    systemState,
    setSystemState,
    format,
    setFormat,
    resetSession,
  }

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const context = useContext(SessionContext)
  if (!context) {
    throw new Error('useSession must be used within SessionProvider')
  }
  return context
}
