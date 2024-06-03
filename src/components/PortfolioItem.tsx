import TechnologyIcons from './shared/TechnologyIcons';
import TagsList from './shared/TagsList';
import ImageCarousel from './shared/ImageCarousel';
import NextLink from './shared/NextLink';

const PortfolioItem: React.FC<{ item: PortfolioData.PortfolioItem.Item }> = ({
  item
}) => {
  const renderLinks = (
    <>
      {item.liveUrl !== undefined && (
        <a className="cta-link" href={item.liveUrl} title="Visit the live site">
          Visit live site
        </a>
      )}
      {item.sourceUrl !== undefined && (
        <a
          className="cta-link"
          href={item.sourceUrl}
          title="View the source code on GitHub"
        >
          View source code
        </a>
      )}
    </>
  );

  return (
    <div id={item.id ?? 'portfolio-item'} className="portfolio-item">
      <h3>{item.title}</h3>
      <h4>{item.subtitle}</h4>
      <ImageCarousel title={item.title} images={item.images} />
      <p>{item.description}</p>
      <div className="breakout-info">
        <TechnologyIcons technologies={item.technologies} size={3.5} />
        <TagsList tags={item.tags} />
      </div>
      <div className="cta-links">
        <div className="cta-links--group">{renderLinks}</div>
        <NextLink portfolioItem={item} />
      </div>
    </div>
  );
};

export default PortfolioItem;
