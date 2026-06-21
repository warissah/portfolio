import { useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [orbOffset, setOrbOffset] = useState({ x: 0, y: 0 });

  const handleOrbRepel = (e) => {
    const orb = e.currentTarget;
    const rect = orb.getBoundingClientRect();

    const orbX = rect.left + rect.width / 2;
    const orbY = rect.top + rect.height / 2;

    const dx = orbX - e.clientX;
    const dy = orbY - e.clientY;

    const distance = Math.sqrt(dx * dx + dy * dy) || 1;
    const strength = Math.max(0, 1 - distance / 135);

    setOrbOffset({
      x: (dx / distance) * strength * 42,
      y: (dy / distance) * strength * 42,
    });
  };

  const resetOrb = () => {
    setOrbOffset({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="hero-section">
      <img src="/images/hero-bg.png" alt="" className="hero-bg" />

      <div className="pastel-overlay" />

      <div
        className="cute-orb"
        onMouseMove={handleOrbRepel}
        onMouseLeave={resetOrb}
        style={{
          "--repel-x": `${orbOffset.x}px`,
          "--repel-y": `${orbOffset.y}px`,
        }}
      >
        <div className="orb-ring" />

        <div className="orb-face">
          <span />
          <span />
        </div>
      </div>

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