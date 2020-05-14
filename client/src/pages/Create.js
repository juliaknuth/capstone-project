import React from 'react'
import styled from 'styled-components/macro'
import CreateForm from '../components/CreateForm.js'
export default function Create() {
  return (
    <ContentWrapper>
      <h2>Level up!</h2>
      <p>Add new games to your library</p>
      <CreateForm />
    </ContentWrapper>
  )
}

const ContentWrapper = styled.main`
  overflow: scroll;
  height: auto;
  margin-left: 8px;
  margin-right: 8px;
  background: #f5f9f9;
  font-weight: 150;

  h2 {
    font-weight: 250;
    margin-left: 24px;
    margin-right: 16px;
    margin-top: 24px;
  }

  p {
    margin-left: 24px;
    margin-right: 16px;
  }
`
