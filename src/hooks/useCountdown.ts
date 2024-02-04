import { useState, useEffect } from 'react'

export function useCountdown(initialCountdown: number, isOpen: boolean = true) {
  const [countdown, setCountdown] = useState(initialCountdown)

  useEffect(() => {
    let intervalId: number

    if (isOpen) {
      setCountdown(initialCountdown) // Reset countdown when isOpen changes
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) =>
          prevCountdown > 0 ? prevCountdown - 1 : 0,
        )
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isOpen, initialCountdown])

  return countdown
}
