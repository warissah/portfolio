import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import Cursor from "./components/Cursor.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import Skills from "./components/skills.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <main className="site-bg" >
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Cursor />
      <ExperienceSection />
      <Skills />
      <Contact />
    </main>
  )
}