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
  
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    --color-white: hsl(0, 0%, 100%);
    --color-black: hsl(0, 0%, 0%);
    --color-primary-10: hsl(240, 40%, 8.75%);
    --color-primary-20: hsl(240, 40%, 17.5%);
    --color-primary-30: hsl(240, 40%, 26.25%);
    --color-primary-40: hsl(240, 40%, 35%);
    --color-primary-50: hsl(240, 40%, 44%);
    --color-primary-60: hsl(240, 40%, 55%);
    --color-primary-70: hsl(240, 40%, 66%);
    --color-primary-80: hsl(240, 40%, 77%);
    --color-primary-90: hsl(240, 40%, 88%);
    --color-primary-95: hsl(240, 40%, 94%);
    --color-primary-99: hsl(240, 40%, 98%);
    --color-secondary-10: hsl(220, 40%, 8.75%);
    --color-secondary-20: hsl(220, 40%, 17.5%);
    --color-secondary-30: hsl(220, 40%, 26.25%);
    --color-secondary-40: hsl(220, 40%, 35%);
    --color-secondary-50: hsl(220, 40%, 44%);
    --color-secondary-60: hsl(220, 40%, 55%);
    --color-secondary-70: hsl(220, 40%, 66%);
    --color-secondary-80: hsl(220, 40%, 77%);
    --color-secondary-90: hsl(220, 40%, 88%);
    --color-secondary-95: hsl(220, 40%, 94%);
    --color-secondary-99: hsl(220, 40%, 98%);
    --color-tertiary-10: hsl(200, 40%, 8.75%);
    --color-tertiary-20: hsl(200, 40%, 17.5%);
    --color-tertiary-30: hsl(200, 40%, 26.25%);
    --color-tertiary-40: hsl(200, 40%, 35%);
    --color-tertiary-50: hsl(200, 40%, 44%);
    --color-tertiary-60: hsl(200, 40%, 55%);
    --color-tertiary-70: hsl(200, 40%, 66%);
    --color-tertiary-80: hsl(200, 40%, 77%);
    --color-tertiary-90: hsl(200, 40%, 88%);
    --color-tertiary-95: hsl(200, 40%, 94%);
    --color-tertiary-99: hsl(200, 40%, 98%);
    --color-neutral-10: hsl(230, 2%, 10%);
    --color-neutral-20: hsl(230, 2%, 20%);
    --color-neutral-30: hsl(230, 2%, 30%);
    --color-neutral-40: hsl(230, 2%, 40%);
    --color-neutral-50: hsl(230, 2%, 49%);
    --color-neutral-60: hsl(230, 2%, 59%);
    --color-neutral-70: hsl(230, 2%, 69%);
    --color-neutral-80: hsl(230, 2%, 79%);
    --color-neutral-90: hsl(230, 2%, 89%);
    --color-neutral-95: hsl(230, 2%, 94%);
    --color-neutral-99: hsl(230, 2%, 98%);
    --color-neutral-variant-10: hsl(210, 2%, 10%);
    --color-neutral-variant-20: hsl(210, 2%, 20%);
    --color-neutral-variant-30: hsl(210, 2%, 30%);
    --color-neutral-variant-40: hsl(210, 2%, 40%);
    --color-neutral-variant-50: hsl(210, 2%, 49%);
    --color-neutral-variant-60: hsl(210, 2%, 59%);
    --color-neutral-variant-70: hsl(210, 2%, 69%);
    --color-neutral-variant-80: hsl(210, 2%, 79%);
    --color-neutral-variant-90: hsl(210, 2%, 89%);
    --color-neutral-variant-95: hsl(210, 2%, 94%);
    --color-neutral-variant-99: hsl(210, 2%, 98%);
    --color-error-10: hsl(0, 40%, 10%);
    --color-error-20: hsl(0, 40%, 20%);
    --color-error-30: hsl(0, 40%, 30%);
    --color-error-40: hsl(0, 40%, 40%);
    --color-error-50: hsl(0, 40%, 49%);
    --color-error-60: hsl(0, 40%, 59%);
    --color-error-70: hsl(0, 40%, 69%);
    --color-error-80: hsl(0, 40%, 79%);
    --color-error-90: hsl(0, 40%, 89%);
    --color-error-95: hsl(0, 40%, 94%);
    --color-error-99: hsl(0, 40%, 98%);
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
    color: var(--color-neutral-10);
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
    color: var(--color-neutral-10);
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  header, footer {
    display: flex;
    justify-content: center;
    width: 100%;
    background: var(--color-primary-40);
  }

  header a, footer a {
    color: var(--color-white);
  }

  header .container nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  footer .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav ul {
    padding: 0;
    list-style-type: none;
  }
  
  nav ul li {
    display: inline-block;
    margin-right: 1rem;
  }

  nav ul li:last-child {
    margin-right: 0;
  }

  img.social-link {
    height: 1.5rem;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: var(--color-secondary-90);
  }

  section:nth-child(2n) {
    background: var(--color-tertiary-90);
  }

  section .container {
    box-sizing: border-box;
    margin: 2rem 0;
    padding: 1.5rem;
    background: var(--color-neutral-99);
    border-radius: 1.5rem;
  }
`;

export default GlobalStyle;
