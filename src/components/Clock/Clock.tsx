import { useEffect, useState } from 'react'
import './Clock.scss'

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return <h2 className="clock">{time}</h2>
}
