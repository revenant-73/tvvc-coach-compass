import React from 'react'

interface StepperProps {
  steps: string[]
  currentStep: number
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      {steps.map((_step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              index <= currentStep
                ? 'bg-teal text-midnight'
                : 'bg-divider text-text-secondary'
            }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-2 transition-all ${
                index < currentStep ? 'bg-teal' : 'bg-divider'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
