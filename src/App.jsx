import { useState, useEffect } from 'react'
import ContextSelector from './components/ContextSelector'
import ObjectiveTypeSelector from './components/ObjectiveTypeSelector'
import OutcomeSelector from './components/OutcomeSelector'
import ProblemSignalsSelector from './components/ProblemSignalsSelector'
import FocusCard from './components/FocusCard'
import './App.css'

const STORAGE_KEY = 'tvvc-compass-history'

export default function App() {
  const [step, setStep] = useState(0)
  const [context, setContext] = useState(null)
  const [objectiveType, setObjectiveType] = useState(null)
  const [outcome, setOutcome] = useState(null)
  const [problemSignals, setProblemSignals] = useState([])
  const [focusData, setFocusData] = useState(null)
  const [history, setHistory] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setHistory(JSON.parse(saved))
      } catch (e) {
        console.warn('Failed to load history from storage')
      }
    }
  }, [])

  const handleContextSelect = (team, moment) => {
    setContext({ team, moment })
    setStep(1)
  }

  const handleObjectiveTypeSelect = (type) => {
    setObjectiveType(type)
    setStep(2)
  }

  const handleOutcomeSelect = (selectedOutcome) => {
    setOutcome(selectedOutcome)
    setStep(3)
  }

  const handleProblemSignalsSelect = (signals) => {
    setProblemSignals(signals)
    generateFocusCard(signals)
    setStep(4)
  }

  const generateFocusCard = (signals) => {
    const newCard = {
      context,
      objectiveType,
      outcome,
      signals,
      generatedAt: new Date().toLocaleTimeString(),
      timestamp: Date.now(),
    }
    setFocusData(newCard)
    
    const updatedHistory = [newCard, ...history].slice(0, 50)
    setHistory(updatedHistory)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory))
  }

  const handleReset = () => {
    setStep(0)
    setContext(null)
    setObjectiveType(null)
    setOutcome(null)
    setProblemSignals([])
    setFocusData(null)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Constraint Compass</h1>
      </header>

      <main className="app-main">
        {step === 0 && <ContextSelector onSelect={handleContextSelect} />}
        {step === 1 && <ObjectiveTypeSelector onSelect={handleObjectiveTypeSelect} />}
        {step === 2 && <OutcomeSelector objectiveType={objectiveType} onSelect={handleOutcomeSelect} />}
        {step === 3 && <ProblemSignalsSelector onSelect={handleProblemSignalsSelect} />}
        {step === 4 && <FocusCard data={focusData} onNew={handleReset} />}
      </main>
    </div>
  )
}
