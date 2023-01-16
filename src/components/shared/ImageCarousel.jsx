import styled from 'styled-components';
import Image from './Image';

const StyledCarousel = styled.div`
  .carousel {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin: 0 -1.5rem;
    padding: 1.5rem;
    overflow: scroll;
    -ms-overflow-style: none; // hide scrollbars in IE, Edge
    scrollbar-width: none; // hide scrollbars in Firefox
    background: var(--theme-surface-variant);
  }

  .carousel.carousel__img-single {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .carousel::-webkit-scrollbar {
    display: none; // hide scrollbars in Chrome, Safari, Opera
  }

  .carousel .carousel__btn-prev {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }

  .carousel .carousel__btn-next {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }

  .carousel-image {
    width: auto;
    height: 24rem;
    border: 1px var(--theme-outline) solid;
    border-radius: 0.25rem;
  }
`;

const ImageCarousel = ({ title, images }) => {
  const renderImages = images?.map((image, index) => (
    <Image key={`${title}-${index}`} path={image} alt={title} />
  ));

  return images !== undefined && images.length > 0 ? (
    <StyledCarousel>
      <button className="carousel__btn-prev">Prev</button>
      <div
        className={`carousel ${
          images.length === 1 ? 'carousel__img-single' : ''
        }`}
      >
        {renderImages}
      </div>
      <button className="carousel__btn-next">Next</button>
    </StyledCarousel>
  ) : (
    <></>
  );
};

export default ImageCarousel;
