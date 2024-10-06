import styled from 'styled-components';

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
    <StyledHeader>
      <div className="container">
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
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 3rem;
  background: var(--theme-primary);
  z-index: 200;

  h1 {
    font-size: 1.5em;
    line-height: 2.25rem;
    margin: 0.25rem 1.5rem 0 0;
  }

  .container {
    display: flex;
    flex-direction: row;

    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      width: 100%;

      #header- {
        &text-items {
          display: flex;
          flex-direction: row;
          align-items: baseline;
          flex-shrink: 0;
        }
        &icons {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          flex-shrink: 0;

          ul {
            align-items: center;
          }
        }
      }
    }
  }
`;

export default Header;
