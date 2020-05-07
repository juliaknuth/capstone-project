import React from 'react'
import { action } from '@storybook/addon-actions'
import bookmark from './Bookmark.js'
import Bookmark from '../Bookmark.js'

export default {
  title: 'BookmarkImage',
  component: BookmarkImage,
}

export const Simple = () => <BookmarkImage onClick={action('onClick')} />
