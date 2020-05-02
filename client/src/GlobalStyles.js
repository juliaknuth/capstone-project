import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    box-sizing: border-box;
  }
.App {
    display: grid;
    grid-template-rows: 79px auto 76px;
    height: 100vh;
}
  body {
    margin: 0;
    font-family: sans-serif;
    background: #f8e1f4;
  }
main {
    background: #525252;
  }

footer {

}
  
`
