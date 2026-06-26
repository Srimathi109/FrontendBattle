import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            NEXT-GEN AI AUTOMATION PLATFORM
          </span>

          <h1>
            Power Your Future
            <br />
            With AI
          </h1>

          <p>
            Deploy intelligent automation, AI agents and scalable workflows
            built for modern enterprises. Increase productivity, reduce manual
            effort and unlock actionable insights.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Book Demo
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <h2>500+</h2>
              <span>Enterprise Clients</span>
            </div>

            <div>
              <h2>98%</h2>
              <span>Automation Accuracy</span>
            </div>

            <div>
              <h2>12M+</h2>
              <span>Tasks Automated</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="orb"></div>

          <div className="ring ring1"></div>

          <div className="ring ring2"></div>

          <div className="core"></div>

        </div>

      </div>

    </section>
  );
}