import { ReactNode, useMemo } from 'react'
import { MistyContext } from '../../contexts'
import useOpenState from '../../hooks/useOpenState'
import { useMistyContext } from '../../hooks'

import './misty.scss'

export interface Props {
  children?: ReactNode
  Contents?: ReactNode
}

const Misty = ({ children, Contents }: Props) => {
  const openController = useOpenState()

  const contextValue = useMemo(
    () => ({
      ...openController,
    }),
    [openController]
  )

  return (
    <MistyContext.Provider value={contextValue}>
      <div className={`misty-container ${contextValue.isOpen ? 'open' : 'close'}`}>
        <div className={`misty-body ${contextValue.isOpen ? 'open' : 'close'}`}>{children}</div>
        <div className={`misty-origin ${contextValue.isOpen ? 'close' : 'open'}`}>{Contents}</div>
      </div>
    </MistyContext.Provider>
  )
}

const MistyClose = () => {
  const { close } = useMistyContext()
  return (
    <button type="button" onClick={close} className="misty-close_button">
      X
    </button>
  )
}
Misty.CloseButton = MistyClose

export { Misty, MistyClose }
