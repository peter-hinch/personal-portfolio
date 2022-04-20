import PortfolioSection from './components/PortfolioSection';
import PortfolioItem from './components/PortfolioItem';
import { portfolioItems } from './portfolioData';

function App() {
  const renderPortfolioItems = portfolioItems.map((item) => (
    <PortfolioItem
      title={item.title}
      subtitle={item.subtitle}
      description={item.description}
      technologies={item.technologies}
    />
  ));

  return <PortfolioSection>{renderPortfolioItems}</PortfolioSection>;
}

export default App;
