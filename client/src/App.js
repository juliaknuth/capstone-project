import React from 'react'
import GlobalStyles from './GlobalStyles'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header.js'
import List from './pages/Loot.js'
import Dashboard from './pages/Dashboard.js'
import Stats from './pages/Stats.js'
import Footer from './components/Footer.js'
import Bookmark from './pages/BookmarkList.js'
import Create from './pages/Create.js'

export default function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />

        <Header />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/loot">
            <List />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>
          <Route path="/stats/:gameId">
            <Stats />
          </Route>
          <Route path="/add">
            <Create />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}
