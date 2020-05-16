import React, { useState } from 'react'
import styled from 'styled-components/macro'
import heart from '../images/herz.png'
import { loadFromStorage, saveToStorage } from '../services'

export default function Bookmark({ id }) {
  const [bookmarkedIds, setBookmarkedIds] = useState(
    loadFromStorage('bookmarks') || []
  )
  const [isActive, setActive] = useState(bookmarkedIds.includes(id))

  function toggleBookmark(id) {
    let newBookmarks = bookmarkedIds

    if (isActive) {
      const index = newBookmarks.indexOf(id)
      newBookmarks.splice(index, 1)
    } else {
      newBookmarks.push(id)
    }

    setBookmarkedIds(newBookmarks)
    setActive(bookmarkedIds.includes(id))
    saveToStorage('bookmarks', bookmarkedIds)
  }

  return (
    <BookmarkImage
      onClick={() => toggleBookmark(id)}
      isBookmarked={isActive}
      src={heart}
      alt="bookmark"
    />
  )
}

const BookmarkImage = styled.img`
  margin-top: 20px;
  height: 46px;
  justify-content: right;
  margin-left: 58px;
  filter: ${({ isBookmarked }) =>
    isBookmarked ? 'invert(55%) sepia(80%) saturate(4161%)' : 'invert(30%)'};
`
