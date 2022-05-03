import Container from './layout/Container';
import { devIconsCdnUrl } from '../enums';

const Technologies = ({ preferredTechnologies }) => {
  const renderPreferredTechnologies = preferredTechnologies.technologies.map(
    (technology) => (
      <span>
        <img
          src={`${devIconsCdnUrl}${technology.simplename}/${technology.simplename}${technology.iconSuffix}.svg`}
          alt={technology.simplename}
          height={64}
        />
      </span>
    )
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
