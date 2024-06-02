import { devIconsCdnUrl } from '../../enums';

const SocialLinks: React.FC<{ myName: string; socialLinks: Object[] }> = ({
  myName,
  socialLinks
}) => {
  const renderSocialLinks = socialLinks.map((link) => (
    <li key={`social-link-${link.platform.simplename}`}>
      <a href={link.url}>
        <img
          className="social-link"
          src={`${devIconsCdnUrl}${link.platform.simplename}/${link.platform.simplename}${link.platform.iconSuffix}.svg`}
          alt={`${myName} on ${link.platform.fullname}`}
        />
      </a>
    </li>
  ));

  return <ul>{renderSocialLinks}</ul>;
};

export default SocialLinks;
