import "./skills.css";

const skillRows = [
  ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  ["Python", "FastAPI", "Flask", "Supabase", "PostgreSQL"],
  ["OpenAI API", "Machine Learning", "Data Preprocessing", "Train/Test Splits"],
  ["Figma", "UI/UX", "Branding", "Graphic Design"],
  ["Git", "GitHub", "Docker", "VS Code"],
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <p>&gt; CAPABILITIES SCANNED</p>
        <h2>Skills</h2>
        <span>pixel fragments of what I build with</span>
      </div>

      <div className="skills-field">
        {skillRows.map((row, rowIndex) => (
          <div className="skill-row" key={rowIndex}>
            {row.map((skill, index) => (
              <span
                className="skill-chip"
                key={skill}
                style={{ "--i": index + rowIndex * 4 }}
              >
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}