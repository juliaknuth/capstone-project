import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Fab, Action } from 'react-tiny-fab'
import 'react-tiny-fab/dist/styles.css'

export default function Footer() {
  const [button, setButton] = useState(false)
  const fabEventHandler = (event) => setButton(true)
  return (
    <FooterStyled>
      <Fab icon={<div />} event={'click'}>
        <Action text="Email" onClick={fabEventHandler}>
          {button ? 'ja' : 'nein'}
        </Action>
      </Fab>
    </FooterStyled>
  )
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
  box-shadow: 0px -5px 5px #525252;
`
