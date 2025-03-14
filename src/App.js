import 'normalize.css';

import { useLocalStorage } from './hooks/useLocalStorage';

import ThemeContainer from './components/layout/ThemeContainer.tsx';
import Header from './components/layout/Header.tsx';
import Footer from './components/layout/Footer.tsx';
import AboutMe from './components/AboutMe.tsx';
import Technologies from './components/Technologies.tsx';
import PortfolioSection from './components/PortfolioSection.tsx';
import PortfolioItem from './components/PortfolioItem.tsx';
import Contact from './components/Contact.tsx';
import {
  myName,
  myRole,
  location,
  anchors,
  aboutMe,
  contact,
  preferredTechnologies,
  otherTechnologies,
  portfolioItems,
  socialLinks
} from './portfolioData.ts';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('isDarkTheme', false);

  const renderPortfolioItems = portfolioItems
    ?.filter((item) => item.isActive === true)
    ?.map((item) => (
      <PortfolioItem key={`portfolio-item-${item.title}`} item={item} />
    ));

  const toggleDarkTheme = (value) => {
    if (value !== undefined) {
      setIsDarkTheme(value);
    } else {
      // Allow to function as a toggle
      setIsDarkTheme(!isDarkTheme);
    }
  };

  return (
    <ThemeContainer isDarkTheme={isDarkTheme}>
      <Header
        anchor={anchors.header}
        myName={myName}
        location={location}
        socialLinks={socialLinks}
        isDarkTheme={isDarkTheme}
        toggleDarkTheme={toggleDarkTheme}
      />
      <AboutMe
        anchor={anchors.aboutMe}
        myName={myName}
        myRole={myRole}
        location={location}
        aboutMe={aboutMe}
        socialLinks={socialLinks}
      />
      <Technologies
        anchor={anchors.technologies}
        preferredTechnologies={preferredTechnologies}
        otherTechnologies={otherTechnologies}
      />
      <PortfolioSection anchor={anchors.portfolio}>
        {renderPortfolioItems}
      </PortfolioSection>
      <Footer myName={myName} socialLinks={socialLinks} />
    </ThemeContainer>
  );
};

export default App;
