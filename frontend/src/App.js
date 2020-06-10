import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Content } from './components/Content'
import { Default } from './layouts/Default'

function App() {
  return (
    <Default className="App">
      <Header></Header>
      <main>
        <Content>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Content>
        <Sidebar />
      </main>
    </Default>
  );
}

export default App;
