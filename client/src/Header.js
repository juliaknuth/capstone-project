import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return <HeaderStyled></HeaderStyled>
}

const HeaderStyled = styled.header`
  background: #fd474b;
  background: radial-gradient(
    circle,
    rgba(255, 95, 98, 1) 1%,
    rgba(253, 71, 75, 1) 100%
  );
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  box-shadow: 0px 10px 5px #525252;
  position: relative;
  z-index: 999999;
`
