import { useLocalStorage } from './hooks/useLocalStorage';
import ThemeContainer from './components/layout/ThemeContainer';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import PortfolioSection from './components/PortfolioSection';
import PortfolioItem from './components/PortfolioItem';
import Contact from './components/Contact';
import {
  myName,
  myRole,
  location,
  aboutMe,
  contact,
  preferredTechnologies,
  otherTechnologies,
  portfolioItems,
  socialLinks
} from './portfolioData';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('isDarkTheme', false);

  const renderPortfolioItems = portfolioItems.map((item) => (
    <PortfolioItem key={`portfolio-item-${item.title}`} item={item} />
  ));

  const toggleDarkTheme = (event) => {
    setIsDarkTheme(event.target.checked);
  };

  return (
    <ThemeContainer isDarkTheme={isDarkTheme}>
      <Header
        myName={myName}
        location={location}
        socialLinks={socialLinks}
        isDarkTheme={isDarkTheme}
        toggleDarkTheme={toggleDarkTheme}
      />
      <AboutMe
        myName={myName}
        myRole={myRole}
        location={location}
        aboutMe={aboutMe}
        socialLinks={socialLinks}
      />
      <Technologies
        preferredTechnologies={preferredTechnologies}
        otherTechnologies={otherTechnologies}
      />
      <PortfolioSection>{renderPortfolioItems}</PortfolioSection>
      <Contact contact={contact} socialLinks={socialLinks} />
      <Footer myName={myName} socialLinks={socialLinks} />
    </ThemeContainer>
  );
};

export default App;
