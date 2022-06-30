import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  
  h1 {
    margin: 15px 0;
  }
  
  a {
    text-decoration: none;
    color: #df3c3c;
    transition: all 0.5s ease-out;
    
    &:hover {
      color: #000;
    }
  }
  
  section {
    padding: 30px;
  }
  
  .inputField {
    width: 100%;
    height: 40px;
    border: none;
    background: #f0f0f0;
    border-radius: 4px;
    padding: 5px 15px;
    box-sizing: border-box;
  }
  
  .btn {
    margin: 0;
    background-color: #df3c3c;
    color: #fff;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    box-shadow: none;
    cursor: pointer;
    transition: all 0.5s ease-out;
    
    &:hover {
      background-color: #000;
    }
  }
`;

export default GlobalStyle;