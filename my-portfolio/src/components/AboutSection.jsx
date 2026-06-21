import { useRef } from 'react'
import './about.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function AboutSection() {
  const revealRef = useRef(null)
  const boxRef = useRef(null)

  const boxWidth = 260
  const boxHeight = 210

  const moveReveal = (e) => {
  const container = e.currentTarget;
  const rect = container.getBoundingClientRect();

  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  const x = clientX - rect.left;
  const y = clientY - rect.top;

  const halfW = boxWidth / 2;
  const halfH = boxHeight / 2;

  const clampedX = Math.max(halfW, Math.min(rect.width - halfW, x));
  const clampedY = Math.max(halfH, Math.min(rect.height - halfH, y));

  revealRef.current.style.clipPath = `inset(
    ${clampedY - halfH}px
    ${rect.width - clampedX - halfW}px
    ${rect.height - clampedY - halfH}px
    ${clampedX - halfW}px
    round 16px
  )`;

  boxRef.current.style.left = `${clampedX}px`;
  boxRef.current.style.top = `${clampedY}px`;
};

  return (
    <section id="about" className="about-section">
      <div
  className="about-image-wrap"
  onMouseMove={moveReveal}
  onTouchStart={moveReveal}
  onTouchMove={moveReveal}
>
        <img className="about-image base" src="/images/about-1.png" alt="" />

        <img
          ref={revealRef}
          className="about-image reveal"
          src="/images/about-2.png"
          alt=""
        />

        <div ref={boxRef} className="focus-box">
          <span />
        </div>
      </div>

      <div className="about-content">
        <div className="about-scan-card">
          <div className="scan-card-grid" />

          <div className="about-corner about-corner-tl" />
          <div className="about-corner about-corner-tr" />
          <div className="about-corner about-corner-bl" />
          <div className="about-corner about-corner-br" />

          <p className="about-file-name">about_me.txt</p>

          <h2>about me</h2>

          <div className="about-divider" />

          <p>
            i am a computer science student passionate about{' '}
            <span>full stack software engineering</span>.
          </p>

          <p>
            i love building clean, scalable, and user-friendly web applications
            that solve real world problems.
          </p>
<div className="about-links">
  <a
    href="https://github.com/warissah"
    target="_blank"
    rel="noreferrer"
    className="about-link"
  >
    <FaGithub />
  
    <span className="link-name">GitHub</span>
  </a>

  <a
    href="https://www.linkedin.com/in/warissa-hossain-0b4384330/"
    target="_blank"
    rel="noreferrer"
    className="about-link"
  >
    <FaLinkedin/>
    <span className="link-name">LinkedIn</span>
  </a>

  <a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="about-link"
>
    <span className="link-code">CV</span>
    <span className="link-name">Resume</span>
  </a>
</div>

          <div className="about-scan-line" />
        </div>
      </div>
    </section>
  )
}