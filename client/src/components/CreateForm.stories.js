import React from 'react'
import { action } from '@storybook/addon-actions'
import Form from './CreateForm.js'

export default {
  title: 'Form',
  component: input,
}
export const simple = () => <input />
export const toggle = () => <input onChange={action('changed')} />
