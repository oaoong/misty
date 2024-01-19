import { useState } from 'react'

function useOpenState() {
  const [isOpen, setIsOpen] = useState(true)

  const close = () => {
    setIsOpen(() => false)
  }

  const open = () => {
    setIsOpen(() => true)
  }

  const toggle = () => {
    setIsOpen(prev => !prev)
  }

  return { isOpen, close, open, toggle }
}

export default useOpenState
