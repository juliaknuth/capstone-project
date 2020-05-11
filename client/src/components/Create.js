import React from 'react'
import { SegmentedControl } from 'segmented-control'
import styled from 'styled-components/macro'

export default function Create() {
  return (
    <ContentWrapper>
      <h2>Level up!</h2>
      <p>Add new games to your library.</p>
      <form>
        <label for="title">
          Title:{' '}
          <input
            className="title"
            for="title"
            type="text"
            placeholder="e.g. Pokemon"
          />{' '}
        </label>
        <div>
          <label for="platform">
            Platform:
            <SegmentedControl
              name="platform"
              options={[
                { label: 'N64', value: 'Nintendo64' },
                { label: 'GC', value: 'Gamecube', default: true },
                { label: 'GBC', value: 'Game Boy color' },
                { label: 'Switch', value: 'Switch' },
              ]}
              style={{ color: '#3d3d3d' }}
            />
          </label>
        </div>
        <label for="genre">
          Genre:{' '}
          <input
            className="genre"
            for="genre"
            type="text"
            placeholder="e.g. action"
          />{' '}
        </label>
        <div>
          <label for="mode">
            Mode:
            <SegmentedControl
              name="mode"
              options={[
                { label: 'singleplayer', value: 'singleplayer' },
                { label: 'multiplayer', value: 'mutliplayer' },
                { label: 'both', value: 'both', default: true },
              ]}
              style={{ color: '#3d3d3d' }}
            />
          </label>
        </div>
        <button>Submit!</button>
      </form>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.main`
  overflow: scroll;
  height: auto;
  margin-left: 8px;
  margin-right: 8px;
  background: #f5f9f9;
  font-weight: 150;

  h2 {
    font-weight: 250;
    margin-left: 24px;
    margin-right: 16px;
    margin-top: 24px;
  }

  p {
    margin-left: 24px;
    margin-right: 16px;
  }

  form {
    margin-top: 32px;
    margin-left: 24px;
    margin-right: 16px;
  }

  input {
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 16px;
  }

  label {
    font-size: 16px;
  }

  .title {
    font-size: 16px;
  }

  .genre {
    font-size: 16px;
  }

  button {
    padding: 12px;
    background-color: #fd474b;
    background: radial-gradient(
      circle,
      rgba(255, 95, 98, 1) 1%,
      rgba(253, 71, 75, 1) 100%
    );
    border-radius: 36%;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    font-weight: 150;
    box-shadow: 1px 1px 1px rgba(68, 68, 68, 0.6);
    margin: auto;
    display: block;
  }
`
