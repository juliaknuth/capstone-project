import React from 'react'
import styled from 'styled-components/macro'
import placeholder from './images/Placeholder.png'
import star from './images/star.svg'
import back from './images/left-chevron.svg'

export default function Stats() {
  return (
    <ContentWrapper>
      <div className="navigate">
        <img className="navigate__back" src={back} alt="go back"></img>
        <h2>Stats</h2>
        <img className="navigate__bookmark" src={star} alt="bookmark"></img>
      </div>

      <section>
        <img className="placeholder" src={placeholder} alt="placeholder"></img>
        <div className="description">
          <h3>Title:</h3>
          <p>Placeholder</p>
          <h3>Platform:</h3>
          <p>Placeholder</p>
        </div>
        <div className="info">
          <h3>Genre:</h3>
          <p>Placeholder</p>
          <h3>Mode:</h3>
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

  .navigate {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    widht: auto;
  }

  h2 {
    font-weight: 250;
    font-size: auto;
    margin-top: 24px;
    align-self: center;
    justify-content: center;
    margin-left: 36px;
  }

  .navigate__back {
    margin-top: 20px;
    margin-left: 16px;
    height: 32px;
    filter: invert(30%);
  }

  .navigate__bookmark {
    margin-top: 20px;
    height: 32px;
    justify-content: right;
    margin-left: 58px;
    filter: invert(30%);
  }

  .description {
    margin-top: 16px;
    margin-left: -60px;
  }

  .info {
    margin-top: 8px;
    margin-left: 12px;
  }
  h3 {
    font-weight: 220;
    height: 20px;
    margin-left: 16px;
  }

  p {
    font-weight: 200;
    margin-left: 16px;
  }

  section {
    margin-top: 16px;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 2fr auto auto;
  }

  .placeholder {
    height: 200px;
    width: auto;
    margin-left: 20px;
    box-shadow: 4px 4px 4px #ccc;
  }
`
