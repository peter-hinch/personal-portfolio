import styled from 'styled-components';

const ThemeContainer: React.FC<{ children: any; isDarkTheme: boolean }> = ({
  children,
  isDarkTheme
}) => {
  const renderThemeClass = isDarkTheme ? 'dark-theme' : 'light-theme';
  return (
    <StyledThemeContainer id="theme-container" className={renderThemeClass}>
      {children}
    </StyledThemeContainer>
  );
};

const StyledThemeContainer = styled.div`
  &#theme-container {
    width: 100%;
    background-color: var(--theme-background);
    transition: all 0.3s;
  }
`;

export default ThemeContainer;
