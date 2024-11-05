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
        <button
          className={`theme-selected--${!isDarkTheme ? 'light' : 'dark'}`}
          onClick={() => toggleDarkTheme(!isDarkTheme)}
        />
      </div>
    </StyledThemeSelector>
  );
};

const StyledThemeSelector = styled.div`
  #theme-selector {
    max-height: 1.5rem;

    button {
      position: relative;
      top: -0.2rem;
      width: 2.5rem;
      height: 1.5rem;
      background: transparent;
      border: 0.125rem solid black;
      border-radius: 0.75rem;
      cursor: pointer;

      &.theme-selected-- {
        &light {
          background: 0.125rem 50% / 1rem no-repeat url(${imgThemeSelectLight});
        }
        &dark {
          background: right 0.125rem top 50% / 1rem no-repeat
            url(${imgThemeSelectDark});
        }
      }
    }
  }
`;

export default ThemeSelector;
