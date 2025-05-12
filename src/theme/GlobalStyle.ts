import { createGlobalStyle } from 'styled-components';

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

  #theme-container {
    --theme-error: var(--color-error-40);
    --theme-on-error: var(--color-white);
    --theme-error-container: var(--color-error-90);
    --theme-on-error-container: var(--color-error-10);
  }

  #theme-container.light-theme {
    --theme-primary: var(--color-primary-40);
    --theme-on-primary: var(--color-white);
    --theme-primary-container: var(--color-primary-90);
    --theme-on-primary-container: var(--color-primary-10);
    --theme-secondary: var(--color-secondary-40);
    --theme-on-secondary: var(--color-white);
    --theme-secondary-container: var(--color-secondary-90);
    --theme-on-secondary-container: var(--color-secondary-10);
    --theme-tertiary: var(--color-tertiary-40);
    --theme-on-tertiary: var(--color-white);
    --theme-tertiary-container: var(--color-tertiary-90);
    --theme-on-tertiary-container: var(--color-tertiary-10);
    --theme-background: var(--color-neutral-99);
    --theme-on-background: var(--color-neutral-10);
    --theme-surface: var(--color-neutral-99);
    --theme-on-surface: var(--color-neutral-10);
    --theme-surface-variant: var(--color-neutral-variant-90);
    --theme-on-surface-variant: var(--color-neutral-variant-30);
    --theme-outline: rgba(119, 128, 131, 0.5); // neutral variant 50
    --theme-shadow-a: rgba(119, 128, 131, 0.25); // neutral variant 50
    --theme-shadow-b: rgba(119, 128, 131, 0.30); // neutral variant 50
  }
  
  #theme-container.dark-theme {
    --theme-primary: var(--color-primary-80);
    --theme-on-primary: var(--color-primary-20);
    --theme-primary-container: var(--color-primary-30);
    --theme-on-primary-container: var(--color-primary-90);
    --theme-secondary: var(--color-secondary-80);
    --theme-on-secondary: var(--color-secondary-20);
    --theme-secondary-container: var(--color-secondary-30);
    --theme-on-secondary-container: var(--color-secondary-90);
    --theme-tertiary: var(--color-tertiary-80);
    --theme-on-tertiary: var(--color-tertiary-20);
    --theme-tertiary-container: var(--color-tertiary-30);
    --theme-on-tertiary-container: var(--color-tertiary-90);
    --theme-background: var(--color-neutral-10);
    --theme-on-background: var(--color-neutral-90);
    --theme-surface: var(--color-neutral-10);
    --theme-on-surface: var(--color-neutral-90);
    --theme-surface-variant: var(--color-neutral-variant-30);
    --theme-on-surface-variant: var(--color-neutral-variant-80);
    --theme-outline: rgba(145, 153, 156, 0.5); // neutral variant 60
    --theme-shadow-a: rgba(0, 0, 0, 0.25); // neutral variant 60
    --theme-shadow-b: rgba(0, 0, 0, 0.3); // neutral variant 60
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 350;
    letter-spacing: 0.02em;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif;
    font-weight: 400;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
    width: calc(100% - 6rem);
    max-width: 72rem;
    margin: 1.5rem;
    border-radius: 0.125rem;
    box-shadow: 0 0.5rem 0.75rem var(--theme-shadow-a), 0 0.5rem 2rem var(--theme-shadow-b);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    color: var(--theme-on-background);
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

  h3 + h4 {
    margin-top: -1.5rem;
  }

  p {
    font-size: 1em;
    line-height: 1.5rem;
    color: var(--theme-on-background);
  }

  a {
    text-decoration: none;
    color: var(--theme-tertiary);

    &:hover {
      text-decoration: underline;
    }
  }

  nav {
    a {
        color: var(--color-black);

        &:hover {
          text-decoration: none;
          color: var(--theme-primary-container);
        }
      }

    ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;
      list-style-type: none;
      gap: 1rem;
  }
}

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    scroll-margin-top: 5.75rem;

    .container {
      padding: 1.5rem 1.5rem 2.25rem 1.5rem;
      background: var(--theme-surface);
    }
  }
  
  .cta-links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem 2rem;
    margin: 1.25rem 0;
    
    &--group {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem 2rem;
    }
  }

  .cta-link {
    display: inline-block;
    font-size: 1.125em;
    line-height: 1.687rem;
    color: var(--theme-tertiary);
    transition: all 0.3s;

    &:hover {
      color: var(--color-tertiary-60);
    }
  }

  .project {
    margin-bottom: 8rem;
    scroll-margin-top: 4rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .breakout-info {
    margin: 0 -1.5rem;
    padding: 1rem 1.5rem;
  }

  #contact .breakout-info {
    display: flex;
    flex-direction: row;
    justify-content: center;

    form.contact-form {
      width: 32rem;
      display: flex;
      flex-direction: column;

      .form-fieldset {
        label {
          display: block;
          margin-bottom: 0.25rem;
        }
        
        input, textarea {
          width: 100%;
          min-height: 1.5rem;
          padding: 0.25rem;
          margin-bottom: 1.5rem;
          border: 1px var(--theme-outline) solid;
          border-radius: 0.25rem;
        }

        textarea {
          resize: none;
        }
      }

      button[type="submit"] {
        align-self: flex-end;
        max-width: 100%;
        min-height: 1.5rem;
        padding: 0.5rem 0.75rem 0.25rem;
        color: var(--theme-on-tertiary);
        background: var(--theme-tertiary);
        border: 1px var(--theme-outline) solid;
        border-radius: 0.25rem;
      }
    }
  }

  footer {
    min-height: 18rem;
    background: var(--theme-surface-variant);

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1.5rem 0;
    }
  }
`;

export default GlobalStyle;
