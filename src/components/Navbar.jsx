import Container from './layout/Container';

const Navbar = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
