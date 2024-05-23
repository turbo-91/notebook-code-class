import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --nemo: #8236ff;
    --granite: #252629;
    --water: #f3f5f9;
    --foam: #ffffff;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
    
  ul {
    margin: 0;
    padding: 0;
  }
  
  #__next {
    display: grid;
    min-height: 100vh;
    place-items: center;
  }

`;
