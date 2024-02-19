import useMistyContext from './useMistyContext'

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

export default useMistyProcess
