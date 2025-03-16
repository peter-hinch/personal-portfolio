import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

// @ts-ignore
import imgCaret from './../../assets/images/caret.svg';

import Image from './Image';

const ImageCarousel: React.FC<{
  title: string;
  images: PortfolioData.Project.Image[] | undefined;
}> = ({ title, images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(false);

  useEffect(() => {
    imageIndex === 0 ? setPrevDisabled(true) : setPrevDisabled(false);
    images && imageIndex === images?.length - 1
      ? setNextDisabled(true)
      : setNextDisabled(false);
  }, [imageIndex, images]);

  const navigatePrev = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const navigateNext = () => {
    if (images && imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  const renderImages = images?.map((image, index) => (
    <StyledImage key={`img-wrapper-${title}-${index}`} $imageIndex={imageIndex}>
      <Image
        key={`img-${title}-${index}`}
        path={image.file}
        alt={title}
        linkUrl={image.linkUrl}
      />
    </StyledImage>
  ));

  return (
    images &&
    images.length > 0 && (
      <StyledCarousel
        className={images && images.length === 1 ? 'carousel--img-single' : ''}
      >
        <button
          className="carousel--btn carousel--btn-prev"
          aria-label="Previous image"
          onClick={navigatePrev}
          disabled={prevDisabled}
        ></button>
        <div className="carousel">{renderImages}</div>
        <button
          className="carousel--btn carousel--btn-next"
          aria-label="Next image"
          onClick={navigateNext}
          disabled={nextDisabled}
        ></button>
      </StyledCarousel>
    )
  );
};

const StyledCarousel = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0 -1.5rem;

  &.carousel--img-single {
    .carousel--btn {
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
    padding: 1.5rem 0;
    overflow: hidden;
    -ms-overflow-style: none; // hide scrollbars in IE, Edge
    scrollbar-width: none; // hide scrollbars in Firefox
  }

  .carousel::-webkit-scrollbar {
    display: none; // hide scrollbars in Chrome, Safari, Opera
  }

  .carousel--btn {
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
    z-index: 3;

    &-prev {
      left: 1rem;
      transform: rotate(180deg);
    }
    &-next {
      right: 1rem;
    }
    &:disabled {
      opacity: 0;
      pointer-events: none;
    }
  }

  .carousel-image {
    margin: 0;
    width: auto;
    max-width: calc(100% - 3rem);
    max-height: 24rem;
    border: 1px var(--theme-outline) solid;
    border-radius: 0.25rem;
  }
`;

interface ImageProps {
  $imageIndex: number;
}

const StyledImage = styled.div<ImageProps>`
  min-width: 100%;
  ${(props) => `translate: ${props?.$imageIndex * -100}% 0;`}
  transition: all 0.5s ease-in-out;
`;

export default ImageCarousel;
