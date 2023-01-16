import styled from 'styled-components';

const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 100%;
  transition: all 0.5s ease-in-out;
  pointer-events: none;
`;

const Image = ({ path, alt, style }) => (
  <StyledImgContainer style={style}>
    <img
      className="carousel-image"
      src={`${process.env.PUBLIC_URL}/images/${path}`}
      alt={alt}
    />
  </StyledImgContainer>
);

export default Image;
