import { devIconsCdnUrl } from '../../enums';

const SocialLinks = ({ name, socialLinks }) => {
  const renderSocialLinks = socialLinks.map((link) => (
    <li>
      <a href={link.url}>
        <img
          className="social-link"
          src={`${devIconsCdnUrl}${link.platform.simplename}/${link.platform.simplename}${link.platform.iconSuffix}.svg`}
          alt={`${name} on ${link.platform.fullname}`}
        />
      </a>
    </li>
  ));

  return <ul>{renderSocialLinks}</ul>;
};

export default SocialLinks;
