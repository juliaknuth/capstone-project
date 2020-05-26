import React from 'react'
import styled from 'styled-components/macro'

export default function Delete({ onDelete }) {
  return <StyledButton onClick={() => onDelete()}>Delete!!</StyledButton>
}

const StyledButton = styled.button``
