import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../components/app/app'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    screen.debug()
  })
})
