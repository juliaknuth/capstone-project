import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link, useRouteMatch, useHistory } from 'react-router-dom'
import placeholder from '../images/Placeholder.png'
import BookmarkIcon from '../components/BookmarkIcon.js'
import back from '../images/back.png'
import { loadFromStorage, saveToStorage } from '../services'
import Delete from '../components/DeleteButton.js'

export default function Stats() {
  const match = useRouteMatch()
  const history = useHistory()
  const id = match.params.gameId
  const [games, setGames] = useState(loadFromStorage('games'))

  function deleteSelf() {
    const list = games.filter((g) => g.id !== id)
    setGames(list)
    saveToStorage('games', list)
    history.push('/dashboard')
  }

  return (
    <ContentWrapper>
      <div className="navigate">
        <Link to="/loot">
          <img className="navigate__back" src={back} alt="go back"></img>
        </Link>
        <h2>Stats</h2>
        <BookmarkIcon id={id} />
      </div>
      {games.map(
        (game) =>
          game.id === id && (
            <section>
              <div className="title">
                {game.image.length === 0 ? (
                  <img className="image" src={placeholder} alt="placeholder" />
                ) : (
                  <img className="image" src={game.image} alt="game" />
                )}
                <div className="info">
                  <h3>Title:</h3>
                  <p>{game.title}</p>

                  <h3>Platform:</h3>
                  <p>{game.platform}</p>
                </div>
              </div>
              <div className="info__game">
                <div className="genre">
                  <h3>Genre: </h3>
                  <p>{game.genre}</p>
                </div>
                <div className="mode">
                  <h3>Mode:</h3>
                  <p>{game.mode}</p>
                </div>
              </div>

              <div className="description">
                {game.description.length === 0 ? null : (
                  <div>
                    <h3>Description</h3>
                    <p>{game.description}</p>
                  </div>
                )}
              </div>
            </section>
          )
      )}
      <Delete onDelete={() => deleteSelf()} />
    </ContentWrapper>
  )
}

const ContentWrapper = styled.main`
  overflow: scroll;
  height: auto;
  margin-left: 8px;
  margin-right: 8px;
  background: #f5f9f9;

  .navigate {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: auto;
  }

  h2 {
    font-weight: 400;
    font-size: 24pt;
    font-size: auto;
    margin-top: 24px;
    align-self: center;
    justify-content: center;
    margin-left: 24px;
  }

  .navigate__back {
    margin-top: 20px;
    margin-left: 16px;
    height: 46px;
    filter: invert(30%);
  }

  .info {
    grid-column: end;
    margin-left: 8px;
    margin-top: -16px;
  }

  .info__game {
    display: flex;
    margin-bottom: 8px;
    margin-left: 8px;
    margin-top: -16px;
  }

  .mode {
    margin: auto;
  }

  h3 {
    font-size: 20pt;
    font-weight: 300;
    height: 20px;
    margin-left: 16px;
  }

  p {
    font-weight: 300;
    font-size: 16pt;
    margin-left: 16px;
    margin-right: 8px;
  }

  .title {
    display: flex;
  }

  .description {
    margin-left: 8px;
    margin-top: -16px;
  }

  .image {
    height: 200px;
    width: 150px;
    margin-left: 20px;

    box-shadow: 4px 4px 4px #ccc;
  }
`
