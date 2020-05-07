import React from 'react'
import styled from 'styled-components/macro'

import gameList from '../gameList.json'
import LootListEntry from './LootListEntry'

export default function List() {
  return (
    <ContentWrapper>
      <h2>Loot</h2>

      <ul>
        {gameList.map((game) => (
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

  h2 {
    margin-top: 36px;
    margin-bottom: 32px;
    margin-left: 32px;
    font-weight: 250;
  }

  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 20px;
    margin-left: -8px;
    font-weight: 150;
    text-overflow: ellipsis;
  }

  button {
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 16px;
    background: rgb(131, 131, 131);
    background: radial-gradient(
      circle,
      rgba(131, 131, 131, 1) 1%,
      rgba(125, 125, 125, 1) 100%
    );
    border-radius: 20%;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12pt;
    box-shadow: 1px 1px 1px rgba(68, 68, 68, 0.6);
  }
`
