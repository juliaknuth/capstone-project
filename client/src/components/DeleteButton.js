import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import { saveToStorage } from '../services'

export default function Delete({ onDelete }) {
  return <StyledButton onClick={() => onDelete()}>Delete!!</StyledButton>
}

const StyledButton = styled.button``
