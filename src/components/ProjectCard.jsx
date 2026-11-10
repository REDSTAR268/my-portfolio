
function ProjectCard({ title, description, githubLink }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>

      <p>{description}</p>

      <div className="project-links">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
