const PortfolioItem = ({ title, subtitle, technologies }) => {
  const renderTechnologies = technologies.map((technology) => (
    <span>{technology}</span>
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
