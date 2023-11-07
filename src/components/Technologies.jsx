import Container from './layout/Container';
import ParagraphArray from './shared/ParagraphArray';
import TagsList from './shared/TagsList';
import TechnologyIcons from './shared/TechnologyIcons';
import NextLink from './shared/NextLink';

const Technologies = ({ anchor, preferredTechnologies, otherTechnologies }) => (
  <section id="technologies">
    <Container>
      <h2>Technologies</h2>
      <h3>{preferredTechnologies.heading}</h3>
      <ParagraphArray textArray={preferredTechnologies.description} />
      <div className="breakout-info">
        <TechnologyIcons technologies={preferredTechnologies.technologies} />
      </div>
      <h3>{otherTechnologies.heading}</h3>
      <ParagraphArray textArray={otherTechnologies.description} />
      <div className="breakout-info">
        <TagsList tags={otherTechnologies.tags} />
      </div>
      <NextLink anchor={anchor} />
    </Container>
  </section>
);

export default Technologies;
