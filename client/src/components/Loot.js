import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import LootListEntry from './LootListEntry'
import { loadFromStorage } from '../services'

export default function List() {
  const [gamesList] = useState(loadFromStorage('games') || [])
  return (
    <ContentWrapper>
      <div className="container">
        <h2>Loot</h2>
        <Link to={'./'}>
          <p className="container__all">all</p>
        </Link>
        <Link to={'./bookmark'}>
          <p className="container__bookmark">favs</p>
        </Link>
      </div>
      <ul>
        {gamesList.map((game) => (
          <LootListEntry id={game.id} title={game.title} />
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
    justify-content: space-between;
    margin-top: 12px;
    margin-left: 32px;
  }

  h2 {
    font-weight: 250;
  }
  .container__all {
    display: flex;
    margin-left: 200px;
  }
  .container__bookmark {
    margin-right: 16px;
  }
  a {
    margin-top: 16px;
    text-decoration: none;
    font-weight: 150;
  }
  a:visited {
    color: black;
  }
`
