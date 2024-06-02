import styled from 'styled-components';

const TagsList: React.FC<{ tags: string[] }> = ({ tags }) => {
  const renderTags = tags.map((tag) => (
    <li key={`tags-${tag}`} className="tag">
      {tag}
    </li>
  ));

  return <StyledTagsList className="tags-list">{renderTags}</StyledTagsList>;
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
      padding: 0.25rem 0.75rem 0;
      height: 1.25rem;
      color: var(--theme-on-secondary);
      background: var(--theme-secondary);
      border-radius: 0.75rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export default TagsList;
