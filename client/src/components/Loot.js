import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import gameList from '../gameList.json'
import LootListEntry from './LootListEntry'

export default function List() {
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

  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 36px;
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
