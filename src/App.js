import PortfolioSection from './components/PortfolioSection';
import PortfolioItem from './components/PortfolioItem';

const portfolioItems = [
  {
    heading: 'RemoteSpot'
  },
  {
    heading: 'React Todo List'
  },
  {
    heading: 'Web Audio API Piano'
  },
  {
    heading: 'SD Perfumery'
  }
];

function App() {
  const renderPortfolioItems = portfolioItems.map((item) => (
    <PortfolioItem heading={item.heading} />
  ));

  return <PortfolioSection>{renderPortfolioItems}</PortfolioSection>;
}

export default App;
