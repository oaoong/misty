import { useContext } from 'react'
import { MistyContext } from '@/contexts'

function useMistyContext() {
  const context = useContext(MistyContext)
  if (context === undefined) {
    throw new Error('misty must be used within Controller')
  }
  return context
}

export { useMistyContext }
