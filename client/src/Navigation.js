import React from 'react'
import { useHistory } from 'react-router-dom'
import { Fab, Action } from 'react-tiny-fab'
import 'react-tiny-fab/dist/styles.css'
import DPad from './images/spielkonsole.png'
import Add from './images/plus.png'
import Start from './images/multimedia.png'
import List from './images/brief.png'

export default function Navigation() {
  const history = useHistory()

  return (
    <Fab
      icon={<img src={DPad} alt="navigation" />}
      style={{
        background: '#52525',
      }}
      position={{
        bottom: -16,
        right: 28,
      }}
      event={'click'}
    >
      <Action
        style={{ background: '#8c8c8c' }}
        text="Home"
        onClick={() => history.push('/home')}
      >
        <img src={Start} alt="Home" />
      </Action>
      <Action
        style={{ background: '#8c8c8c' }}
        text="Loot"
        onClick={() => history.push('/')}
      >
        <img src={List} alt="Library" />
      </Action>
      <Action
        style={{ background: '#8c8c8c' }}
        text="Add"
        onClick={() => history.push('/add')}
      >
        <img src={Add} alt="add" />
      </Action>
    </Fab>
  )
}
