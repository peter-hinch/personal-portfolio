import { anchors } from '../portfolioData';

export const getSortedAnchorsArray = () => {
  // Convert anchors object into an array
  const anchorsAsArray = [];
  for (var key in anchors) {
    anchorsAsArray.push(anchors[key]);
  }
  // Sort by sequence
  return anchorsAsArray.sort((a, b) => a.sequence > b.sequence);
};
