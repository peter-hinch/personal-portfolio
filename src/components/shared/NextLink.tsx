import styled from 'styled-components';

import { projects } from '../../portfolioData';
import { getSortedAnchorsArray } from '../../utils/utils';

// @ts-ignore
import imgCaret from './../../assets/images/caret.svg';

const visibleProjects = projects?.filter((item) => item.isActive);

const getNextItemIndex: Function = (
  currentItem: PortfolioData.Anchor,
  array: PortfolioData.Anchor[]
) => {
  // Find the index of the current item
  const itemIndex = array.findIndex((item) => item.id === currentItem.id);
  // Return the next item, or first item if the end has been reached
  return itemIndex < array.length - 1 ? itemIndex + 1 : 0;
};

const getNextLinkItem: Function = (anchor = null, project = null) => {
  if (anchor !== null) {
    const anchorsArray = getSortedAnchorsArray();
    const nexItemIndex = getNextItemIndex(anchor, anchorsArray);
    return anchorsArray[nexItemIndex];
  } else if (project !== null) {
    const nexItemIndex = getNextItemIndex(project, visibleProjects);
    return visibleProjects[nexItemIndex];
  }
};

const determineLastItem: Function = (
  anchor?: PortfolioData.Anchor,
  project?: PortfolioData.Project.Item
) => {
  if (anchor !== null) {
    const anchorsArray = getSortedAnchorsArray();
    return getNextItemIndex(anchor, anchorsArray) === 0 ? true : false;
  } else if (project !== null) {
    return getNextItemIndex(project, visibleProjects) === 0 ? true : false;
  }
};

const NextLink: React.FC<{
  anchor?: PortfolioData.Anchor;
  project?: PortfolioData.Project.Item;
}> = ({ anchor = null, project = null }) => {
  const nextLinkItem = getNextLinkItem(anchor, project);
  const isLastastItem = determineLastItem(anchor, project);

  return (
    <StyledNextLink>
      <a
        className={`cta-link cta-link--${!isLastastItem ? 'next' : 'home'}`}
        href={`#${nextLinkItem.id}`}
      >
        {`${!isLastastItem ? 'Next' : 'Back'}: ${nextLinkItem.title}`}
      </a>
    </StyledNextLink>
  );
};

const StyledNextLink = styled.div`
  a {
    &::after {
      display: inline-block;
      position: relative;
      top: 3px;
      height: 18px;
      width: 18px;
      margin-left: 0.5rem;
      content: url(${imgCaret});
    }

    &.cta-link--home::after {
      transform: rotate(-90deg);
    }
  }
`;

export default NextLink;
