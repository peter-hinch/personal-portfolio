import Container from './Container';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <Container>
        <nav>
          <ul>
            <li>GitHub</li>
            <li>LinkedIn</li>
          </ul>
          <small>&copy;{currentYear} Peter Hinch, All rights reserved.</small>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
