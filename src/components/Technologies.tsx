import styled from 'styled-components';

import Container from './layout/Container';
import ParagraphArray from './shared/ParagraphArray';
import TagsList from './shared/TagsList';
import TechnologyIcons from './shared/TechnologyIcons';

const Technologies: React.FC<{
  id: string;
  preferredTechnologies: PortfolioData.PreferredTechnologies;
  otherTechnologies: PortfolioData.OtherTechnologies;
}> = ({ id, preferredTechnologies, otherTechnologies }) => (
  <StyledTechnologies>
    <Container id={id}>
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
    </Container>
  </StyledTechnologies>
);

const StyledTechnologies = styled.div`
  #technologies .breakout-info .tags-list {
    margin-top: 0;
  }
`;

export default Technologies;
