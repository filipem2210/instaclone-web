import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialised;
    background: #fafafa;
    font: 400 14px Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-y: scroll;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  p.error{
    font: 400 14px Roboto, Helvetica, Arial, sans-serif !important;
    color: #e74c3c !important;
    text-align: left !important;
  }

  .Toastify__toast-container {
    padding: 0;
  }
`;
