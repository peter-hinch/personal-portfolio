import styled from 'styled-components';

import SocialLinks from '../shared/SocialLinks';
import ThemeSelector from './ThemeSelector';

const Header: React.FC<{
  id: string;
  myName: string;
  anchors: PortfolioData.Anchor[];
  socialLinks: PortfolioData.SocialLink[];
  isDarkTheme: boolean;
  handleAnchorChange: Function;
  toggleDarkTheme: Function;
}> = ({
  id,
  myName,
  anchors,
  socialLinks,
  isDarkTheme,
  handleAnchorChange,
  toggleDarkTheme
}) => {
  const sortedAnchors = Object.values(anchors)?.sort(
    (a, b) => a.sequence - b.sequence
  );

  const renderHeaderLinks = sortedAnchors
    .filter((anchor) => anchor.showInHeader)
    .map((anchor) => (
      <li key={`header-link-${anchor.id}`}>
        <a href={`#${anchor.id}`} onClick={() => handleAnchorChange(anchor.id)}>
          {anchor.title}
        </a>
      </li>
    ));

  return (
    <StyledHeader>
      <div className="container">
        <nav>
          <div id="header-text-items">
            <h1>
              <a href={`#${id}`} onClick={() => handleAnchorChange(id)}>
                {myName}
              </a>
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
  z-index: 4;

  @media only screen and (max-width: 727px) {
    ul#header-text-links {
      display: none;
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    padding: 0 1.5rem;
    background: var(--theme-primary);
    box-shadow: 0 0.5rem 0.75rem var(--theme-shadow-a),
      0 0.5rem 2rem var(--theme-shadow-b);

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
          gap: 1.25rem;
          align-items: center;
          flex-shrink: 0;

          h1 {
            font-size: 1.5em;
            line-height: 2.25rem;
            margin: 0.25rem 0;
          }
        }

        &text-links {
          display: flex;
        }
        &icons {
          display: flex;
          flex-direction: row;
          align-items: center;
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
