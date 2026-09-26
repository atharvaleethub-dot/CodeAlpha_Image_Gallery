import { useEffect, useState } from 'react'

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved !== null ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage may be full or blocked, so we ignore the error
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage