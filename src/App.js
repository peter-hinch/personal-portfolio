import PortfolioSection from './components/PortfolioSection';
import PortfolioItem from './components/PortfolioItem';
import { preferredTechnologies, portfolioItems } from './portfolioData';
import AboutMe from './components/AboutMe';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Technologies from './components/Technologies';

function App() {
  const renderPortfolioItems = portfolioItems.map((item) => (
    <PortfolioItem item={item} />
  ));

  return (
    <div id="home">
      <Header />
      <Container>
        <AboutMe />
        <Technologies preferredTechnologies={preferredTechnologies} />
        <PortfolioSection>{renderPortfolioItems}</PortfolioSection>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
