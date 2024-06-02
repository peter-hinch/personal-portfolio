import SocialLinks from '../shared/SocialLinks.tsx';

const currentYear = new Date().getFullYear();

const Footer: React.FC<{ myName: string; socialLinks: Object[] }> = ({
  myName,
  socialLinks
}) => {
  return (
    <footer>
      <nav>
        <SocialLinks myName={myName} socialLinks={socialLinks} />
      </nav>
      <small>
        &copy;{currentYear} {myName}, All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
