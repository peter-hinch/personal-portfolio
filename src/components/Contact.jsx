import Container from './layout/Container';
import ContactForm from './layout/ContactForm';
import ParagraphArray from './shared/ParagraphArray';

const Contact = ({ contact, socialLinks }) => {
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
      </Container>
    </section>
  );
};

export default Contact;
