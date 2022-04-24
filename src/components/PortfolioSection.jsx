import Container from './layout/Container';

const PortfolioSection = ({ children }) => {
  return (
    <section id="portfolio">
      <Container>
        <h2>Portfolio</h2>
        {children}
      </Container>
    </section>
  );
};

export default PortfolioSection;
