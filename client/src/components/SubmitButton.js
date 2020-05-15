import React from 'react'
import styled from 'styled-components/macro'

export default function SubmitButton() {
  return <StyledButton type="submit">Submit!</StyledButton>
}

const StyledButton = styled.button`
  padding: 12px;
  background-color: #fd474b;
  background: radial-gradient(
    circle,
    rgba(255, 95, 98, 1) 1%,
    rgba(253, 71, 75, 1) 100%
  );
  border-radius: 36%;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-weight: 150;
  box-shadow: 1px 1px 1px rgba(68, 68, 68, 0.6);
  margin: auto;
  margin-bottom: 16px;
  display: block;
`
