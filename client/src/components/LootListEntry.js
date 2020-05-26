import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function LootListEntry({ title, id }) {
  return (
    <StyledList key={id}>
      <button>
        <Link to={'./stats/' + id}>
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
          &nbsp;
        </Link>
      </button>
    </StyledList>
  )
}

const StyledList = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-left: -16px;
  margin-top: -12px;
  margin-bottom: 8px;
  text-overflow: ellipsis;

  a  {
    a:visited {
      color: black;
    }
  }

  button {
    background-color: white;
    border: none;
    border-bottom: 1px solid #fd474b;
    color: 52525;
    text-decoration: none;
    font-family: 'Rajdhani', sans-serif;
    font-size: 15pt;
    font-weight: 300;
    text-align: left;
    margin-top: 16px;
    margin-right: 32px;
    margin-bottom: 8px;
    height: 32px;
    width: 100vw;
  }
`
