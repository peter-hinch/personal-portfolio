import Container from './layout/Container';
import TagsList from './shared/TagsList';
import TechnologyIcons from './shared/TechnologyIcons';

const Technologies = ({ preferredTechnologies, otherTechnologies }) => (
  <section id="technologies">
    <Container>
      <h2>Technologies</h2>
      <h3>I can work with these</h3>
      <div className="technologies-info">
        <TechnologyIcons technologies={preferredTechnologies.technologies} />
      </div>
      <h3>As well as these</h3>
      <div className="technologies-info">
        <TagsList tags={otherTechnologies.tags} />
      </div>
    </Container>
  </section>
);

export default Technologies;
