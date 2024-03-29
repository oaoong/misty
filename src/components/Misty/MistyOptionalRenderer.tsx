import type { MistyProps } from '@/components'

interface MistyOptionalRendererProps extends Pick<MistyProps, 'preLoad' | 'isOpen' | 'children' | 'contents'> {}

const MistyOptionalRenderer = ({ preLoad, isOpen, children, contents }: MistyOptionalRendererProps) => {
  if (preLoad) {
    return (
      <>
        <div className={`misty-contents ${isOpen ? '' : 'misty-contents--open'}`} data-cy={'misty-contents'}>
          {contents}
        </div>
        <div
          className={`misty-body-wrapper ${isOpen ? 'misty-body-wrapper--open' : ''}`}
          data-cy={'misty-body-wrapper'}
        >
          {children}
        </div>
      </>
    )
  }

  return isOpen ? (
    <div className={`misty-body-wrapper ${isOpen ? 'misty-body-wrapper--open' : ''}`} data-cy={'misty-body-wrapper'}>
      {children}
    </div>
  ) : (
    <div className={`misty-contents ${isOpen ? '' : 'misty-contents--open'}`} data-cy={'misty-contents'}>
      {contents}
    </div>
  )
}

export { MistyOptionalRenderer }
