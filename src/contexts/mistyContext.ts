import { createContext } from 'react'

const initialState = {
  isOpen: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
}

export const MistyContext = createContext<typeof initialState | undefined>(initialState)

if (process.env.NODE_ENV !== 'production') {
  MistyContext.displayName = 'MistyContext'
}
