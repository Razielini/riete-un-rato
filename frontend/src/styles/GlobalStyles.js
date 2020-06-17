import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #15202B;
  }

  .mt-5-p {
    margin-top: 5%;
  }

  .ml-15px {
    margin-left: 15px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    width: 100%;
    box-sizing: border-box;
    display: table;
    justify-content: center;
    background-color: #15202B;
    color: #FFF;
  }

  @media screen and (max-width: 1024px) {
    #root {
      display: table;
    }
  }

`
