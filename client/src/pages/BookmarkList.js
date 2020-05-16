import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { loadFromStorage } from '../services'
import LootListEntry from '../components/LootListEntry'
import Filter from '../components/Filter'

export default function Bookmark() {
  let [bookmarkedIds] = useState(loadFromStorage('bookmarks') || [])
  let [gamesList] = useState(loadFromStorage('games') || [])
  const [filter, setFilter] = useState('')

  let bookmarkedGames = gamesList.filter((bookmarks) =>
    bookmarkedIds.includes(bookmarks.id)
  )

  return (
    <ContentWrapper>
      <div className="container">
        <h2>Loot</h2>
        <Link to={'./'}>
          <p className="container__all">all</p>
        </Link>
        <Link to={'./Bookmark'}>
          <p className="container__bookmark">favs</p>
        </Link>
      </div>
      <Filter onSearchFilter={setFilter} value={filter} />
      <ul>
        {bookmarkedGames
          .filter((bookmarks) => bookmarks.title.toLowerCase().includes(filter))
          .map((bookmarks) => (
            <LootListEntry id={bookmarks.id} title={bookmarks.title} />
          ))}
      </ul>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.main`
  overflow: scroll;
  height: auto;
  margin-left: 8px;
  margin-right: 8px;
  background: #f5f9f9;

  .container {
    display: flex;
    justify-content: space-around;
    margin-left: 32px;
    margin-bottom: -20px;
  }

  h2 {
    font-weight: 400;
    font-size: 24pt;
  }
  .container__all {
    margin-left: 180px;
    font-size: 16pt;
  }
  .container__bookmark {
    margin-right: 16px;
    font-size: 16pt;
  }
  a {
    margin-top: 12px;
    text-decoration: none;
    font-weight: 150;
  }
  a:visited {
    color: black;
  }
`
