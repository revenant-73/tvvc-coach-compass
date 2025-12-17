import React from 'react'

interface ChipProps {
  onClick: () => void
  selected?: boolean
  children: React.ReactNode
  removable?: boolean
}

export const Chip: React.FC<ChipProps> = ({ onClick, selected = false, children, removable = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm transition-all ${
        selected
          ? 'bg-teal text-midnight'
          : 'bg-charcoal text-text-primary hover:bg-divider'
      }`}
    >
      {children}
      {selected && removable && ' ×'}
    </button>
  )
}
