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


`;

export default GlobalStyle;
