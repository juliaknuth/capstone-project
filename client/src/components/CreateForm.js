import React, { useState } from 'react'
import { SegmentedControl } from 'segmented-control'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'
import { v4 as uuidv4 } from 'uuid'
import { loadFromStorage, saveToStorage } from '../services'
import SubmitButton from '../components/SubmitButton'
import ImageUploader from '../components/ImageUploader'
import styled from 'styled-components/macro'

export default function CreateForm() {
  const history = useHistory()

  const [gamesList, setGamesList] = useState(loadFromStorage('games') || [])
  const [formData, setFormData] = useState({
    id: uuidv4(),
    image: '',
    title: '',
    platform: '',
    genre: '',
    mode: '',
    description: '',
  })

  function saveGame(e) {
    e.preventDefault()

    const newGamesList = [...gamesList, formData]
    setGamesList(newGamesList)
    saveToStorage('games', newGamesList)
    history.push('/stats/' + formData.id)
  }

  return (
    <StyledForm onSubmit={saveGame}>
      {formData.image.length === 0 ? (
        <ImageUploader setFormData={setFormData} formData={formData} />
      ) : (
        <div>
          <img className="upload__preview" alt="preview" src={formData.image} />
        </div>
      )}
      <label for="title" className="label">
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
        <label for="platform" className="label">
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
        <label for="genre" className="label">
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
              { value: 'racing', label: 'racing' },
              { value: 'sports', label: 'sports' },
              { value: 'other', label: 'other' },
            ]}
            onChange={(v) => setFormData({ ...formData, genre: v.value })}
          />
        </label>
      </div>
      <label for="mode" className="label">
        Mode:
        <SegmentedControl
          name="mode"
          className="mode"
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
      <label for="textarea" className="label">
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
      <SubmitButton />
    </StyledForm>
  )
}
const StyledForm = styled.form`
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 16px;

  .upload__preview {
    height: 64px;
    width: auto;
    margin-top: -16px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.21);
    margin: auto;
    display: block;
  }

  input {
    margin-top: 8px;
    margin-bottom: 20px;
    width: 100%;
    padding: 4px;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 200;
    font-size: 12pt;
    border: 1px solid #6f6f77;
  }

  .label {
    font-size: 16pt;
    margin-top: 8px;
  }

  .title {
    font-size: 14pt;
  }

  .select {
    margin-top: 8px;
    margin-bottom: 8px;
    border: 1px solid #6f6f77;
  }

  .mode {
    font-size: 14pt;
    font-weight: 200;
  }

  textarea {
    font-family: 'Rajdhani', sans-serif;
    font-size: 12pt;
    font-weight: 200;
    padding: 8px;
    height: 100px;
    width: 100%;
    margin-bottom: 16px;
    margin-top: 8px;
    border: 1px solid #3d3d3d;
  }
`
