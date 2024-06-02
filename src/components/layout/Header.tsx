import SocialLinks from '../shared/SocialLinks';
import Container from './Container';
import ThemeSelector from './ThemeSelector';

import { getSortedAnchorsArray } from '../../utils/utils';

const anchors = getSortedAnchorsArray();

const renderHeaderLinks = anchors
  .filter((anchor) => anchor.showInHeader)
  .map((anchor) => (
    <li key={`header-link-${anchor.id}`}>
      <a href={`#${anchor.id}`}>{anchor.title}</a>
    </li>
  ));

const Header = ({
  anchor,
  myName,
  socialLinks,
  isDarkTheme,
  toggleDarkTheme
}) => {
  return (
    <header>
      <Container>
        <nav>
          <div id="header-text-items">
            <h1>
              <a href={`#${anchor.id}`}>{myName}</a>
            </h1>
            <ul id="header-text-links">{renderHeaderLinks}</ul>
          </div>
          <div id="header-icons">
            <ThemeSelector
              isDarkTheme={isDarkTheme}
              toggleDarkTheme={toggleDarkTheme}
            />
            <SocialLinks name={myName} socialLinks={socialLinks} />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
