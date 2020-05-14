import React from 'react'
import Button from './SubmitButton'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
}

export const SimpleSubmitButton = () => {
  return <Button>{text('Submit')}</Button>
}
