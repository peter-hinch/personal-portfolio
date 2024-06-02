import Container from './layout/Container';
import NextLink from './shared/NextLink';

const PortfolioSection: React.FC<{ anchor: Object; children: any }> = ({
  anchor,
  children
}) => {
  return (
    <Container id="portfolio">
      <h2>Portfolio</h2>
      {children}
      <div className="cta-links">
        <div className="cta-links--group"></div>
        <NextLink anchor={anchor} />
      </div>
    </Container>
  );
};

export default PortfolioSection;
