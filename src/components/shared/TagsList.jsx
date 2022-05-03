const TagsList = ({ tags }) => {
  const renderTags = tags.map((tag) => <li>{tag}</li>);

  return <ul>{renderTags}</ul>;
};

export default TagsList;
