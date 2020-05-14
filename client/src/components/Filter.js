import React from 'react'
import styled from 'styled-components/macro'

export default function Filter({ onSearchFilter }) {
  return (
    <>
      <StyledFilter
        type="text"
        placeholder=" 🔍 Filter your Games"
        type="text"
        onChange={onSearchFilter}
      />
    </>
  )
}

const StyledFilter = styled.input`
  margin-left: 24px;
  width: 85%;
  height: 32px;
  font-size: 16px;
`
