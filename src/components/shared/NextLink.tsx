import styled from 'styled-components';

import { portfolioItems } from '../../portfolioData';
import { getSortedAnchorsArray } from '../../utils/utils';

import imgCaret from './../../assets/images/caret.svg';

const getNextItemIndex: Function = (referenceItem, array) => {
  // Find the index of the current item
  const itemIndex = array.findIndex((item) => item.id === referenceItem.id);
  // Return the next item, or first item if the end has been reached
  return itemIndex < array.length - 1 ? itemIndex + 1 : 0;
};

const getNextLinkItem: Function = (anchor, portfolioItem) => {
  if (anchor !== null) {
    const anchorsArray = getSortedAnchorsArray();
    const nexItemIndex = getNextItemIndex(anchor, anchorsArray);
    return anchorsArray[nexItemIndex];
  } else if (portfolioItem !== null) {
    const nexItemIndex = getNextItemIndex(portfolioItem, portfolioItems);
    return portfolioItems[nexItemIndex];
  }
};

const determineLastItem: Function = (anchor, portfolioItem) => {
  if (anchor !== null) {
    const anchorsArray = getSortedAnchorsArray(anchor);
    return getNextItemIndex(anchor, anchorsArray) === 0 ? true : false;
  } else if (portfolioItem !== null) {
    return getNextItemIndex(portfolioItem, portfolioItems) === 0 ? true : false;
  }
};

const NextLink: React.FC<{ anchor: Object; portfolioItem: Object }> = ({
  anchor = null,
  portfolioItem = null
}) => {
  const nextLinkItem = getNextLinkItem(anchor, portfolioItem);
  const isLastastItem = determineLastItem(anchor, portfolioItem);

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
