import Container from './layout/Container';
import TechnologyIcons from './shared/TechnologyIcons';

const Technologies = ({ preferredTechnologies }) => (
  <section id="technologies">
    <Container>
      <h2>Technologies</h2>
      <h3>Preferred Technologies</h3>
      <div className="technologies-info">
        <TechnologyIcons technologies={preferredTechnologies.technologies} />
      </div>
      <h3>Other Experience</h3>
    </Container>
  </section>
);

export default Technologies;
