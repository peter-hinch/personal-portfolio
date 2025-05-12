// Sorts an array of strings or technologies, bringing highlighted items to the
// beginning of the array
export const showHighlightsFirst = (list: any[], highlight: string[]) => {
  if (!highlight?.length) return list;
  return list?.sort((a, b) => {
    const aIsHighlighted =
      highlight.includes(a) || highlight.includes(a.fullname);
    const bIsHighlighted =
      highlight.includes(b) || highlight.includes(b.fullname);

    if (aIsHighlighted && !bIsHighlighted) return -1; // `a` comes first
    if (!aIsHighlighted && bIsHighlighted) return 1; // `b` comes first
    return 0; // Keep original order if both are highlighted or neither is
  });
};

// Generates a query string in the format expected by the app
export const generateSearchParams = (highlight: string[]) =>
  `q=${encodeURIComponent(JSON.stringify({ highlight }))}`;
