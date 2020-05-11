import React from 'react'
import GlobalStyles from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header.js'
import List from './components/Loot.js'
import Stats from './components/Stats.js'
import Footer from './components/Footer.js'
import Bookmark from './components/BookmarkList.js'
import Create from './components/Create.js'

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
