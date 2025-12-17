import React from 'react'

interface CardButtonProps {
  onClick: () => void
  selected?: boolean
  children: React.ReactNode
}

export const CardButton: React.FC<CardButtonProps> = ({ onClick, selected = false, children }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-lg border-2 transition-all ${
        selected
          ? 'border-teal bg-teal-dark text-text-primary'
          : 'border-divider bg-charcoal text-text-primary hover:border-teal'
      }`}
    >
      {children}
    </button>
  )
}
