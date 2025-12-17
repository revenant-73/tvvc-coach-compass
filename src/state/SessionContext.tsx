import React, { createContext, useContext, useState, ReactNode } from 'react'
import { SystemState, FocusCardData, SessionContextType } from '../types'

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export const SessionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [systemState, setSystemState] = useState<SystemState | null>(null)
  const [format, setFormat] = useState<string | null>(null)
  const [desiredResult, setDesiredResult] = useState<string | null>(null)
  const [problemSignals, setProblemSignals] = useState<string[]>([])
  const [focusCard, setFocusCard] = useState<FocusCardData | null>(null)

  const reset = () => {
    setSystemState(null)
    setFormat(null)
    setDesiredResult(null)
    setProblemSignals([])
    setFocusCard(null)
  }

  return (
    <SessionContext.Provider
      value={{
        systemState,
        format,
        desiredResult,
        problemSignals,
        focusCard,
        setSystemState,
        setFormat,
        setDesiredResult,
        setProblemSignals,
        setFocusCard,
        reset
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider')
  }
  return context
}
