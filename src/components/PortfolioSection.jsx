import Container from './layout/Container';
import NextLink from './shared/NextLink';

const PortfolioSection = ({ anchor, children }) => {
  return (
    <section id="portfolio">
      <Container>
        <h2>Portfolio</h2>
        {children}
        <div className="cta-links">
          <div className="cta-links--group"></div>
          <NextLink anchor={anchor} />
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
