import React from 'react'
import { action } from '@storybook/addon-actions'
import button from './src/Loot.js'

export default {
  title: 'Button',
  component: button,
}
export const simple = () => (
  <button onClick={action('clicked')}>Clicked?</button>
)
