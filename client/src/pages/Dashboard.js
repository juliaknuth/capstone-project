import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { loadFromStorage } from '../services'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  let [gamesList] = useState(loadFromStorage('games') || [])
  let [bookmarkedIds] = useState(loadFromStorage('bookmarks') || [])

  const randomGame = gamesList[Math.floor(Math.random() * gamesList.length)]

  return (
    <ContentWrapper>
      <h2>Dashboard</h2>
      <div className="container">
        {' '}
        <p>
          Welcome to <span className="logo">NintenLog 🎮</span>! Save your
          physical copies of your Nintendo Games in this app.
        </p>
        <h3>Statistics</h3>
        <div className="count__list">
          <span className="statistic">{gamesList.length}</span> Games in your{' '}
          <Link to={'./'}>
            <span>Collection.</span>
          </Link>
        </div>
        <div className="count__bookmark">
          <span className="statistic">{bookmarkedIds.length}</span> Games{' '}
          <Link to={'./bookmark'}>
            <span>faved.</span>
          </Link>
        </div>
        <h3>Bored? Turn your console on to play this:</h3>
        <div className="button__random">
          <button>
            <Link to={'./stats/' + randomGame.id}>{randomGame.title}</Link>
          </button>
        </div>
      </div>
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
    font-weight: 400;
    font-size: 24pt;
    margin-left: 32px;
    margin-bottom: -8px;
  }
  .logo {
    font-weight: 400;
    color: #fd474b;
    font-size: 14pt;
  }
  h3 {
    font-weight: 300;
    font-size: 18pt;
    margin-right: 32px;
  }
  .container {
    margin-left: 32px;
    font-weight: 300;
  }

  .statistic {
    font-size: 44pt;
    margin-top: -12px;
    color: #fd474b;
  }
  .count__list {
    margin-top: -24px;
    text-align: center;
  }

  .button__random {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    padding: 8px;
    background-color: white;
    font-family: 'Rajdhani', sans-serif;
    border-radius: 3%;
    color: #52525;
    text-decoration: none;
    border: 1px solid grey;
    margin-top: -12px;
    margin-right: 26px;
  }
  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 14pt;
  }
  a:visited {
    color: black;
  }
`
