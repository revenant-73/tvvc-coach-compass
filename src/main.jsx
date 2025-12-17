import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SessionProvider } from './state/SessionContext'
import SelectSystemState from './pages/SelectSystemState'
import SelectFormat from './pages/SelectFormat'
import NextStep from './pages/NextStep'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SelectSystemState />} />
      <Route path="/format" element={<SelectFormat />} />
      <Route path="/focus" element={<NextStep />} />
    </Routes>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SessionProvider>
      <Router basename="/tvvc-coach-compass/">
        <App />
      </Router>
    </SessionProvider>
  </React.StrictMode>,
)
