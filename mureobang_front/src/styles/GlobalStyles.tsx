import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
  }
  ul, ol, li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyles;