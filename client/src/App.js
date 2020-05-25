import React, { useState, useEffect } from 'react'
import GlobalStyles from './GlobalStyles'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom'
import Header from './components/Header.js'
import List from './pages/Loot.js'
import Dashboard from './pages/Dashboard.js'
import Stats from './pages/Stats.js'
import Footer from './components/Footer.js'
import Bookmark from './pages/BookmarkList.js'
import Create from './pages/Create.js'
import SplashScreen from './pages/SplashScreen'

export default function App() {
  const [isBooting, setIsBooting] = useState(false)

  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        {!isBooting && <Header />}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/loot">
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
          <Route exact path="/">
            <SplashScreen
              onBoot={() => setIsBooting(true)}
              onComplete={() => setIsBooting(false)}
            />
          </Route>
        </Switch>
        {!isBooting && <Footer />}
      </Router>
    </div>
  )
}
