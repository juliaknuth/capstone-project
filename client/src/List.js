import React from 'react'
import styled from 'styled-components/macro'
import gameList from './gameList.json'

export default function List() {
  return (
    <ContentWrapper>
      <h2>My library</h2>
      <ul>
        {gameList.map((gameList) => (
          <li>{gameList.title}</li>
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
    margin: 20px;
  }

  li {
    list-style: none;
    margin-bottom: 16px;
  }
`
