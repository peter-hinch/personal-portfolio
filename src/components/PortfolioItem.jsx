import TechnologyIcon from './shared/TechnologyIcon';
import TagsList from './shared/TagsList';
import ImageCarousel from './shared/ImageCarousel';

const PortfolioItem = ({ item }) => {
  const imagePath = './../assets/portfolio/';

  const renderTechnologies = item.technologies.map((technology) => (
    <TechnologyIcon technology={technology} />
  ));

  const renderLinks = (
    <>
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
    </>
  );

  return (
    <div className="portfolio-item">
      <h3>{item.title}</h3>
      <h4>{item.subtitle}</h4>
      <ImageCarousel path={imagePath} title={item.title} images={item.images} />
      <p>{item.description}</p>
      {renderTechnologies}
      <TagsList tags={item.tags} />
      {renderLinks}
    </div>
  );
};

export default PortfolioItem;
