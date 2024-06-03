import SocialLinks from '../shared/SocialLinks';
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

const Header: React.FC<{
  anchor: PortfolioData.Anchor;
  myName: string;
  socialLinks: PortfolioData.SocialLink[];
  isDarkTheme: boolean;
  toggleDarkTheme: Function;
}> = ({ anchor, myName, socialLinks, isDarkTheme, toggleDarkTheme }) => {
  return (
    <header>
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
          <SocialLinks myName={myName} socialLinks={socialLinks} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
