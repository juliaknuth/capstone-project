import React from 'react'
import GlobalStyles from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header.js'
import List from './Loot.js'
import Stats from './Stats.js'
import Footer from './Footer.js'

export default function App() {
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
            <Stats showStats={showStats} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )

  function showStats(name, clickedGame) {
    localStorage.setItem(name, JSON.stringify(clickedGame))
  }
}
