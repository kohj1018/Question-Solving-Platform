import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%; // 기본 폰트 10px
  }
  ul, ol, li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyles;