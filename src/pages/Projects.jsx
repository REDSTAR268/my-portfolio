
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Student Grade Calculator",
      description:
        "Calculates student scores, averages, and grades.",
      githubLink:
        "https://github.com/REDSTAR268/Student_Grade_Calculator",
    },
    {
      title: "Personal Expense Tracker",
      description:
        "Helps users record and manage expenses.",
      githubLink:
        "https://github.com/REDSTAR268/personal_expense_tracker",
    },
    {
      title: "Password Strength Checker",
      description:
        "Checks password strength using JavaScript.",
      githubLink:
        "https://github.com/REDSTAR268/password-strength-checker",
    },
  ];

  return (
    <section className="projects-page">
      <p className="projects-label">
        MY WORK
      </p>

      <h1 className="projects-title">
        My <span>Projects</span>
      </h1>

      <p className="projects-description">
        Here are some projects I have built
        while learning software development.
      </p>

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
