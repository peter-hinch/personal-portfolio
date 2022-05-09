import Image from './Image';

const ImageCarousel = ({ title, images }) => {
  const renderImages = images?.map((image, index) => (
    <Image key={`${title}-${index}`} path={image} alt={title} />
  ));

  return images !== undefined && images.length > 0 ? (
    <div className="carousel">{renderImages}</div>
  ) : (
    <></>
  );
};

export default ImageCarousel;
