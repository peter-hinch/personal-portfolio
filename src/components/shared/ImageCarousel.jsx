import Image from './Image';

const ImageCarousel = ({ title, images }) => {
  const renderImages = images?.map((image, index) => (
    <Image key={`${title}-${index}`} path={image} alt={title} />
  ));

  return images !== undefined && images.length > 0 ? (
    <div
      className={`carousel ${
        images.length === 1 ? 'carousel__single-image' : ''
      }`}
    >
      {renderImages}
    </div>
  ) : (
    <></>
  );
};

export default ImageCarousel;
