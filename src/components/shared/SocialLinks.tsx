import styled from 'styled-components';

import { devIconsCdnUrl } from '../../enums';

const SocialLinks: React.FC<{
  myName: string;
  socialLinks: PortfolioData.SocialLink[];
}> = ({ myName, socialLinks }) => {
  return (
    <StyledSocialLinks className="social-links">
      {socialLinks.map((link) => (
        <li key={`social-link-${link.platform.simplename}`}>
          <a href={link.url}>
            <img
              className="social-links--link"
              src={`${devIconsCdnUrl}${link.platform.simplename}/${link.platform.simplename}${link.platform.iconSuffix}.svg`}
              alt={`${myName} on ${link.platform.fullname}`}
            />
          </a>
        </li>
      ))}
    </StyledSocialLinks>
  );
};

export default SocialLinks;

const StyledSocialLinks = styled.ul`
  a:has(img.social-links--link) {
    display: flex;
    img {
      height: 1.5rem;
    }
  }
`;
