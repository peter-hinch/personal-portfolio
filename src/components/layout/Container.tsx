import styled from 'styled-components';

const Container: React.FC<{ children: any; id: string }> = ({
  children,
  id
}) => {
  return (
    <StyledContainer id={id}>
      <div className="container">{children}</div>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  position: relative;

  &::before {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    /* background: red; */
    z-index: 1;
  }

  div.container {
    position: relative;
    z-index: 2;
  }
`;

export default Container;
