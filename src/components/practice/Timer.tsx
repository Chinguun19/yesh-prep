'use client'

import { useEffect } from 'react'
import { FaClock } from 'react-icons/fa'

interface TimerProps {
  timeLeft: number
  setTimeLeft: (time: number) => void
  onTimeUp: () => void
}

const Timer = ({ timeLeft, setTimeLeft, onTimeUp }: TimerProps) => {
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, setTimeLeft, onTimeUp])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="flex items-center space-x-2 text-gray-600">
      <FaClock className="h-5 w-5" />
      <span className="font-mono text-lg">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  )
}

export default Timer 