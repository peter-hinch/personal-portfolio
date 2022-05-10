const Image = ({ path, alt }) => (
  <img
    className="carousel-image"
    src={`${process.env.PUBLIC_URL}/images/${path}`}
    alt={alt}
  />
);

export default Image;
