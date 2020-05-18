import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function LootListEntry({ title, id }) {
  return (
    <StyledList key={id}>
      <p>
        {title.length > 28 ? title.substring(0, 28) + '...' : title}
        &nbsp;
      </p>
      <Link to={'./stats/' + id}>
        <button>...</button>
      </Link>
    </StyledList>
  )
}

const StyledList = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-align: justify-all;
  margin-left: -8px;
  margin-top: -12px;
  margin-bottom: 8px;
  font-weight: 300;
  font-size: 14pt;
  text-overflow: ellipsis;

  p {
  }

  a  {
    font-size: 10pt;

    a:visited {
      color: black;
    }
  }

  button {
    margin-right: 16px;
    background-color: white;
    border: none;
    border-radius: 15%;
    color: #52525;
    text-decoration: none;
    margin-top: 10px;
    border: 1px solid grey;
  }
`
