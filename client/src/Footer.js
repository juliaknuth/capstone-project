import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import { Fab, Action } from 'react-tiny-fab'
import 'react-tiny-fab/dist/styles.css'

export default function Footer() {
  const history = useHistory()

  return (
    <FooterStyled>
      <Fab
        icon={<div />}
        mainButtonStyles={{
          backgroundColor: '#52525',
        }}
        position={{
          bottom: -14,
          right: 28,
        }}
        event={'click'}
      >
        <Action text="Home" onClick={() => history.push('/home')}></Action>
        <Action text="Loot" onClick={() => history.push('/')}></Action>
        <Action text="Add" onClick={() => history.push('/add')}></Action>
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
