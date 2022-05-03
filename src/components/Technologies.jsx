import Container from './layout/Container';
import TechnologyIcon from './shared/TechnologyIcon';

const Technologies = ({ preferredTechnologies }) => {
  const renderPreferredTechnologies = preferredTechnologies.technologies.map(
    (technology) => <TechnologyIcon technology={technology} />
  );

  return (
    <section id="technologies">
      <Container>
        <h2>Technologies</h2>
        <h3>Preferred Technologies</h3>
        <div>{renderPreferredTechnologies}</div>
        <h3>Other Experience</h3>
      </Container>
    </section>
  );
};

export default Technologies;
