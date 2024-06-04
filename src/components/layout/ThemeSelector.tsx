import styled from 'styled-components';

// @ts-ignore
import imgThemeSelectLight from './../../assets/theme/sun.svg';
// @ts-ignore
import imgThemeSelectDark from './../../assets/theme/moon-fill.svg';

const ThemeSelector: React.FC<{
  isDarkTheme: boolean;
  toggleDarkTheme: Function;
}> = ({ isDarkTheme, toggleDarkTheme }) => {
  return (
    <StyledThemeSelector>
      <div id="theme-selector">
        <input
          type="checkbox"
          id="dark-theme-switch"
          aria-label="Toggle dark theme"
          checked={isDarkTheme}
          onChange={(event) => toggleDarkTheme(event)}
        />
        <label htmlFor="dark-theme-switch" />
      </div>
    </StyledThemeSelector>
  );
};

const StyledThemeSelector = styled.form`
  #theme-selector {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;

    input[type='checkbox'] {
      display: none;

      & + label::before {
        content: url(${imgThemeSelectLight});
      }
      &:checked + label::before {
        content: url(${imgThemeSelectDark});
      }
    }
    label::before {
      position: relative;
      top: 0rem;
      left: 0;
      display: inline-block;
      height: 1.5rem;
      width: 1.5rem;
      content: '';
      cursor: pointer;
    }
  }
`;

export default ThemeSelector;
