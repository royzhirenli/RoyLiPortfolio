// NavBar: the thin blurry bar fixed to the top of the screen.
import content from '../data/content.js'
import '../styles/NavBar.css'

export default function NavBar() {
  return (
    <header className="nav">
      <nav className="nav-inner container" aria-label="Main">
        {/* Parody logo: just text, no Apple logo. */}
        <a href="#top" className="nav-logo">
          ◐ {content.productName}
        </a>
        {/* href="#projects" scrolls to the element with id="projects". */}
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#specs">Tech Specs</a></li>
          <li><a href="#compare">Compare</a></li>
        </ul>
      </nav>
    </header>
  )
}
