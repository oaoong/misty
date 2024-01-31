import { CSSProperties, ReactNode, useMemo, useState } from 'react'
import { MistyContext } from '../../contexts'
import useMistyProcess from '../../hooks/useMistyProcess'
import './misty.scss'

export interface Props {
  width: string
  height: string
  isOpen?: boolean
  children?: ReactNode
  Contents?: ReactNode
}

const Misty = ({ children, Contents, width, height, isOpen: initialOpen = true }: Props) => {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const containerStyle = {
    width: width,
    height: height,
  }

  const contextValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen]
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

const MistyClose = ({ style }: { style?: CSSProperties }) => {
  const { close } = useMistyProcess()
  return (
    <button type="button" onClick={close} className="misty-close_button" style={style}>
      X
    </button>
  )
}
Misty.CloseButton = MistyClose

const MistyDescription = ({ children, style }: { children?: ReactNode; style?: CSSProperties }) => {
  return (
    <div className="misty-description" style={style}>
      {children}
    </div>
  )
}
Misty.MistyDescription = MistyDescription

export { Misty, MistyClose, MistyDescription }
