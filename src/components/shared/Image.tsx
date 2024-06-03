import styled from 'styled-components';

const Image: React.FC<{ path: string; alt: string; linkUrl: string }> = ({
  path,
  alt,
  linkUrl
}) => (
  <StyledImgContainer>
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

  a {
    display: contents; // Prevent anchor from rendering larger than image
  }
`;

export default Image;
