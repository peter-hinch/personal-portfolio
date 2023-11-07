import { anchors } from '../../portfolioData';

import styled from 'styled-components';

import imgCaret from './../../assets/images/caret.svg';

// TODO: Find next anchor in sequence.
const getNextAnchor = (anchor) => {
  // Convert anchors object into an array
  const anchorsAsArray = [];
  for (var key in anchors) {
    anchorsAsArray.push(anchors[key]);
  }
  // Sort by sequence
  const sortedAnchorsArray = anchorsAsArray.sort(
    (a, b) => a.sequence > b.sequence
  );
  // Find index of the current anchor
  const anchorIndex = sortedAnchorsArray.findIndex(
    (item) => item.sequence === anchor.sequence
  );
  // Return next anchor, or a link to the first anchor
  // if the end has been reached
  if (anchorIndex < sortedAnchorsArray.length - 1) {
    return sortedAnchorsArray[anchorIndex + 1];
  } else {
    return sortedAnchorsArray[0];
  }
};

const NextLink = ({ anchor }) => {
  const nextAnchor = getNextAnchor(anchor);
  return (
    <StyledNextLink>
      <a
        className={`cta-link cta-link--${
          nextAnchor.sequence !== 0 ? 'next' : 'home'
        }`}
        href={`#${nextAnchor.id}`}
      >
        {nextAnchor.title}
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
      transform: rotate(90deg);
    }

    &.cta-link--home::after {
      transform: rotate(-90deg);
    }
  }
`;

export default NextLink;
