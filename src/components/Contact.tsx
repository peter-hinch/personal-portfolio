import Container from './layout/Container';
import ContactForm from './layout/ContactForm';
import ParagraphArray from './shared/ParagraphArray';

const Contact: React.FC<{
  id: string;
  contact: string[];
  socialLinks: PortfolioData.SocialLink[];
}> = ({ id, contact, socialLinks }) => {
  const renderProfileLinks = socialLinks.map((link) => (
    <a
      key={`profile-link-${link.platform.simplename}`}
      className="cta-link"
      href={link.url}
    >
      {link.platform.fullname} profile
    </a>
  ));

  return (
    <Container id={id}>
      <h2>Contact</h2>
      <ParagraphArray textArray={contact} />
      <div className="breakout-info">
        <ContactForm />
      </div>
      <div className="cta-links">
        <div className="cta-links--group">{renderProfileLinks}</div>
      </div>
    </Container>
  );
};

export default Contact;
