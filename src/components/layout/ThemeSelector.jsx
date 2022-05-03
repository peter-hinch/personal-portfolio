const ThemeSelector = ({ isDarkTheme, toggleDarkTheme }) => {
  return (
    <form>
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
    </form>
  );
};

export default ThemeSelector;
