import { useState } from 'react'

interface Props {
  preemptiveOpen?: boolean
}

function useOpenState({ preemptiveOpen = true }: Props) {
  const [isOpen, setIsOpen] = useState(preemptiveOpen)

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
