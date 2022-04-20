import PortfolioSection from './components/PortfolioSection';
import PortfolioItem from './components/PortfolioItem';
import { portfolioItems } from './portfolioData';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/layout/Container';

function App() {
  const renderPortfolioItems = portfolioItems.map((item) => (
    <PortfolioItem item={item} />
  ));

  return (
    <>
      <Navbar />
      <Container>
        <AboutMe />
        <PortfolioSection>{renderPortfolioItems}</PortfolioSection>
      </Container>
      <Footer />
    </>
  );
}

export default App;
