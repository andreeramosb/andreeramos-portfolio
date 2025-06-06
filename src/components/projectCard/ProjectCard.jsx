import './projectCard.css';

const ProjectCard = ({ item }) => {
  const {
    name,
    description, 
    homepage,
    html_url,
    projectImage,
    allLanguages
  } = item;

  const imageUrl = projectImage || 'https://via.placeholder.com/250x150?text=No+Image';
  const tecnologias = allLanguages && Array.isArray(allLanguages) ? allLanguages : [];

  const defaultDescription = "This project demonstrates practical development skills and highlights various software engineering aspects."; 
  
  const formatProjectName = (projectName) => {
    if (!projectName) return '';

    const keywordsToUppercase = new Set(['api', 'ms', 'microservice', 'pharmacy', 'react', 'node', 'spring', 'jwt', 'oauth', 'sql', 'nosql', 'ui', 'ux', 'db']); 

    let formatted = projectName.replace(/[-_]/g, ' ');
    formatted = formatted.replace(/([a-z])([A-Z])/g, '$1 $2');
    formatted = formatted = formatted.replace(/(api|ms|microservice|pharmacy|react|node|spring|jwt|oauth|sql|nosql|ui|ux|db)/gi, ' $1');
    formatted = formatted.replace(/\s+/g, ' ').trim();

    formatted = formatted
      .split(' ')
      .map(word => {
        if (!word) return '';
        const lowerCaseWord = word.toLowerCase();
        if (keywordsToUppercase.has(lowerCaseWord)) {
          return word.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');

    return formatted;
  };

  const formattedName = formatProjectName(name);

  return (
    <div className="project-card">
      <div className="project-info">
        <h3>{formattedName}</h3>
        <p className="tipo">{description || <em>{defaultDescription}</em>}</p>
        <div className="tecnologias">
          {tecnologias.map((tec, index) => (
            <span key={index} className="tec-tag">{tec}</span>
          ))}
        </div>
        <div className="project-links">
          {homepage && ( 
            <a href={homepage} target="_blank" rel="noopener noreferrer">
              View Production
            </a>
          )}
          {html_url && ( 
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;