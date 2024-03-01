import { useMistyContext } from '@/hooks/useMistyContext'

function useMistyProcess() {
  const { isOpen, setIsOpen } = useMistyContext()

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

export { useMistyProcess }
