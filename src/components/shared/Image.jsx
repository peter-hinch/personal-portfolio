const Image = ({ path, alt }) => (
  <img className="carousel-image" src={`images/${path}`} alt={alt} />
);

export default Image;
