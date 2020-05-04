import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import gameList from './gameList.json'

export default function List({ showGameDetails }) {
  return (
    <ContentWrapper>
      <h2>Loot</h2>
      <ul>
        {gameList.map((gameList) => (
          <li key={gameList.id}>
            {gameList.title.length > 28
              ? gameList.title.substring(0, 28) + '...'
              : gameList.title}
            &nbsp;
            <Link to={'./stats/' + gameList.id}>...</Link>
          </li>
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

  h2 {
    margin-top: 36px;
    margin-bottom: 32px;
    margin-left: 32px;
    font-weight: 250;
  }

  li {
    list-style: none;
    margin-bottom: 20px;
    margin-left: -8px;
    font-weight: 150;
    text-overflow: ellipsis;
  }

  button {
    background: #f5f9f9;
    border: none;
    display: inline-block;
  }
`
