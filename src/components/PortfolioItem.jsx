const iconCdnUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

const PortfolioItem = ({ item }) => {
  const renderTechnologies = item.technologies.map((technology) => (
    <span>
      <img
        src={`${iconCdnUrl}${technology.simplename}/${technology.simplename}${technology.iconSuffix}.svg`}
        alt={technology.simplename}
        height={64}
      />
    </span>
  ));

  return (
    <div className="portfolio-item">
      <h3>{item.title}</h3>
      <h4>{item.subtitle}</h4>
      <p>{item.description}</p>
      {renderTechnologies}
    </div>
  );
};

export default PortfolioItem;
