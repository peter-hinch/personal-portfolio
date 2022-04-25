import SocialLinks from '../shared/SocialLinks';
import Container from './Container';

const Header = ({ name, socialLinks }) => {
  return (
    <header>
      <Container>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
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
          <SocialLinks name={name} socialLinks={socialLinks} />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
