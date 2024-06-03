import { anchors } from '../portfolioData';

export const getSortedAnchorsArray = () => {
  // Convert anchors object into an array
  const anchorsAsArray: PortfolioData.Anchor[] = Object.values(anchors);
  // Sort by sequence
  return anchorsAsArray.sort((a, b) => a.sequence - b.sequence);
};
