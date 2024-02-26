import type { MistyProps } from '../Misty'

interface MistyOptionalRendererProps extends Pick<MistyProps, 'preLoad' | 'isOpen' | 'children' | 'contents'> {}

const MistyOptionalRenderer = ({ preLoad, isOpen, children, contents }: MistyOptionalRendererProps) => {
  if (preLoad) {
    return (
      <>
        <div
          className="misty-contents"
          style={{
            visibility: `${isOpen ? 'hidden' : 'visible'}`,
          }}
        >
          {contents}
        </div>
        <div
          className="misty-body-wrapper"
          style={{
            visibility: `${isOpen ? 'visible' : 'hidden'}`,
          }}
        >
          {children}
        </div>
      </>
    )
  }

  return isOpen ? (
    <div className="misty-body-wrapper">{children}</div>
  ) : (
    <div className="misty-contents">{contents}</div>
  )
}

export default MistyOptionalRenderer
