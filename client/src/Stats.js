import React from 'react'
import styled from 'styled-components/macro'
import placeholder from './images/Placeholder.png'

export default function Stats() {
  return (
    <ContentWrapper>
      <h2>Stats</h2>
      <section>
        <img src={placeholder} alt="placeholder"></img>
        <div className="description">
          <h3>Title:</h3>
          <p>Placeholder</p>
          <h3>Platform:</h3>
          <p>Placeholder</p>
        </div>
      </section>
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

  .description {
    margin-top: 16px;
    margin-left: -60px;
  }
  h3 {
    font-weight: 220;
    height: 20px;
  }

  section {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 1 fr;
  }

  img {
    height: 200px;
    width: auto;
    margin-left: 20px;
    box-shadow: 4px 4px 4px #ccc;
  }
`
