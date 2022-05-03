const ThemeSelector = ({ isDarkTheme, toggleDarkTheme }) => {
  return (
    <form>
      <label htmlFor="dark-theme-switch" hidden>
        Dark Theme
      </label>
      <input
        type="checkbox"
        id="dark-theme-switch"
        defaultChecked={isDarkTheme}
        checked={isDarkTheme}
        onChange={(event) => toggleDarkTheme(event)}
      />
    </form>
  );
};

export default ThemeSelector;
