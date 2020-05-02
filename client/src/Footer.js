import React from 'react'
import styled from 'styled-components/macro'

export default function Footer() {
  return <FooterStyled></FooterStyled>
}

const FooterStyled = styled.footer`
  background: #50d9e7;
  background: radial-gradient(
    circle,
    rgba(166, 229, 236, 1) 1%,
    rgba(80, 217, 231, 1) 100%
  );
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  box-shadow: 0px -10px 5px #525252;
  position: relative;
`
