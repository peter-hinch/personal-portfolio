const ThemeContainer = ({ children, isDarkTheme }) => {
  const renderThemeClass = isDarkTheme ? 'dark-theme' : 'light-theme';
  return (
    <div id="theme-container" className={renderThemeClass}>
      {children}
    </div>
  );
};

export default ThemeContainer;
