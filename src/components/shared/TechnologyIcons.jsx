import { devIconsCdnUrl } from '../../enums';

const TechnologyIcons = ({ technologies }) => (
  <>
    {technologies.map((technology) => (
      <img
        className="tech-icon"
        key={technology.simplename}
        src={`${devIconsCdnUrl}${technology.simplename}/${technology.simplename}${technology.iconSuffix}.svg`}
        alt={technology.simplename}
        height={56}
      />
    ))}
  </>
);

export default TechnologyIcons;
