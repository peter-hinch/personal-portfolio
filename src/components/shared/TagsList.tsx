import { useState } from 'react';

import styled from 'styled-components';

const TagsList: React.FC<{
  tags: string[];
  qty?: number;
  highlight?: string[];
}> = ({ tags, qty = 5, highlight = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const orderedTags = [
    ...highlight,
    ...tags.filter((t) => !highlight.includes(t))
  ];
  const remainingTags = orderedTags.slice(qty, tags.length - 1);

  const renderTag = (tag: string) => (
    <li key={`tag-${tag}`} className="tag">
      <div>{tag}</div>
    </li>
  );

  return (
    <StyledTagsList className="tags-list">
      {orderedTags.map((tag, index) => index < qty && renderTag(tag))}
      {remainingTags.length > 0 && (
        <>
          {isExpanded && remainingTags.map((tag) => renderTag(tag))}
          <li key={`tags-expand`} className="tag">
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {!isExpanded ? `+${remainingTags.length} more` : 'show less'}
            </button>
          </li>
        </>
      )}
    </StyledTagsList>
  );
};

const StyledTagsList = styled.ul`
  &.tags-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem 0 0;
    padding-left: 0;
    list-style-type: none;

    li.tag {
      flex-shrink: 0;
      color: var(--theme-on-secondary);
      background: var(--theme-secondary);
      border-radius: 0.5rem;
      user-select: none;

      div,
      button {
        padding: 0.2rem 0.75rem 0.25rem;
      }

      button {
        color: inherit;
        border: none;
        background: transparent;
        cursor: pointer;
      }
    }
  }
`;

export default TagsList;
