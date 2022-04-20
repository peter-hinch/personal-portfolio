const iconCdnUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

const Technologies = ({ preferredTechnologies }) => {
  const renderPreferredTechnologies = preferredTechnologies.map(
    (technology) => (
      <span>
        <img
          src={`${iconCdnUrl}${technology.simplename}/${technology.simplename}${technology.iconSuffix}.svg`}
          alt={technology.simplename}
          height={64}
        />
      </span>
    )
  );

  return (
    <section id="technologies">
      <h2>Technologies</h2>
      <h3>Preferred Technologies</h3>
      {renderPreferredTechnologies}
      <h3>Other Experience</h3>
    </section>
  );
};

export default Technologies;
