import { CSSProperties, ReactNode, useMemo, useState } from 'react'
import { MistyOptionalRenderer } from '../MistyOptionalRenderer'
import { MistyContext } from '../../contexts'
import useMistyProcess from '../../hooks/useMistyProcess'

import './misty.scss'

interface MistyProps {
  width: string
  height: string
  preLoad?: boolean
  isOpen?: boolean
  children?: ReactNode
  contents?: ReactNode
  style?: CSSProperties
}

const Misty = ({
  children,
  contents,
  width,
  height,
  style,
  preLoad = false,
  isOpen: initialOpen = true,
}: MistyProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const containerStyle = {
    width: width,
    height: height,

    ...style,
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
        <MistyOptionalRenderer preLoad={preLoad} isOpen={isOpen} contents={contents}>
          {children}
        </MistyOptionalRenderer>
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

const MistyDescription = ({
  children,
  style,
  linearStart = '#e66465',
  linearEnd = '#9198e5',
}: {
  children?: ReactNode
  style?: CSSProperties
  linearStart?: string
  linearEnd?: string
}) => {
  const linearGradient = `linear-gradient(45deg, ${linearStart}, ${linearEnd})`

  return (
    <div
      className="misty-description"
      style={{
        background: linearGradient,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
Misty.MistyDescription = MistyDescription

export { Misty, MistyClose, MistyDescription }
export type { MistyProps }
