import TechnologyIcons from './shared/TechnologyIcons';
import TagsList from './shared/TagsList';
import ImageCarousel from './shared/ImageCarousel';

const PortfolioItem = ({ item }) => {
  const imagePath = './../assets/portfolio/';

  const renderLinks = (
    <div className="portfolio-links">
      {item.liveUrl !== undefined && (
        <a
          className="portfolio-link"
          href={item.liveUrl}
          alt="Visit the live site"
          title="Visit the live site"
        >
          Live Site
        </a>
      )}
      {item.sourceUrl !== undefined && (
        <a
          className="portfolio-link"
          href={item.sourceUrl}
          alt="View the source code on GitHub"
          title="View the source code on GitHub"
        >
          Source Code
        </a>
      )}
    </div>
  );

  return (
    <div className="portfolio-item">
      <h3>{item.title}</h3>
      <h4>{item.subtitle}</h4>
      <ImageCarousel path={imagePath} title={item.title} images={item.images} />
      <p>{item.description}</p>
      {renderLinks}
      <div className="technologies-info">
        <TechnologyIcons technologies={item.technologies} />
        <TagsList tags={item.tags} />
      </div>
    </div>
  );
};

export default PortfolioItem;
