import { createGlobalStyle } from 'styled-components';
import imgThemeSelectLight from './../assets/sun.svg';
import imgThemeSelectDark from './../assets/moon-fill.svg';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: hsl(0, 0%, 100%);
    --color-black: hsl(0, 0%, 0%);
    --color-primary-10: hsl(150, 75%, 10%);
    --color-primary-20: hsl(150, 75%, 20%);
    --color-primary-30: hsl(150, 75%, 30%);
    --color-primary-40: hsl(150, 75%, 40%);
    --color-primary-50: hsl(150, 75%, 49%);
    --color-primary-60: hsl(150, 75%, 59%);
    --color-primary-70: hsl(150, 75%, 69%);
    --color-primary-80: hsl(150, 75%, 79%);
    --color-primary-90: hsl(150, 75%, 89%);
    --color-primary-95: hsl(150, 75%, 94%);
    --color-primary-99: hsl(150, 75%, 98%);
    --color-secondary-10: hsl(180, 75%, 10%);
    --color-secondary-20: hsl(180, 75%, 20%);
    --color-secondary-30: hsl(180, 75%, 30%);
    --color-secondary-40: hsl(180, 75%, 40%);
    --color-secondary-50: hsl(180, 75%, 49%);
    --color-secondary-60: hsl(180, 75%, 59%);
    --color-secondary-70: hsl(180, 75%, 69%);
    --color-secondary-80: hsl(180, 75%, 79%);
    --color-secondary-90: hsl(180, 75%, 89%);
    --color-secondary-95: hsl(180, 75%, 94%);
    --color-secondary-99: hsl(180, 75%, 98%);
    --color-tertiary-10: hsl(210, 75%, 10%);
    --color-tertiary-20: hsl(210, 75%, 20%);
    --color-tertiary-30: hsl(210, 75%, 30%);
    --color-tertiary-40: hsl(210, 75%, 40%);
    --color-tertiary-50: hsl(210, 75%, 49%);
    --color-tertiary-60: hsl(210, 75%, 59%);
    --color-tertiary-70: hsl(210, 75%, 69%);
    --color-tertiary-80: hsl(210, 75%, 79%);
    --color-tertiary-90: hsl(210, 75%, 89%);
    --color-tertiary-95: hsl(210, 75%, 94%);
    --color-tertiary-99: hsl(210, 75%, 98%);
    --color-neutral-10: hsl(165, 5%, 10%);
    --color-neutral-20: hsl(165, 5%, 20%);
    --color-neutral-30: hsl(165, 5%, 30%);
    --color-neutral-40: hsl(165, 5%, 40%);
    --color-neutral-50: hsl(165, 5%, 49%);
    --color-neutral-60: hsl(165, 5%, 59%);
    --color-neutral-70: hsl(165, 5%, 69%);
    --color-neutral-80: hsl(165, 5%, 79%);
    --color-neutral-90: hsl(165, 5%, 89%);
    --color-neutral-95: hsl(165, 5%, 94%);
    --color-neutral-99: hsl(165, 5%, 98%);
    --color-neutral-variant-10: hsl(195, 5%, 10%);
    --color-neutral-variant-20: hsl(195, 5%, 20%);
    --color-neutral-variant-30: hsl(195, 5%, 30%);
    --color-neutral-variant-40: hsl(195, 5%, 40%);
    --color-neutral-variant-50: hsl(195, 5%, 49%);
    --color-neutral-variant-60: hsl(195, 5%, 59%);
    --color-neutral-variant-70: hsl(195, 5%, 69%);
    --color-neutral-variant-80: hsl(195, 5%, 79%);
    --color-neutral-variant-90: hsl(195, 5%, 89%);
    --color-neutral-variant-95: hsl(195, 5%, 94%);
    --color-neutral-variant-99: hsl(195, 5%, 98%);
    --color-error-10: hsl(0, 75%, 10%);
    --color-error-20: hsl(0, 75%, 20%);
    --color-error-30: hsl(0, 75%, 30%);
    --color-error-40: hsl(0, 75%, 40%);
    --color-error-50: hsl(0, 75%, 49%);
    --color-error-60: hsl(0, 75%, 59%);
    --color-error-70: hsl(0, 75%, 69%);
    --color-error-80: hsl(0, 75%, 79%);
    --color-error-90: hsl(0, 75%, 89%);
    --color-error-95: hsl(0, 75%, 94%);
    --color-error-99: hsl(0, 75%, 98%);
  }
  
  @media only screen and (max-width: 727px) {
    .container {
      width: 100%;
    }
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
  
  body {
    font-family: 'Overpass', sans-serif;
    font-weight: 400;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-neutral-10);
  }

  #theme-container {
    width: 100%;
  }

  #theme-container.light-theme {

  }

  #theme-container.dark-theme {

  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    color: var(--color-neutral-90);
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
    color: var(--color-neutral-90);
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
    background: var(--color-primary-30);
  }
  
  header .container, footer .container {
    box-sizing: border-box;
    padding: 0 1.5rem;
  }

  header h1 {
    font-size: 1.5em;
    line-height: 2.25rem;
    margin: 0.25rem 1.5rem 0 0;
  }
  
  header a, footer a {
    color: var(--color-primary-90);
  }

  header a:hover, footer a:hover {
    text-decoration: none;
    color: var(--color-primary-80);
  }

  header {
    position: sticky;
    top: 0;
    min-height: 3rem;
  }

  header .container {
    display: flex;
    flex-direction: row;
  }

  header .container nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    width: 100%;
  }

  #theme-selector {
    width: 1.5rem;
    height: 1.5rem;
  }

  #theme-selector input[type="checkbox"] {
    display: none;
  }

  #theme-selector label::before {
    height: 1.5rem;
    width: 1.5rem;
    top: 0rem;
    left: 0;
  }

  #theme-selector input[type="checkbox"] + label::before {
    content: url(${imgThemeSelectLight});
  }

  #theme-selector input[type="checkbox"]:checked + label::before {
    content: url(${imgThemeSelectDark});
  }

  #theme-selector label::before, #dark-theme-selection label::before {
    position: relative;
    content: "";
    display: inline-block;
  }

  footer {
    min-height: 18rem;
    background: var(--color-secondary-30);
  }

  footer .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav ul {
    margin: 0;
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
  }

  section .container {
    box-sizing: border-box;
    margin: 1.5rem 0 20vh 0;
    padding: 1.5rem 1.5rem 2.25rem 1.5rem;
    background: var(--color-neutral-10);
    border: 1px solid var(--color-neutral-variant-60);
    border-radius: 1.5rem;
  }
`;

export default GlobalStyle;
