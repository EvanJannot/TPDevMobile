import App from './App'
import React from 'react'
import { render } from '@testing-library/react-native'

describe('App', () => {
  test('Should render without crash', async () => {
    render(<App />)
  })
})
