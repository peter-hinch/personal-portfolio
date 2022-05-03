const ImageCarousel = ({ images, title }) => {
  const renderImages = images.map((imageUrl) => (
    <img src={imageUrl} alt={title} />
  ));

  return <>{renderImages}</>;
};

export default ImageCarousel;
