import Container from './layout/Container';
import ParagraphArray from './shared/ParagraphArray';

const AboutMe = ({ myName, location, aboutMe, socialLinks }) => {
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
    <section id="about-me">
      <Container>
        <h2>{`Hello! I'm ${myName}, a Frontend Developer from ${location.city}, ${location.country}.`}</h2>
        <ParagraphArray textArray={aboutMe} />
        <div className="cta-links">{renderProfileLinks}</div>
      </Container>
    </section>
  );
};

export default AboutMe;
