import Container from './Container';
import SocialLinks from '../shared/SocialLinks';

const currentYear = new Date().getFullYear();

const Footer = ({ socialLinks }) => {
  return (
    <footer>
      <Container>
        <nav>
          <SocialLinks socialLinks={socialLinks} />
          <small>&copy;{currentYear} Peter Hinch, All rights reserved.</small>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
