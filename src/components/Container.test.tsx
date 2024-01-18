/**
 * @vitest-environment jsdom
 */

import React from 'react'
import Container from './Container'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

describe('Container', () => {
  it('renders the Container component', () => {
    render(<Container />)
  })
})
