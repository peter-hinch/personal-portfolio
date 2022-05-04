import Container from './layout/Container';
import ParagraphArray from './shared/ParagraphArray';
import TagsList from './shared/TagsList';
import TechnologyIcons from './shared/TechnologyIcons';

const Technologies = ({ preferredTechnologies, otherTechnologies }) => (
  <section id="technologies">
    <Container>
      <h2>Technologies</h2>
      <h3>I enjoy working with</h3>
      <ParagraphArray textArray={preferredTechnologies.description} />
      <div className="technologies-info">
        <TechnologyIcons technologies={preferredTechnologies.technologies} />
      </div>
      <h3>As well as</h3>
      <ParagraphArray textArray={otherTechnologies.description} />
      <div className="technologies-info">
        <TagsList tags={otherTechnologies.tags} />
      </div>
    </Container>
  </section>
);

export default Technologies;
