const ParagraphArray = ({ textArray }) => {
  return textArray.map((paragraph, index) => (
    <p key={`paragraph-${index}`}>{paragraph}</p>
  ));
};

export default ParagraphArray;
