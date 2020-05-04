import React, { useState } from 'react'
import GlobalStyles from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header.js'
import List from './Loot.js'
import Stats from './Stats.js'
import Footer from './Footer.js'

export default function App() {
  const [gameDetails, setGameDetails] = useState('')
  return (
    <div className="App">
      <Router>
        <GlobalStyles />

        <Header />
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/stats/:gameId">
            <Stats showDetails={showDetails} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )

  function showDetails(name, clickedGame) {
    localStorage.setItem(name, JSON.stringify(clickedGame))
  }
}
