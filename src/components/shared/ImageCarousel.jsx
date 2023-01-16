import { useState, useEffect } from 'react';

import styled from 'styled-components';

import imgCaret from './../../assets/images/caret.svg';

import Image from './Image';

const StyledCarousel = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0 -1.5rem;

  &.carousel__img-single {
    .carousel__btn {
      display: none;
    }

    .carousel {
      justify-content: center;
      width: 100%;
    }
  }

  .carousel {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    padding: 1.5rem;
    overflow: hidden;
    -ms-overflow-style: none; // hide scrollbars in IE, Edge
    scrollbar-width: none; // hide scrollbars in Firefox
    background: var(--theme-surface-variant);
  }

  .carousel::-webkit-scrollbar {
    display: none; // hide scrollbars in Chrome, Safari, Opera
  }

  .carousel__btn {
    position: absolute;
    top: calc(50% - 16px);
    display: block;
    padding: 0;
    width: 32px;
    height: 32px;
    background: no-repeat center/32px url(${imgCaret});
    border: none;
    cursor: pointer;
    opacity: 1;
    transition: all 0.5s ease-in-out;
    z-index: 100;
  }

  .carousel__btn:disabled {
    opacity: 0;
    pointer-events: none;
  }

  .carousel__btn-prev {
    left: 1rem;
    transform: rotate(180deg);
  }

  .carousel__btn-next {
    right: 1rem;
  }

  .carousel-image {
    width: auto;
    height: 24rem;
    border: 1px var(--theme-outline) solid;
    border-radius: 0.25rem;
  }
`;

const ImageCarousel = ({ title, images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(false);

  useEffect(() => {
    currentImage === 0 ? setPrevDisabled(true) : setPrevDisabled(false);
    currentImage === images?.length - 1
      ? setNextDisabled(true)
      : setNextDisabled(false);
  }, [currentImage, images]);

  const imageStyleObject = {
    translate: `calc(${currentImage * -100}% + ${currentImage * -1.5}rem) 0`
  };

  const navigatePrev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const navigateNext = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const renderImages = images?.map((image, index) => (
    <Image
      key={`${title}-${index}`}
      path={image}
      alt={title}
      style={imageStyleObject}
    />
  ));

  return images !== undefined && images.length > 0 ? (
    <StyledCarousel
      className={images.length === 1 ? 'carousel__img-single' : ''}
    >
      <button
        className="carousel__btn carousel__btn-prev"
        aria-label="Previous image"
        onClick={navigatePrev}
        disabled={prevDisabled}
      ></button>
      <div className="carousel">{renderImages}</div>
      <button
        className="carousel__btn carousel__btn-next"
        aria-label="Next image"
        onClick={navigateNext}
        disabled={nextDisabled}
      ></button>
    </StyledCarousel>
  ) : (
    <></>
  );
};

export default ImageCarousel;
