import React from 'react';

import styled from 'styled-components';

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
    >
      {link.platform.fullname} profile
    </a>
  ));

  return (
    <Container id={anchor.id}>
      <StyledHeading>
        <span>Welcome.</span>
        <span>My name is {myName},</span>
        <span>I am a {myRole}</span>
        <span>
          based in {location.city}, {location.country}.
        </span>
      </StyledHeading>
      <ParagraphArray textArray={aboutMe} />
      <div className="cta-links">
        <div className="cta-links--group">{renderProfileLinks}</div>
        <NextLink anchor={anchor} />
      </div>
    </Container>
  );
};

const StyledHeading = styled.h1`
  display: flex;
  flex-direction: column;
`;

export default AboutMe;
