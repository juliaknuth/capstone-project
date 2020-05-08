import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function LootListEntry({ title, id }) {
  return (
    <StyledList key={id}>
      {title.length > 28 ? title.substring(0, 28) + '...' : title}
      &nbsp;
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
  margin-bottom: 20px;
  margin-left: -8px;
  font-weight: 150;
  text-overflow: ellipsis;

  button {
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 16px;
    background: rgb(131, 131, 131);
    background: radial-gradient(
      circle,
      rgba(131, 131, 131, 1) 1%,
      rgba(125, 125, 125, 1) 100%
    );
    border-radius: 20%;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12pt;
    box-shadow: 1px 1px 1px rgba(68, 68, 68, 0.6);
  }
`
