import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    box-sizing: border-box;
  }
#root {
    display: grid;
    grid-template-rows: 76px auto 76px;
    height: 100vh;
}
body {
    margin: 0;
    font-family: sans-serif;
    background: white;
  }

main {
    background: #525252;
  }
  
`
