// Footer: the tiny fine print. Every product page has some, so we parody it.
import content from '../data/content.js'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {content.footnotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
        {/* new Date().getFullYear() gives the current year automatically. */}
        <p className="footer-copy">© {new Date().getFullYear()} {content.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
