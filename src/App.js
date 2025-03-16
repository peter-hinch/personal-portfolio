import 'normalize.css';

import { useState } from 'react';
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
import MiniNav from './components/layout/MiniNav.tsx';

const App = () => {
  const [anchor, setAnchor] = useState();

  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('isDarkTheme', false);

  const renderProjects = projects
    ?.filter((item) => item.isActive === true)
    ?.map((item) => <Project key={`project-${item.title}`} item={item} />);

  const toggleDarkTheme = (value) => {
    setIsDarkTheme(value !== undefined ? value : !isDarkTheme);
  };

  return (
    <ThemeContainer isDarkTheme={isDarkTheme}>
      <Header
        id={anchors.header.id}
        myName={myName}
        anchors={anchors}
        socialLinks={socialLinks}
        isDarkTheme={isDarkTheme}
        handleAnchorChange={setAnchor}
        toggleDarkTheme={toggleDarkTheme}
      />
      <AboutMe
        id={anchors.aboutMe.id}
        myName={myName}
        myRole={myRole}
        location={location}
        aboutMe={aboutMe}
        socialLinks={socialLinks}
      />
      <Technologies
        id={anchors.technologies.id}
        preferredTechnologies={preferredTechnologies}
        otherTechnologies={otherTechnologies}
      />
      <Projects id={anchors.projects.id}>{renderProjects}</Projects>
      <MiniNav
        anchors={anchors}
        projects={projects}
        anchor={anchor}
        handleAnchorChange={setAnchor}
      />
      <Footer myName={myName} socialLinks={socialLinks} />
    </ThemeContainer>
  );
};

export default App;
