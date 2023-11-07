import Container from './layout/Container';
import NextLink from './shared/NextLink';

const PortfolioSection = ({ anchor, children }) => {
  return (
    <section id="portfolio">
      <Container>
        <h2>Portfolio</h2>
        {children}
        <NextLink anchor={anchor} />
      </Container>
    </section>
  );
};

export default PortfolioSection;
