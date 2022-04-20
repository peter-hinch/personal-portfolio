import PortfolioSection from './components/PortfolioSection';
import PortfolioItem from './components/PortfolioItem';
import { portfolioItems } from './portfolioData';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/layout/Container';
import Technologies from './components/Technologies';

function App() {
  const renderPortfolioItems = portfolioItems.map((item) => (
    <PortfolioItem item={item} />
  ));

  return (
    <div id="home">
      <Navbar />
      <Container>
        <AboutMe />
        <Technologies />
        <PortfolioSection>{renderPortfolioItems}</PortfolioSection>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
