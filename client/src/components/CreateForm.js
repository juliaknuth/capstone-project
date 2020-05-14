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
            setValue={(v) => setFormData({ ...formData, platform: v })}
            value={formData.platform}
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
            value={formData.genre}
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

  .genre {
    font-size: 16px;
  }
  .select {
    margin-top: 8px;
  }
  .mode {
    margin-top: 16px;
  }
`
