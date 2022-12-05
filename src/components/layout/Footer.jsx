import Container from './Container';
import SocialLinks from '../shared/SocialLinks';

const currentYear = new Date().getFullYear();

const Footer = ({ myName, socialLinks }) => {
  return (
    <footer>
      <Container>
        <nav>
          <SocialLinks myName={myName} socialLinks={socialLinks} />
        </nav>
        <small>
          &copy;{currentYear} {myName}, All rights reserved.
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
