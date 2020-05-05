import React from 'react'
import { addDecorator } from '@storybook/react'
import { MemoryRouter as Router } from 'react-router-dom'
import GlobalStyles from '../src/GlobalStyles'

addDecorator((storyFn) => (
  <Router>
    <GlobalStyles />
    {storyFn()}
  </Router>
))
