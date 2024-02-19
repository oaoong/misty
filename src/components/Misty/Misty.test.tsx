import { Misty } from './Misty'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('components/Misty', () => {
  it('should render Misty component', () => {
    const { container } = render(<Misty width="100px" height="100px" />)
    expect(container.querySelector('.misty-container')).toBeTruthy()
  })
})
