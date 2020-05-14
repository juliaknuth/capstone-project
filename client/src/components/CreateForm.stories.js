import React from 'react'
import { action } from '@storybook/addon-actions'
import input from './CreateForm.js'

export default {
  title: 'input',
  component: input,
}
export const simple = () => <input />
export const onChange = () => <input onChange={action('changed')} />
