import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <img src="/images/hero-bg.png" alt="" className="hero-bg" />

      <div className="pastel-overlay" />

      <div className="hero-pixels">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero-data-chip chip-one">
        <span>STATUS</span>
        <strong>VERIFIED</strong>
      </div>

      <div className="hero-data-chip chip-two">
        <span>MODE</span>
        <strong>BUILDING</strong>
      </div>

      <div className="hero-data-chip chip-three">
        <span>SIGNAL</span>
        <strong>CREATIVE TECH</strong>
      </div>

      <div className="hero-data-chip chip-four">
        <span>STACK</span>
        <strong>FULL-STACK + AI</strong>
      </div>

      <div className="floating-scan-card">
        <div className="scanner-corner corner-top-left" />
        <div className="scanner-corner corner-top-right" />
        <div className="scanner-corner corner-bottom-left" />
        <div className="scanner-corner corner-bottom-right" />

        <div className="scan-card-grid" />

        <p className="name-kicker">IDENTITY FOUND</p>

        <h1 className="typing-name">
          <span>Warissa Hossain</span>
        </h1>

        <p className="role-line">
          creative technologist · full-stack builder · ux + ai
        </p>

        <div className="scan-line" />
      </div>

      <div className="hero-glitch-wave">
        <div className="glitch-wave-core" />
        <div className="glitch-wave-pixels" />
      </div>
    </section>
  );
}