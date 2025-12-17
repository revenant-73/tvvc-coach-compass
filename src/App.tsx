import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SessionProvider } from './state/SessionContext'
import { AppShell } from './components/AppShell'
import { Home } from './pages/Home'
import { SelectSystemState } from './pages/SelectSystemState'
import { SelectFormat } from './pages/SelectFormat'
import { SelectDesiredResult } from './pages/SelectDesiredResult'
import { SelectProblemSignals } from './pages/SelectProblemSignals'
import { Focus } from './pages/Focus'
import { Notes } from './pages/Notes'
import { ConstraintLibrary } from './pages/ConstraintLibrary'

function App() {
  return (
    <SessionProvider>
      <HashRouter>
        <AppShell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select" element={<SelectSystemState />} />
            <Route path="/format" element={<SelectFormat />} />
            <Route path="/result" element={<SelectDesiredResult />} />
            <Route path="/signals" element={<SelectProblemSignals />} />
            <Route path="/focus" element={<Focus />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/library" element={<ConstraintLibrary />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppShell>
      </HashRouter>
    </SessionProvider>
  )
}

export default App
