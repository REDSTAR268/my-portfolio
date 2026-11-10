
function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="welcome">WELCOME TO MY PORTFOLIO</span>

        <h1>
          Hello, I'm a
          <span> Future Software Engineer.</span>
        </h1>

        <p>
          I enjoy building websites, learning new technologies,
          and turning creative ideas into digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="/projects">View My Projects</a>
          <a href="/contact">Contact Me</a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/images/developer-avatar.jpg"
          alt="Anime avatar"
        />
      </div>
    </section>
  )
}

export default Home
