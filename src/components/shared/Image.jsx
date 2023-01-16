import styled from 'styled-components';

const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 100%;
`;

const Image = ({ path, alt }) => (
  <StyledImgContainer>
    <img
      className="carousel-image"
      src={`${process.env.PUBLIC_URL}/images/${path}`}
      alt={alt}
    />
  </StyledImgContainer>
);

export default Image;
