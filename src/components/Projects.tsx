import Container from './layout/Container';
import NextLink from './shared/NextLink';

const Projects: React.FC<{
  anchor: PortfolioData.Anchor;
  children: any;
}> = ({ anchor, children }) => {
  return (
    <Container id="projects">
      <h2>Projects</h2>
      {children}
      <div className="cta-links">
        <div className="cta-links--group"></div>
        <NextLink anchor={anchor} />
      </div>
    </Container>
  );
};

export default Projects;
