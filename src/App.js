import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useLocalStorage } from './hooks/useLocalStorage';

import 'normalize.css';

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

import { generateSearchParams } from './utils/utils.ts';

const App = () => {
  const [anchor, setAnchor] = useState();
  const sectionRefs = useRef([]);
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('isDarkTheme', false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [highlight, setHighlight] = useState([]);

  // Append the string builder to the window object to aid building of strings
  window.generateSearchParams = generateSearchParams;

  useEffect(() => {
    try {
      const queryObject = JSON.parse(
        decodeURIComponent(searchParams?.get('q'))
      );
      if (queryObject && queryObject?.highlight) {
        setHighlight(queryObject.highlight);
      }
    } catch (err) {
      // console.log('unable to parse search params', err);
    }
  }, [searchParams]);

  const renderProjects = projects
    ?.filter((item) => item.isVisible === true)
    ?.map((item) => (
      <Project
        key={`project-${item.title}`}
        item={item}
        highlight={highlight}
      />
    ));

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
      <div id={anchors.aboutMe.id} ref={(el) => (sectionRefs.current[0] = el)}>
        <AboutMe
          myName={myName}
          myRole={myRole}
          location={location}
          aboutMe={aboutMe}
          socialLinks={socialLinks}
        />
      </div>
      <div
        id={anchors.technologies.id}
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <Technologies
          preferredTechnologies={preferredTechnologies}
          otherTechnologies={otherTechnologies}
          highlight={highlight}
        />
      </div>
      <div id={anchors.projects.id} ref={(el) => (sectionRefs.current[2] = el)}>
        <Projects>{renderProjects}</Projects>
      </div>
      <Footer myName={myName} socialLinks={socialLinks} />
    </ThemeContainer>
  );
};

export default App;
