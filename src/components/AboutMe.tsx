import Container from './layout/Container';
import NextLink from './shared/NextLink';
import ParagraphArray from './shared/ParagraphArray';

const AboutMe: React.FC<{
  anchor: PortfolioData.Anchor;
  myName: string;
  myRole: string;
  location: PortfolioData.Location;
  aboutMe: string[];
  socialLinks: PortfolioData.SocialLink[];
}> = ({ anchor, myName, myRole, location, aboutMe, socialLinks }) => {
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
    <Container id={anchor.id}>
      <h1>
        Hello!
        <br />
        I'm {myName},
        <br />a {myRole}
        <br />
        based in {location.city}, {location.country}.
      </h1>
      <ParagraphArray textArray={aboutMe} />
      <div className="cta-links">
        <div className="cta-links--group">{renderProfileLinks}</div>
        <NextLink anchor={anchor} />
      </div>
    </Container>
  );
};

export default AboutMe;
