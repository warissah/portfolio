import { useState } from "react";
import "./projects.css";

const projects = [
  {
    id: "001",
    title: "Student Mart",
    program: "Starbound Program",
    type: "CSULB Community Marketplace",
    role: "Frontend Developer",
    status: "COMMUNITY IMPACT",
    github: "https://github.com/oscararenas12/TEAM-CHARA.git",
    stack: ["React", "TypeScript", "Next.js", "Supabase"],
    description:
      "A full-stack marketplace platform built for the CSULB community where students can safely buy, sell, and exchange items. I contributed to frontend development, UI components, listing features, and user-centered design.",
  },
  {
    id: "002",
    title: "TranSLAYYYtor",
    program: "MarinaHacks 5.0",
    type: "AI Slang Translator",
    role: "Backend + UI Developer",
    status: "24HR HACKATHON",
    github: "https://github.com/MarinaHacks5-0/SLANG-translator.git",
    stack: ["Flask", "OpenAI API", "JavaScript", "HTML", "CSS"],
    description:
      "A Gen Z slang translator that converts everyday English into modern slang and vice versa. I built the Flask backend, integrated OpenAI API translations, added speech-to-text and text-to-speech, and styled the frontend.",
  },
  {
    id: "003",
    title: "TinyTasks",
    program: "BeachHacks 9.0",
    type: "AI Productivity Assistant",
    role: "AI UX Developer",
    status: "AI MICRO-ACTIONS",
    github: "https://github.com/warissah/tinytasks.git",
    stack: ["AI", "WhatsApp", "UX", "Productivity"],
    description:
      "An AI-powered assistant that helps users overcome procrastination by breaking overwhelming goals into tiny, actionable steps with motivational support and WhatsApp-based interaction.",
  },
  {
    id: "004",
    title: "Guilds",
    program: "STEM Connect Hackathon",
    type: "Social Hobby Platform",
    role: "Full-Stack Developer",
    status: "36HR PROTOTYPE",
    github: "https://github.com/TetsuoKunn/JojosReferenceSASEHack.git",
    stack: ["Flask", "Django", "HTML", "CSS", "JavaScript"],
    description:
      "A full-stack web app where users create and join communities called Guilds based on shared hobbies and interests. I focused on UI design and frontend-to-backend interactions.",
  },
  {
    id: "005",
    title: "Success Pipeline",
    program: "Sisterhood Program",
    type: "ML + Data Engineering",
    role: "Machine Learning Team",
    status: "PREDICTIVE ANALYTICS",
    github: "https://github.com/YOUR-USERNAME/success-pipeline",
    stack: ["Python", "PostgreSQL", "ML", "Data Preprocessing"],
    description:
      "A machine learning and data engineering project focused on predicting student dropout risk. I helped validate data quality, prepare cleaned datasets, separate features and targets, perform train-test splits, and support preprocessing workflows.",
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-overlay" />
      <div className="projects-particles">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="projects-header">
        <p className="projects-kicker">&gt; ACCESSING PROJECT DATABASE...</p>
        <h2>Project Archive</h2>
        <p>
          Five verified build records detected across AI, full-stack systems,
          hackathons, community tools, and machine learning pipelines.
        </p>
      </div>

      <div className="projects-console">
        <div className="console-corner corner-tl" />
        <div className="console-corner corner-tr" />
        <div className="console-corner corner-bl" />
        <div className="console-corner corner-br" />

        <div className="archive-list">
          <div className="archive-top">
            <span>SCAN COMPLETE</span>
            <span>005 RECORDS</span>
          </div>

          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`archive-item ${
                activeProject.id === project.id ? "active" : ""
              }`}
              style={{ "--delay": `${index * 0.09}s` }}
              onClick={() => setActiveProject(project)}
            >
              <span className="archive-id">[{project.id}]</span>
              <span className="archive-name">{project.title}</span>
              <span className="archive-status">VERIFIED</span>
            </button>
          ))}
        </div>

        <div className="data-transfer">
          <span />
        </div>

        <article key={activeProject.id} className="project-dossier">
          <div className="dossier-scanline" />

          <div className="dossier-topline">
            <span>RECORD OPENED</span>
            <span>ID #{activeProject.id}</span>
          </div>

          <h3>{activeProject.title}</h3>
          <p className="project-program">{activeProject.program}</p>

          <div className="project-meta-grid">
            <div>
              <span>TYPE</span>
              <p>{activeProject.type}</p>
            </div>
            <div>
              <span>ROLE</span>
              <p>{activeProject.role}</p>
            </div>
            <div>
              <span>STATUS</span>
              <p>{activeProject.status}</p>
            </div>
          </div>

          <p className="project-description">{activeProject.description}</p>

          <div className="stack-area">
            <p>TECH STACK</p>
            <div className="stack-list">
              {activeProject.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <a
            className="github-link"
            href={activeProject.github}
            target="_blank"
            rel="noreferrer"
          >
            VIEW GITHUB ↗
          </a>

          <div className="signal-bars">
            <div>
              <span>IMPACT</span>
              <i />
            </div>
            <div>
              <span>BUILD</span>
              <i />
            </div>
            <div>
              <span>CREATIVITY</span>
              <i />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}