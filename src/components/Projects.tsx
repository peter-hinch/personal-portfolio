import Container from './layout/Container';

const Projects: React.FC<{
  id: string;
  children: any;
}> = ({ id, children }) => {
  return (
    <Container id={id}>
      <h2>Projects</h2>
      {children}
    </Container>
  );
};

export default Projects;
