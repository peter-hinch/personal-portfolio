import Container from './layout/Container';
import ContactForm from './layout/ContactForm';
import ParagraphArray from './shared/ParagraphArray';
import NextLink from './shared/NextLink';

const Contact = ({ anchor, contact, socialLinks }) => {
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
    <section id="contact">
      <Container>
        <h2>Contact</h2>
        <ParagraphArray textArray={contact} />
        <div className="breakout-info">
          <ContactForm />
        </div>
        <div className="cta-links">{renderProfileLinks}</div>
        <NextLink anchor={anchor} />
      </Container>
    </section>
  );
};

export default Contact;
