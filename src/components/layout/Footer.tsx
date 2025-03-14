import styled from 'styled-components';

import SocialLinks from '../shared/SocialLinks.tsx';

const currentYear = new Date().getFullYear();

const Footer: React.FC<{
  myName: string;
  socialLinks: PortfolioData.SocialLink[];
}> = ({ myName, socialLinks }) => {
  return (
    <StyledFooter>
      <div className="container">
        <nav>
          <SocialLinks myName={myName} socialLinks={socialLinks} />
        </nav>
        <small>
          &copy;{currentYear} {myName}, All rights reserved.
        </small>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: none;
    }
  }
`;

export default Footer;
