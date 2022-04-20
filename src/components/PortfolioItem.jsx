const PortfolioItem = ({ title, subtitle, description, technologies }) => {
  const iconCdnUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
  const renderTechnologies = technologies.map((technology) => (
    <span>
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
      <p>{description}</p>
      {renderTechnologies}
    </div>
  );
};

export default PortfolioItem;
