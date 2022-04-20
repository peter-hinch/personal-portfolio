import PortfolioSection from './components/PortfolioSection';
import PortfolioItem from './components/PortfolioItem';
import { Technologies } from './enums';

const portfolioItems = [
  {
    title: 'RemoteSpot',
    subtitle: 'Ratings application in React',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.HTML5,
      Technologies.CSS3
    ]
  },
  {
    title: 'Todo List',
    subtitle: 'Notetaking application in React',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.HTML5,
      Technologies.CSS3
    ]
  },
  {
    title: 'Piano',
    subtitle: 'An exercise in using the Web Audio API',
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.HTML5,
      Technologies.CSS3
    ]
  },
  {
    title: 'SD Perfumery',
    subtitle: 'Storefront developed using .NET MVC',
    technologies: [
      Technologies.CSHARP,
      Technologies.DOT_NET,
      Technologies.MICROSOFTSQLSERVER,
      Technologies.BOOTSTRAP,
      Technologies.HTML5,
      Technologies.CSS3
    ]
  }
];

function App() {
  const renderPortfolioItems = portfolioItems.map((item) => (
    <PortfolioItem
      title={item.title}
      subtitle={item.subtitle}
      technologies={item.technologies}
    />
  ));

  return <PortfolioSection>{renderPortfolioItems}</PortfolioSection>;
}

export default App;
