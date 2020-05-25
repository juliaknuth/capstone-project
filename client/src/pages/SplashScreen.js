import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

export default function SplashScreen({ onBoot, onComplete }) {
  const history = useHistory()

  useEffect(() => onBoot(), [])

  useEffect(() => {
    setTimeout(() => {
      onComplete()
      history.push('/dashboard')
    }, 4000)
  }, [history])

  return (
    <ContentWrapper>
      <div id="logo">
        <div id="left"></div>
        <div id="right"></div>
      </div>
      <h1>NintenLog</h1>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.body`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fd474b;
  color: white;

  @keyframes slide_motion {
    0% {
      margin-top: -15vmin;
    }
    30% {
      margin-top: -17vmin;
    }
    100% {
      margin-top: 0;
    }
  }
  @-webkit-keyframes slide_motion {
    0% {
      margin-top: -15vmin;
    }
    20% {
      margin-top: -12vmin;
    }
    100% {
      margin-top: 0;
    }
  }
  * {
    outline: none;
    box-sizing: border-box;
  }

  #logo {
    margin-top: 160px;
    margin-bottom: 20px;
    width: 40vmin;
    height: 40vmin;
    clear: both;
    float: left;
    #left,
    #right {
      width: 47.5%;
      height: 100%;
      border: 4vmin solid white;
      position: relative;
      &:before {
        content: '';
        display: block;
        position: absolute;
        border-radius: 50%;
        width: 60%;
        padding-bottom: 60%;
        height: 0;
        left: 50%;
        margin-left: -30%;
      }
    }
    #left {
      float: left;
      border-top-left-radius: 10vmin;
      border-bottom-left-radius: 10vmin;
      &:before {
        background: white;
        top: 7vmin;
      }
    }
    #right {
      animation: 0.3s slide_motion 1s linear forwards;
      float: right;
      margin-top: -15vmin;
      border-top-right-radius: 10vmin;
      border-bottom-right-radius: 10vmin;
      background: white;
      &:before {
        background: #fd474b;
        bottom: 15vmin;
      }
    }
  }
`
