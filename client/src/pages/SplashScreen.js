import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import logo from '../images/spielcontroller.svg'
import { useHistory } from 'react-router-dom'

export default function SplashScreen() {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => history.push('/dashboard'), 1000)
  }, [])

  return (
    <ContentWrapper>
      <h1>NintenLog</h1>
      <img src={logo} alt="logo" />
    </ContentWrapper>
  )
}

const ContentWrapper = styled.body`
  background: grey;

  > img {
    width: 100px;
    height: 100px;
  }
`
