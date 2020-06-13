import React from 'react'
import logo from '../logo.svg'
import { Sidebar } from '../containers/Sidebar'
import { Content } from '../containers/Content'
import { Default } from '../layouts/Default'

export const Bookmarks = () => {
  return (
    <Default
      className="App"
      title="Bookmarks"
      description="Super Description"
    >
      <Content>
        <img src={logo} className="App-logo" alt="logo" />
      </Content>
      <Sidebar />
    </Default>
  )
}