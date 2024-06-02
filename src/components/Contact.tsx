import Container from './layout/Container';
import ContactForm from './layout/ContactForm';
import ParagraphArray from './shared/ParagraphArray';
import NextLink from './shared/NextLink';

const Contact: React.FC<{
  anchor: Object;
  contact: string[];
  socialLinks: Object[];
}> = ({ anchor, contact, socialLinks }) => {
  const renderProfileLinks = socialLinks.map((link) => (
    <a
      key={`profile-link-${link.platform.simplename}`}
      className="cta-link"
      href={link.url}
      alt={link.platform.fullname}
    >
      {link.platform.fullname} profile
    </a>
  ));

  return (
    <Container id="contact">
      <h2>Contact</h2>
      <ParagraphArray textArray={contact} />
      <div className="breakout-info">
        <ContactForm />
      </div>
      <div className="cta-links">
        <div className="cta-links--group">{renderProfileLinks}</div>
        <NextLink anchor={anchor} />
      </div>
    </Container>
  );
};

export default Contact;
