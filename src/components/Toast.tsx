import React, { useState, useEffect } from 'react'

interface ToastProps {
  message: string
  duration?: number
  onClose?: () => void
}

export const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-teal text-midnight px-4 py-3 rounded-lg shadow-lg">
      {message}
    </div>
  )
}
