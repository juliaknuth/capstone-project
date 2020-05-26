import React from 'react'
import styled from 'styled-components/macro'
import controller from '../images/nintendo-switch.svg'

export default function Header() {
  return (
    <HeaderStyled>
      <img src={controller} alt="logo"></img>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  height: 76px;
  background: #fd474b;
  background: radial-gradient(
    circle,
    rgba(255, 95, 98, 1) 1%,
    rgba(253, 71, 75, 1) 100%
  );
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  box-shadow: 0px 5px 5px #525252;
  z-index: 9998;
  text-align: center;

  img {
    height: 36px;
    width: auto;
    display: inline-block;
    margin: 0 auto;
    margin-top: 20px;
  }
`
