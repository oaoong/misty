import { ReactNode, useMemo } from 'react'
import { MistyContext } from '../../contexts'
import useOpenState from '../../hooks/useOpenState'
import { useMistyContext } from '../../hooks'

import './misty.scss'

export interface Props {
  children?: ReactNode
  Contents?: ReactNode
  width: string
  height: string
}

const Misty = ({ children, Contents, width, height }: Props) => {
  const openController = useOpenState()

  const containerStyle = {
    width: width,
    height: height,
  }

  const contextValue = useMemo(
    () => ({
      ...openController,
    }),
    [openController]
  )

  return (
    <MistyContext.Provider value={contextValue}>
      <div className={`misty-container ${contextValue.isOpen ? 'open' : 'close'}`} style={containerStyle}>
        {contextValue.isOpen ? (
          <div className="misty-body">{children}</div>
        ) : (
          <div className="misty-contents">{Contents}</div>
        )}
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
