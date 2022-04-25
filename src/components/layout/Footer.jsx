import Container from './Container';

const currentYear = new Date().getFullYear();

const Footer = ({ socialLinks }) => {
  const renderSocialLinks = socialLinks.map((link) => (
    <li>
      <a href={link.url}>{link.platform.fullname}</a>
    </li>
  ));

  return (
    <footer>
      <Container>
        <nav>
          <ul>{renderSocialLinks}</ul>
          <small>&copy;{currentYear} Peter Hinch, All rights reserved.</small>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
