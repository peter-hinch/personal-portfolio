import { preferredTechnologies, portfolioItems } from './portfolioData';
import Container from './components/layout/Container';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import PortfolioSection from './components/PortfolioSection';
import PortfolioItem from './components/PortfolioItem';
import Contact from './components/Contact';

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
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
