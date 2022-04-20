import PortfolioSection from './components/PortfolioSection';
import PortfolioItem from './components/PortfolioItem';
import { portfolioItems } from './portfolioData';

function App() {
  const renderPortfolioItems = portfolioItems.map((item) => (
    <PortfolioItem item={item} />
  ));

  return <PortfolioSection>{renderPortfolioItems}</PortfolioSection>;
}

export default App;
