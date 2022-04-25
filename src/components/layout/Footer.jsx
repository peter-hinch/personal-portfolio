import Container from './Container';
import SocialLinks from '../shared/SocialLinks';

const currentYear = new Date().getFullYear();

const Footer = ({ name, socialLinks }) => {
  return (
    <footer>
      <Container>
        <nav>
          <SocialLinks name={name} socialLinks={socialLinks} />
          <small>
            &copy;{currentYear} {name}, All rights reserved.
          </small>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
