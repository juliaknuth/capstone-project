import React from 'react'
import submit from '../images/submit.png'
import styled from 'styled-components/macro'

export default function SubmitButton() {
  return (
    <StyledButton type="submit">
      <img src={submit} alt="submit" />
    </StyledButton>
  )
}

const StyledButton = styled.button`
  margin: auto;
  margin-bottom: 16px;
  display: block;
  border: none;
  background: none;

  img {
    height: 54px;
    widht: auto;
  }
`
