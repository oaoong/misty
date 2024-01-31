import React, { createContext } from 'react'

const initialState = {
  isOpen: true as boolean,
  setIsOpen: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
}

export const MistyContext = createContext<typeof initialState | undefined>(initialState)

if (process.env.NODE_ENV !== 'production') {
  MistyContext.displayName = 'MistyContext'
}
