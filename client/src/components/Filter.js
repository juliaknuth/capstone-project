import React, { useState } from 'react'

export default function Filter({ title }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Filter"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((title) => (
          <li>{title}</li>
        ))}
      </ul>
    </>
  )
}
