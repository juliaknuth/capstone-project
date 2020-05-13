import React, { useState, useRef } from 'react'
import { SegmentedControl } from 'segmented-control'
import styled from 'styled-components/macro'
import Select from 'react-select'
import { saveToStorage } from '../services'

export default function Create() {
  const [entry, setEntry] = useState('')
  const inputRef = useRef()

  const genreOptions = [
    { value: 'roleplay', label: 'roleplay' },
    { value: 'action', label: 'action' },
    { value: "jump'r'run", label: "jump'n'run" },
    { value: 'simulator', label: 'simulator' },
    { value: 'adventure', label: 'adventure' },
    { value: "beat'em'up", label: "beat'em'up" },
  ]

  return (
    <ContentWrapper>
      <h2>Level up!</h2>
      <p>Add new games to your library</p>
      <form onSubmit={onSubmit}>
        <label for="title">
          Title:{' '}
          <input
            className="title"
            for="title"
            type="text"
            placeholder="e.g. Pokemon"
            onChange={(event) => setEntry(event.target.value)}
            value={entry}
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
              onChange={(event) => setEntry(event.target.value)}
              value={entry}
            />
          </label>
        </div>
        <div>
          <label for="genre" className="genre">
            Genre:{' '}
            <Select
              className="select"
              options={genreOptions}
              onChange={(event) => setEntry(event.target.value)}
              value={entry}
            />
          </label>
        </div>
        <div className="mode">
          <label for="mode">
            Mode:
            <SegmentedControl
              name="mode"
              options={[
                { label: 'single', value: 'singleplayer' },
                { label: 'multi', value: 'mutliplayer' },
                { label: 'both', value: 'both', default: true },
              ]}
              style={{ color: '#3d3d3d' }}
              onChange={(event) => setEntry(event.target.value)}
              value={entry}
            />
          </label>
        </div>
        <button type="submit">Submit!</button>
      </form>
    </ContentWrapper>
  )

  function onSubmit(event) {
    event.preventDefault()
    setEntry('')
    inputRef.current.focus()
    saveToStorage('entries', entry)
  }
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
    margin-top: 24px;
    margin-left: 24px;
    margin-right: 16px;
  }

  input {
    margin-bottom: 20px;
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
  .select {
    margin-top: 8px;
  }
  .mode {
    margin-top: 16px;
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
