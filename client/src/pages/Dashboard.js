import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { loadFromStorage } from '../services'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'

export default function Dashboard() {
  let [gamesList] = useState(loadFromStorage('games') || [])
  let [bookmarkedIds] = useState(loadFromStorage('bookmarks') || [])

  const randomGame = gamesList[Math.floor(Math.random() * gamesList.length)]

  return (
    <ContentWrapper>
      <h2>Dashboard</h2>
      <p>
        Welcome to <span className="logo">NintenLog 🎮</span>! Save your
        physical copies of your Nintendo Games in this app.
      </p>{' '}
      {gamesList.length === 0 ? (
        <div className="noItems">
          <p className="noItems__text">
            Looks like you have no Games saved yet. Get startet and add some of
            your treasures to your Lootlist here:{' '}
          </p>
          <Link to={'./add'}>
            <button className="noItems__button">Level Up!</button>
          </Link>
        </div>
      ) : (
        <div className="container">
          <h3>Statistics</h3>
          <div className="count__list">
            <span className="statistic">
              <CountUp end={gamesList.length} />
            </span>{' '}
            Games in your{' '}
            <Link to={'./'}>
              <span>Collection.</span>
            </Link>
          </div>
          <div className="count__bookmark">
            <span className="statistic">
              <CountUp end={bookmarkedIds.length} />
            </span>{' '}
            Games{' '}
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

  h2 {
    font-weight: 400;
    font-size: 24pt;
    margin-left: 32px;
    margin-bottom: -8px;
  }
  p {
    margin-left: 32px;
    font-weight: 300;
    margin-right: 32px;
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
    border: 1px solid #adaaaa;
    margin-top: -12px;
    margin-right: 26px;
  }

  .noItems {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .noItems__text {
    font-size: 14pt;
    margin-right: 32px;
    margin-top: 32px;
  }

  .noItems__button {
    font-size: 22pt;
    color: #fd474b;
    margin-top: 20px;
  }
  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 14pt;
    color: black;
  }
  a:visited {
    color: black;
  }
`
