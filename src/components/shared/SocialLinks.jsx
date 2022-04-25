import { devIconsCdnUrl } from '../../enums';

const SocialLinks = ({ name, socialLinks }) => {
  const renderSocialLinks = socialLinks.map((link) => (
    <li>
      <a href={link.url}>
        <img
          src={`${devIconsCdnUrl}${link.platform.simplename}/${link.platform.simplename}${link.platform.iconSuffix}.svg`}
          alt={`${name} on ${link.platform.fullname}`}
          height={30}
        />
      </a>
    </li>
  ));

  return <ul>{renderSocialLinks}</ul>;
};

export default SocialLinks;
