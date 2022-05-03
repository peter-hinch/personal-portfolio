import SocialLinks from '../shared/SocialLinks';
import Container from './Container';
import ThemeSelector from './ThemeSelector';

const Header = ({ name, socialLinks, isDarkTheme, toggleDarkTheme }) => {
  return (
    <header>
      <Container>
        <nav>
          <ul>
            <li>
              <h1>
                <a href="#">{name}</a>
              </h1>
            </li>
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
          <ThemeSelector
            isDarkTheme={isDarkTheme}
            toggleDarkTheme={toggleDarkTheme}
          />
          <SocialLinks name={name} socialLinks={socialLinks} />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
