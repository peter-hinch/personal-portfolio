import styled from 'styled-components';

// @ts-ignore
import imgCaret from './../../assets/images/caret.svg';

const MiniNav: React.FC<{
  anchors?: PortfolioData.Anchor[];
  projects?: PortfolioData.Project.Item[];
  anchor?: string;
  handleAnchorChange: Function;
}> = ({ anchors = [], projects = [], anchor = '', handleAnchorChange }) => {
  const sortedAnchors = Object.values(anchors)?.sort(
    (a, b) => a.sequence - b.sequence
  );
  const visibleProjects = projects?.filter((item) => item.isActive);
  const isProject = [...visibleProjects?.map((_) => _.id), 'projects'].includes(
    anchor
  );

  const renderLink = (
    item: PortfolioData.Anchor | PortfolioData.Project.Item
  ) => (
    <li>
      <a
        className={`mini-nav-link mini-nav-link--${item.id}`}
        href={`#${item.id}`}
        onClick={() => handleAnchorChange(item.id)}
      >
        {item.title}
      </a>
    </li>
  );

  return (
    <StyledMiniNav>
      <div className="container">
        <nav>
          <ul>
            {isProject && renderLink(visibleProjects[0])}
            {renderLink(sortedAnchors[0])}
          </ul>
        </nav>
      </div>
    </StyledMiniNav>
  );
};

const StyledMiniNav = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 4;

  .container {
    padding: 0 1.5rem;
    box-shadow: none;

    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;

      ul {
        margin-right: -1.5rem;
        padding: 0 1.5rem;
        width: fit-content;
        background: var(--theme-primary);
        border-radius: 0%.125rem;
        box-shadow: 0 0.5rem 0.75rem var(--theme-shadow-a),
          0 0.5rem 2rem var(--theme-shadow-b);

        li {
          display: flex;
          align-items: center;
          padding: 0.25rem;

          a {
            &::after {
              display: inline-block;
              position: relative;
              top: 3px;
              height: 18px;
              width: 18px;
              margin-left: 0.5rem;
              content: url(${imgCaret});
              /* transform: rotate(90deg); */
            }
          }
        }
      }
    }
  }
`;

export default MiniNav;
