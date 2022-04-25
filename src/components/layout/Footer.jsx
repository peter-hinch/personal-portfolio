import Container from './Container';
import { devIconsCdnUrl } from '../../enums';

const currentYear = new Date().getFullYear();

const Footer = ({ socialLinks }) => {
  const renderSocialLinks = socialLinks.map((link) => (
    <li>
      <a href={link.url}>
        <img
          src={`${devIconsCdnUrl}${link.platform.simplename}/${link.platform.simplename}${link.platform.iconSuffix}.svg`}
          alt={link.platform.fullname}
          height={30}
        />
      </a>
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
