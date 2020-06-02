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
        <Link to={'./loot'}>
          <p className="container__all">all</p>
        </Link>
        <Link to={'./Bookmark'}>
          <p className="container__bookmark">favs</p>
        </Link>
      </div>
      <Filter onSearchFilter={setFilter} value={filter} />
      {bookmarkedIds.length === 0 ? (
        <p className="nobookmarks">
          No Games faved yet. Show some love to your Games by touching the heart
          icon on the stats page{' '}
          <span role="img" aria-label="heart">
            {' '}
            ❤️
          </span>
        </p>
      ) : (
        <ul>
          {bookmarkedGames
            .sort((gameA, gameB) => {
              if (gameA.title < gameB.title) {
                return -1
              }
              if (gameB.title < gameA.title) {
                return 1
              }
              return 0
            })
            .filter((game) => game.title.toLowerCase().includes(filter))
            .map((bookmarks) => (
              <LootListEntry id={bookmarks.id} title={bookmarks.title} />
            ))}
        </ul>
      )}
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
    font-size: 20pt;
  }
  .container__bookmark {
    margin-right: 16px;
    font-size: 20pt;
    color: #fd474b;
  }
  a {
    margin-top: 12px;
    text-decoration: none;
    font-weight: 150;
  }
  a:visited {
    color: black;
  }

  .nobookmarks {
    margin-left: 32px;
    margin-right: 32px;
    font-weight: 300;
    font-size: 14pt;
  }
`
