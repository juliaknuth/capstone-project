import React from 'react'
import { action } from '@storybook/addon-actions'

import Bookmark from './BookmarkIcon.js'

export default {
  title: 'Bookmark',
  component: Bookmark,
}
export const simple = () => <Bookmark />
export const toggle = () => <Bookmark onClick={action('onClick')} />
