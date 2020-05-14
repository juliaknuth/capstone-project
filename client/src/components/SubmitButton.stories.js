import React from 'react'
import Button from './SubmitButton'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
}

export const SimpleSubmitButton = () => {
  return <Button>{text('Submit')}</Button>
}
export const SubmitButton = () => {
  return <Button onChange={action('onClick')} />
}
