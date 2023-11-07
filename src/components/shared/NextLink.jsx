import { anchors } from '../../portfolioData';

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
  return <a href={`#${nextAnchor.id}`}>{`${nextAnchor.title} >>`}</a>;
};

export default NextLink;
