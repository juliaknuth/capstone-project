import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { loadFromStorage } from '../services'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  let [gamesList] = useState(loadFromStorage('games') || [])
  let [bookmarkedIds] = useState(loadFromStorage('bookmarks') || [])

  return (
    <ContentWrapper>
      <h2>Dashboard</h2>

      <div className="container">
        {' '}
        <p>
          Welcome to NintenLog! Here you'll find an overview about your
          Nintendo-Games in your Collection.
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
          <Link to={'./Bookmark'}>
            <span>faved.</span>
          </Link>
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

  h3 {
    font-weight: 300;
    font-size: 20pt;
  }
  .container {
    margin-left: 32px;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 14pt;
  }

  a:visited {
    color: black;
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
`
