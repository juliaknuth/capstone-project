import React from 'react'
import styled from 'styled-components/macro'

export default function List() {
  return (
    <StyledList>
      <ul>
        <li></li>
      </ul>
    </StyledList>
  )
}

const StyledList = styled.div`
  background: #f5f9f9;
  overflow: scroll;
  height: 90%;
  padding: 20px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 8px;
  border-bottom: 8px;
`
