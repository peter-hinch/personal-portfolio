import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @media only screen and (max-width: 727px) {
  }

  @media only screen and (min-width: 728px) {
    .container {
      width: 42.5rem;
    }
  }

  @media only screen and (min-width: 952px) {
    .container {
      width: 56.5rem;
    }
  }
  
  @media only screen and (min-width: 1201px) {
    .container {
      width: 72rem;
    }
  }

  html {
    box-sizing: border-box;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  body {
    font-family: 'Overpass', sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }

  h1 {
    font-size: 2.25em;
    line-height: 3.375rem;
  }

  h2 {
    font-size: 2em;
    line-height: 3rem;
  }

  h3 {
    font-size: 1.75em;
    line-height: 2.625rem;
  }

  h4 {
    font-size: 1.5em;
    line-height: 2.25rem;
  }

  h5 {
    font-size: 1.125em;
    line-height: 1.687rem;
  }

  h6 {
    font-size: 0.875em;
    line-height: 1.316rem;
  }

  p {
    font-size: 1em;
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
  }

  header, footer {
    display: flex;
    justify-content: center;
    width: 100%;
    background: red;
  }

  header .container nav ul,
  footer .container nav ul {
    padding: 0;
    list-style-type: none;
  }
  
  header .container nav ul li,
  footer .container nav ul li {
    display: inline-block;
    margin-right: 1rem;
  }

  header .container nav ul li:last-child, 
  footer .container nav ul li:last-child {
    margin-right: 0;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: turquoise;
  }

  section:nth-child(2n) {
    background: grey;
  }

  section .container {
    margin: 2rem 0;
    background: white;
  }
`;

export default GlobalStyle;
