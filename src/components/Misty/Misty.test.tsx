import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import { Misty } from '@/components'

describe('components/Misty', () => {
  it('should render Misty component', () => {
    const { container } = render(
      <Misty width="100px" height="100px" contents={<div>real contents</div>}>
        <div>hi</div>
      </Misty>
    )
    expect(container.querySelector('.misty-container')).toBeTruthy()
  })
})
