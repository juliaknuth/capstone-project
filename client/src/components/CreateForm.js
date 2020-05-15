import React, { useState } from 'react'
import { SegmentedControl } from 'segmented-control'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'
import { v4 as uuidv4 } from 'uuid'
import { loadFromStorage, saveToStorage } from '../services'
import SubmitButton from '../components/SubmitButton'
import styled from 'styled-components/macro'

export default function CreateForm() {
  const history = useHistory()
  const [gamesList, setGamesList] = useState(loadFromStorage('games') || [])
  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: '',
    platform: '',
    genre: '',
    mode: '',
    decription: '',
  })

  function saveGame(e) {
    e.preventDefault()

    const newGamesList = [...gamesList, formData]
    setGamesList(newGamesList)
    saveToStorage('games', newGamesList)
    history.push('/')
  }
  return (
    <StyledForm onSubmit={saveGame}>
      <label for="title">
        Title:
        <input
          className="title"
          type="text"
          placeholder="e.g. Pokemon"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
          required
        />{' '}
      </label>
      <div>
        <label for="platform" classHame="platform">
          Platform:
          <Select
            name="platform"
            className="select"
            options={[
              { label: 'NES', value: 'NES' },
              { label: 'SNES', value: 'SNES' },
              { label: 'Nintendo64', value: 'Nintendo64' },
              { label: 'Game Boy', value: 'Game Boy' },
              { label: 'Game Boy color', value: 'Game Boy color' },
              { label: 'Gamecube', value: 'Gamecube' },
              { label: 'Game Boy Advance', value: 'Game Boy Advance' },
              { label: 'Nintendo DS', value: 'Nintendo DS' },
              { label: 'Wii', value: 'Wii' },
              { label: 'WiiU', value: 'WiiU' },
              { label: 'Nintendo 3DS', value: 'Nintendo 3DS' },
              { label: 'Switch', value: 'Switch' },
            ]}
            onChange={(v) => setFormData({ ...formData, platform: v.value })}
          />
        </label>
      </div>
      <div>
        <label for="genre" className="genre">
          Genre:{' '}
          <Select
            className="select"
            options={[
              { value: 'roleplay', label: 'roleplay' },
              { value: 'action', label: 'action' },
              { value: "jump'n'run", label: "jump'n'run" },
              { value: 'simulator', label: 'simulator' },
              { value: 'adventure', label: 'adventure' },
              { value: "beat'em'up", label: "beat'em'up" },
            ]}
            onChange={(v) => setFormData({ ...formData, genre: v.value })}
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
            setValue={(v) => setFormData({ ...formData, mode: v })}
            value={formData.mode}
          />
        </label>
        <label for="textarea" className="text">
          Description:
          <textarea
            name="description"
            placeholder="enter optional description here"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
        </label>
      </div>
      <SubmitButton />
    </StyledForm>
  )
}
const StyledForm = styled.form`
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 16px;

  input {
    margin-bottom: 20px;
  }

  label {
    font-size: 16px;
  }

  .title {
    font-size: 16px;
  }
  .platform {
    margin-bottom: 8px;
    font-size: 16px;
  }
  .genre {
    font-size: 16px;
  }
  .select {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .mode {
    margin-top: 16px;
  }

  .text {
    font-size: 16px;
  }

  textarea {
    font-family: sans-serif;
    padding: 8px;
    height: 100px;
    width: 100%;
    margin-bottom: 8px;
    margin-top: 8px;
  }
`
