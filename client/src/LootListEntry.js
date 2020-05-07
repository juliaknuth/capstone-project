import React from 'react'
//import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function LootListEntry({ title, id }) {
  return (
    <li key={id}>
      {title.length > 28 ? title.substring(0, 28) + '...' : title}
      &nbsp;
      <Link to={'./stats/' + id}>
        <button>...</button>
      </Link>
    </li>
  )
}
