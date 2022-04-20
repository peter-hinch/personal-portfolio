const PortfolioItem = ({ title, subtitle, technologies }) => {
  const iconCdnUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
  const renderTechnologies = technologies.map((technology) => (
    <span>
      {technology.simplename}
      <img
        src={`${iconCdnUrl}${technology.simplename}/${technology.simplename}${technology.iconSuffix}.svg`}
        alt={technology.simplename}
        height={64}
      />
    </span>
  ));

  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {renderTechnologies}
    </div>
  );
};

export default PortfolioItem;
