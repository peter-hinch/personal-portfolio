import styled from 'styled-components';

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

const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 100%;
  transition: all 0.5s ease-in-out;

  a {
    display: contents; // Preven anchor from rendering larger than image
  }
`;

export default Image;
