import React from 'react'
import styled from 'styled-components/macro'
import trashcan from '../images/trash.svg'

export default function Delete({ onDelete }) {
  return (
    <StyledButton
      onClick={() => onDelete()}
      src={trashcan}
      alt="delete button"
    />
  )
}

const StyledButton = styled.img`
  display: flex;
  margin-left: auto;
  margin-right: 16px;
  margin-bottom: 16px;
  height: 28px;
  width: auto;
  filter: invert(50%);
`
