import { devIconsCdnUrl } from '../../enums';

const TechnologyIcon = ({ technology }) => {
  return (
    <img
      className="tech-icon"
      src={`${devIconsCdnUrl}${technology.simplename}/${technology.simplename}${technology.iconSuffix}.svg`}
      alt={technology.simplename}
      height={56}
    />
  );
};

export default TechnologyIcon;
