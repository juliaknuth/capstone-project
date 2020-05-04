import React from 'react'
import styled from 'styled-components/macro'
import gameList from './gameList.json'
// import { NavLink } from 'react-router-dom'

export default function List() {
  return (
    <ContentWrapper>
      <h2>Loot</h2>
      <ul>
        {gameList.map((gameList) => (
          <li key={gameList.id}>{gameList.title}</li>
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
  }
`
