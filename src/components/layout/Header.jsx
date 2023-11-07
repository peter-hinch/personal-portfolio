import SocialLinks from '../shared/SocialLinks';
import Container from './Container';
import ThemeSelector from './ThemeSelector';

const Header = ({ myName, socialLinks, isDarkTheme, toggleDarkTheme }) => {
  return (
    <header>
      <Container>
        <nav>
          <div id="header-text-items">
            <h1>
              <a href="#top">{myName}</a>
            </h1>
            <ul id="header-text-links">
              <li>
                <a href="#about-me">About Me</a>
              </li>
              <li>
                <a href="#technologies">Technologies</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div id="header-icons">
            <ThemeSelector
              isDarkTheme={isDarkTheme}
              toggleDarkTheme={toggleDarkTheme}
            />
            <SocialLinks name={myName} socialLinks={socialLinks} />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
