import './navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-scan-corner nav-tl" />
      <div className="nav-scan-corner nav-tr" />
      <div className="nav-scan-corner nav-bl" />
      <div className="nav-scan-corner nav-br" />

      <div className="nav-inner">
        <div className="nav-status">SYSTEM NAV</div>

        <div className="nav-links">
          {links.map((link) => (
            <a href={link.href} key={link.label} className="nav-link">
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <div className="nav-status">ONLINE</div>
      </div>
    </nav>
  )
}