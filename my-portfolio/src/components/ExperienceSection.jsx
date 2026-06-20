import { useState } from "react";
import "./ExperienceSection.css";

const experiences = [
  {
    id: "01",
    role: "Software Developer Intern",
    org: "Nuevo Hive LLC",
    tag: "SOFTWARE ENGINEERING",
    description:
      "I contribute to a vending operations platform through backend development, refund workflow features, UI/UX improvements, and production-ready software collaboration.",
    skills: ["Python", "FastAPI", "Docker", "Figma", "UI/UX"],
  },
  {
    id: "02",
    role: "Lead Graphic Designer",
    org: "MarinaHacks 5.0",
    tag: "DESIGN LEADERSHIP",
    description:
      "I led a team of five designers to create branding assets, social media campaigns, event graphics, and website visuals for CSULB's women-centered hackathon.",
    skills: ["Branding", "Leadership", "Web Design", "Marketing"],
  },
  {
    id: "03",
    role: "Board Member & Graphic Designer",
    org: "Women in Computing",
    tag: "COMMUNITY / DESIGN",
    description:
      "I create promotional materials, event branding, and digital content while supporting initiatives that empower women pursuing technology careers.",
    skills: ["Graphic Design", "Marketing", "Community", "Content Strategy"],
  },
  {
    id: "04",
    role: "STEM Outreach Mentor",
    org: "K–12 STEM Outreach",
    tag: "IMPACT / MENTORSHIP",
    description:
      "I work with K–12 students through interactive STEM workshops and hands-on activities, with a focus on encouraging young girls to explore technical fields.",
    skills: ["Mentorship", "Communication", "Leadership", "STEM Education"],
  },
];

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) =>
      prev === 0 ? experiences.length - 1 : prev - 1
    );
  };

  const getPosition = (index) => {
    const diff = index - activeIndex;

    if (diff === 0) return "active";
    if (diff === 1 || diff === -(experiences.length - 1)) return "next";
    if (diff === -1 || diff === experiences.length - 1) return "prev";
    return "hidden";
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-orbit-bg" />

      <div className="experience-header">
        <p>&gt; EXPERIENCE MEMORY CORE</p>
        <h2>Career Signals</h2>
        <span>ROTATE THROUGH STORED EXPERIENCE RECORDS</span>
      </div>

      <div className="carousel-shell">
        <button className="carousel-control left" onClick={prevCard}>
          ‹
        </button>

        <div className="experience-carousel">
          {experiences.map((item, index) => (
            <article
              key={item.id}
              className={`experience-card ${getPosition(index)}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="experience-scanline" />

              <div className="experience-card-top">
                <span>RECORD {item.id}</span>
                <span>{item.tag}</span>
              </div>

              <h3>{item.role}</h3>
              <h4>{item.org}</h4>

              <p>{item.description}</p>

              <div className="experience-skills">
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <button className="carousel-control right" onClick={nextCard}>
          ›
        </button>
      </div>

      <div className="experience-dots">
        {experiences.map((item, index) => (
          <button
            key={item.id}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <span />
            <small>{item.id}</small>
          </button>
        ))}
      </div>
    </section>
  );
}