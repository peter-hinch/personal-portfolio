import 'normalize.css';

import { useLocalStorage } from './hooks/useLocalStorage';

import ThemeContainer from './components/layout/ThemeContainer.tsx';
import Header from './components/layout/Header.tsx';
import Footer from './components/layout/Footer.tsx';
import AboutMe from './components/AboutMe.tsx';
import Technologies from './components/Technologies.tsx';
import Projects from './components/Projects.tsx';
import Project from './components/Project.tsx';
import {
  myName,
  myRole,
  location,
  anchors,
  aboutMe,
  preferredTechnologies,
  otherTechnologies,
  projects,
  socialLinks
} from './portfolioData.ts';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('isDarkTheme', false);

  const renderPortfolioItems = projects
    ?.filter((item) => item.isActive === true)
    ?.map((item) => <Project key={`project-${item.title}`} item={item} />);

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
      <Projects anchor={anchors.projects}>{renderPortfolioItems}</Projects>
      <Footer myName={myName} socialLinks={socialLinks} />
    </ThemeContainer>
  );
};

export default App;
