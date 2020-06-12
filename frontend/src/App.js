import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'

import { Home } from './pages/Home'
import { Bookmarks } from './pages/Bookmarks'
import { Comments } from './pages/Comments'
import { Explore } from './pages/Explore'
import { Profile } from './pages/Profile'
import { Notifications } from './pages/Notifications'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Bookmarks path='/bookmarks' />
        <Explore path='/explore' />
        <Comments path='/comments' />
        <Profile path='/profile' />
        <Notifications path='/notifications' />
      </Router>
    </>
  );
}

export default App;
