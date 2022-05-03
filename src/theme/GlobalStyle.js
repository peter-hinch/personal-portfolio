import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: hsl(0, 0%, 100%);
    --color-black: hsl(0, 0%, 0%);
    --color-primary-10: hsl(150, 60%, 8.75%);
    --color-primary-20: hsl(150, 60%, 17.5%);
    --color-primary-30: hsl(150, 60%, 26.25%);
    --color-primary-40: hsl(150, 60%, 35%);
    --color-primary-50: hsl(150, 60%, 44%);
    --color-primary-60: hsl(150, 60%, 55%);
    --color-primary-70: hsl(150, 60%, 66%);
    --color-primary-80: hsl(150, 60%, 77%);
    --color-primary-90: hsl(150, 60%, 88%);
    --color-primary-95: hsl(150, 60%, 94%);
    --color-primary-99: hsl(150, 60%, 98%);
    --color-secondary-10: hsl(180, 50%, 8.75%);
    --color-secondary-20: hsl(180, 50%, 17.5%);
    --color-secondary-30: hsl(180, 50%, 26.25%);
    --color-secondary-40: hsl(180, 50%, 35%);
    --color-secondary-50: hsl(180, 50%, 44%);
    --color-secondary-60: hsl(180, 50%, 55%);
    --color-secondary-70: hsl(180, 50%, 66%);
    --color-secondary-80: hsl(180, 50%, 77%);
    --color-secondary-90: hsl(180, 50%, 88%);
    --color-secondary-95: hsl(180, 50%, 94%);
    --color-secondary-99: hsl(180, 50%, 98%);
    --color-tertiary-10: hsl(210, 40%, 8.75%);
    --color-tertiary-20: hsl(210, 40%, 17.5%);
    --color-tertiary-30: hsl(210, 40%, 26.25%);
    --color-tertiary-40: hsl(210, 40%, 35%);
    --color-tertiary-50: hsl(210, 40%, 44%);
    --color-tertiary-60: hsl(210, 40%, 55%);
    --color-tertiary-70: hsl(210, 40%, 66%);
    --color-tertiary-80: hsl(210, 40%, 77%);
    --color-tertiary-90: hsl(210, 40%, 88%);
    --color-tertiary-95: hsl(210, 40%, 94%);
    --color-tertiary-99: hsl(210, 40%, 98%);
    --color-neutral-10: hsl(165, 4%, 8.75%);
    --color-neutral-20: hsl(165, 4%, 17.5%);
    --color-neutral-30: hsl(165, 4%, 26.25%);
    --color-neutral-40: hsl(165, 4%, 35%);
    --color-neutral-50: hsl(165, 4%, 44%);
    --color-neutral-60: hsl(165, 4%, 55%);
    --color-neutral-70: hsl(165, 4%, 66%);
    --color-neutral-80: hsl(165, 4%, 77%);
    --color-neutral-90: hsl(165, 4%, 88%);
    --color-neutral-95: hsl(165, 4%, 94%);
    --color-neutral-99: hsl(165, 4%, 98%);
    --color-neutral-variant-10: hsl(195, 4%, 8.75%);
    --color-neutral-variant-20: hsl(195, 4%, 17.5%);
    --color-neutral-variant-30: hsl(195, 4%, 26.25%);
    --color-neutral-variant-40: hsl(195, 4%, 44%);
    --color-neutral-variant-50: hsl(188, 2%, 49%);
    --color-neutral-variant-60: hsl(195, 4%, 55%);
    --color-neutral-variant-70: hsl(195, 4%, 66%);
    --color-neutral-variant-80: hsl(195, 4%, 77%);
    --color-neutral-variant-90: hsl(195, 4%, 88%);
    --color-neutral-variant-95: hsl(195, 4%, 94%);
    --color-neutral-variant-99: hsl(195, 4%, 98%);
    --color-error-10: hsl(0, 40%, 8.75%);
    --color-error-20: hsl(0, 40%, 17.5%);
    --color-error-30: hsl(0, 40%, 26.25%);
    --color-error-40: hsl(0, 40%, 35%);
    --color-error-50: hsl(0, 40%, 44%);
    --color-error-60: hsl(0, 40%, 55%);
    --color-error-70: hsl(0, 40%, 66%);
    --color-error-80: hsl(0, 40%, 77%);
    --color-error-90: hsl(0, 40%, 88%);
    --color-error-95: hsl(0, 40%, 94%);
    --color-error-99: hsl(0, 40%, 98%);
  }
  
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

  header .container, footer .container {
    box-sizing: border-box;
    padding: 0 1.5rem;
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
    background: var(--color-neutral-variant-90);
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
