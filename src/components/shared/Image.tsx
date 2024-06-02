import styled from 'styled-components';

const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 100%;
  transition: all 0.5s ease-in-out;
`;

const Image = ({ path, alt, linkUrl, style }) => (
  <StyledImgContainer style={style}>
    {linkUrl ? (
      <a href={linkUrl} target="_blank" rel="noreferrer">
        <img
          className="carousel-image"
          src={`${process.env.PUBLIC_URL}/images/${path}`}
          alt={alt}
        />
      </a>
    ) : (
      <img
        className="carousel-image"
        src={`${process.env.PUBLIC_URL}/images/${path}`}
        alt={alt}
      />
    )}
  </StyledImgContainer>
);

export default Image;
