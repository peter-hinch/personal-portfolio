import styled from 'styled-components';

import Container from './layout/Container';
import ParagraphArray from './shared/ParagraphArray';
import TagsList from './shared/TagsList';
import TechnologyIcons from './shared/TechnologyIcons';
import NextLink from './shared/NextLink';

const Technologies: React.FC<{
  anchor: PortfolioData.Anchor;
  preferredTechnologies: PortfolioData.PreferredTechnologies;
  otherTechnologies: PortfolioData.OtherTechnologies;
}> = ({ anchor, preferredTechnologies, otherTechnologies }) => (
  <StyledTechnologies>
    <Container id="technologies">
      <h2>Technologies</h2>
      <h3>{preferredTechnologies.heading}</h3>
      <ParagraphArray textArray={preferredTechnologies.description} />
      <div className="breakout-info">
        <TechnologyIcons
          technologies={preferredTechnologies.technologies}
          size={5}
        />
      </div>
      <h3>{otherTechnologies.heading}</h3>
      <ParagraphArray textArray={otherTechnologies.description} />
      <div className="breakout-info">
        <TagsList tags={otherTechnologies.tags} />
      </div>
      <div className="cta-links">
        <div className="cta-links--group"></div>
        <NextLink anchor={anchor} />
      </div>
    </Container>
  </StyledTechnologies>
);

const StyledTechnologies = styled.div`
  #technologies .breakout-info .tags-list {
    margin-top: 0;
  }
`;

export default Technologies;
