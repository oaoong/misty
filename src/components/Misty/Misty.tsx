import { CSSProperties, ReactNode, useMemo, useState } from 'react'

import { MistyOptionalRenderer } from '@/components'
import { MistyContext } from '@/contexts'
import { useMistyProcess } from '@/hooks'

import './misty.scss'

interface MistyProps {
  children: ReactNode
  contents: ReactNode
  preLoad?: boolean
  isOpen?: boolean
  style?: CSSProperties
  width?: string
  height?: string
}

const Misty = ({
  children,
  contents,
  style,
  width = '100%',
  height = '100%',
  preLoad = false,
  isOpen: initialOpen = true,
}: MistyProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const contextValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen]
  )

  const containerStyle = {
    width,
    height,
    ...style,
  }

  return (
    <MistyContext.Provider value={contextValue}>
      <div className={'misty-container'} style={containerStyle}>
        <MistyOptionalRenderer preLoad={preLoad} isOpen={isOpen} contents={contents}>
          {children}
        </MistyOptionalRenderer>
      </div>
    </MistyContext.Provider>
  )
}

const MistyBody = ({ children, style }: { children?: ReactNode; style?: CSSProperties }) => {
  return (
    <div
      className="misty-body"
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  )
}
Misty.Body = MistyBody

const MistyClose = ({ style, position = 'right' }: { style?: CSSProperties; position?: 'right' | 'left' }) => {
  const { close } = useMistyProcess()

  const positionMargin = position === 'right' ? 'left' : 'right'
  const closeButtonStyle = {
    [`margin-${positionMargin}`]: 'auto',
    ...style,
  }

  return (
    <button type="button" onClick={close} className="misty-close_button" style={closeButtonStyle}>
      X
    </button>
  )
}
Misty.CloseButton = MistyClose

const MistyDescription = ({ children, style }: { children?: ReactNode; style?: CSSProperties }) => {
  return (
    <div
      className="misty-description"
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  )
}
Misty.MistyDescription = MistyDescription

export { Misty, MistyBody, MistyClose, MistyDescription }
export type { MistyProps }
