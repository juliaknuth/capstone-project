import React from 'react'
import styled from 'styled-components/macro'

export default function Filter({ onSearchFilter, value }) {
  return (
    <StyledFilter
      type="text"
      placeholder=" 🔍 Filter your Games"
      onChange={(e) => onSearchFilter(e.target.value)}
      value={value}
    />
  )
}

const StyledFilter = styled.input`
  margin-left: 24px;
  width: 85%;
  height: 32px;
  font-family: 'Rajdhani', sans-serif;
  font-size: 14pt;
  font-weight: 200;
  border: 1px solid #95959c;
`
