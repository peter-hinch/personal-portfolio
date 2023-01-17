import Container from './layout/Container';
import ParagraphArray from './shared/ParagraphArray';

const AboutMe = ({ myName, myRole, location, aboutMe, socialLinks }) => {
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
        <h1>
          Hello!
          <br />
          I'm {myName},
          <br />a {myRole}
          <br />
          based in {location.city}, {location.country}.
        </h1>
        <ParagraphArray textArray={aboutMe} />
        <div className="cta-links">{renderProfileLinks}</div>
      </Container>
    </section>
  );
};

export default AboutMe;
