import Container from './Container';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
        </ul>
        <small>&copy;{currentYear} Peter Hinch, All rights reserved.</small>
      </nav>
    </Container>
  );
};

export default Footer;
