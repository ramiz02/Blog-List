// styles/GlobalStyle.js
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  * {
    box-sizing: inherit;
  }
`

export default GlobalStyle
