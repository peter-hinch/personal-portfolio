import styled from 'styled-components';

import { devIconsCdnUrl } from '../../enums';

const TechnologyIcons: React.FC<{
  technologies: EnumTypes.Technology[];
  size: number;
}> = ({ technologies, size }) => (
  <StyledTechnologyIcons className="technology-icons" size={size}>
    {technologies.map((technology, index) => (
      <li key={`technology-icon-${index}-${technology.simplename}`}>
        <img
          className="technology-icon"
          key={technology.simplename}
          src={`${devIconsCdnUrl}${technology.simplename}/${technology.simplename}${technology.iconSuffix}.svg`}
          alt={technology.simplename}
          title={technology.fullname}
        />
      </li>
    ))}
  </StyledTechnologyIcons>
);

interface TechnologuIconProps {
  size?: number;
}

const StyledTechnologyIcons = styled.ul<TechnologuIconProps>`
  padding: 0;

  &.technology-icons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    li {
      list-style-type: none;

      img.technology-icon {
        width: ${(props) => `${props?.size || 3.5}rem`};
        height: auto;
        transition: 0.3s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;

export default TechnologyIcons;
