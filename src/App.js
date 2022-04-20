import PortfolioSection from './components/PortfolioSection';
import PortfolioItem from './components/PortfolioItem';
import { Technologies } from './enums';

const portfolioItems = [
  {
    title: 'RemoteSpot',
    subtitle: 'Ratings application in React',
    technologies: [Technologies.JAVASCRIPT, Technologies.REACT]
  },
  {
    title: 'React Todo List',
    subtitle: '',
    technologies: [Technologies.JAVASCRIPT, Technologies.REACT]
  },
  {
    title: 'Web Audio API Piano',
    subtitle: '',
    technologies: [Technologies.JAVASCRIPT]
  },
  {
    title: 'SD Perfumery',
    subtitle: '',
    technologies: [
      Technologies.CSHARP,
      Technologies.MICROSOFTSQLSERVER,
      Technologies.BOOTSTRAP
    ]
  }
];

function App() {
  const renderPortfolioItems = portfolioItems.map((item) => (
    <PortfolioItem title={item.title} />
  ));

  return <PortfolioSection>{renderPortfolioItems}</PortfolioSection>;
}

export default App;
