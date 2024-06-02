const ParagraphArray: React.FC<{ textArray: string[] }> = ({ textArray }) => {
  return textArray.map((paragraph, index) => (
    <p key={`paragraph-${index}`}>{paragraph}</p>
  ));
};

export default ParagraphArray;
