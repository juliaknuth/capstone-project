import React from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header.js'
import List from './List.js'
import Footer from '.Footer.js'

export default function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <List />
      <Footer />
    </div>
  )
}
