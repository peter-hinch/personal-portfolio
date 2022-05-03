import { useEffect } from 'react';
import { useImage } from './../../hooks/useImage';

const ImageCarousel = ({ path, title, images }) => {
  useEffect(() => {}, [images]);

  const renderImages = images.map((image) => {
    const imageUrl = `${path}${image}`;
    return <img className="carousel-image" src={imageUrl} alt={title} />;
  });

  return <div className="carousel">{renderImages}</div>;
};

export default ImageCarousel;
