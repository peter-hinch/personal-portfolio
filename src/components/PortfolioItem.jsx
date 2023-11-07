import TechnologyIcons from './shared/TechnologyIcons';
import TagsList from './shared/TagsList';
import ImageCarousel from './shared/ImageCarousel';
import NextLink from './shared/NextLink';

const PortfolioItem = ({ item }) => {
  const renderLinks = (
    <>
      {item.liveUrl !== undefined && (
        <a
          className="cta-link"
          href={item.liveUrl}
          alt="Visit the live site"
          title="Visit the live site"
        >
          Visit live site
        </a>
      )}
      {item.sourceUrl !== undefined && (
        <a
          className="cta-link"
          href={item.sourceUrl}
          alt="View the source code on GitHub"
          title="View the source code on GitHub"
        >
          View source code
        </a>
      )}
    </>
  );

  return (
    <div id={item.id ?? item.id} className="portfolio-item">
      <h3>{item.title}</h3>
      <h4>{item.subtitle}</h4>
      <ImageCarousel title={item.title} images={item.images} />
      <p>{item.description}</p>
      <div className="cta-links">
        <div className="cta-links--group">{renderLinks}</div>
        <NextLink portfolioItem={item} />
      </div>
      <div className="breakout-info">
        <TechnologyIcons technologies={item.technologies} />
        <TagsList tags={item.tags} />
      </div>
    </div>
  );
};

export default PortfolioItem;
