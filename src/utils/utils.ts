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
