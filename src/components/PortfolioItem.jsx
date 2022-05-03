import TechnologyIcon from './shared/TechnologyIcon';
import TagsList from './shared/TagsList';
import ImageCarousel from './shared/ImageCarousel';

const PortfolioItem = ({ item }) => {
  const renderTechnologies = item.technologies.map((technology) => (
    <TechnologyIcon technology={technology} />
  ));

  return (
    <div className="portfolio-item">
      <h3>{item.title}</h3>
      <h4>{item.subtitle}</h4>
      <ImageCarousel title={item.title} images={item.images} />
      <p>{item.description}</p>
      {renderTechnologies}
      <TagsList tags={item.tags} />
    </div>
  );
};

export default PortfolioItem;
