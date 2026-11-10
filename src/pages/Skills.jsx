
import "./Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git and GitHub",
  ];

  return (
    <section className="skills-page">

      <p className="skills-label">
        WHAT I AM LEARNING
      </p>

      <h1 className="skills-title">
        My <span>Skills</span>
      </h1>

      <p className="skills-description">
        Technologies I am learning and practising
        as I grow as a software engineer.
      </p>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
