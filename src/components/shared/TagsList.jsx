const TagsList = ({ tags }) => {
  const renderTags = tags.map((tag) => <li className="tag">{tag}</li>);

  return <ul className="tags-list">{renderTags}</ul>;
};

export default TagsList;
