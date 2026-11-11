// Intro: a big statement that appears one line at a time as you scroll.
import Reveal from './Reveal.jsx'
import content from '../data/content.js'
import '../styles/Intro.css'

export default function Intro() {
  return (
    <section className="section intro">
      <div className="container">
        {/* .map() loops over the list and makes one <Reveal> per line. */}
        {content.intro.map((line, i) => (
          // "key" helps React track list items. "delay" staggers each line.
          <Reveal key={line} delay={i * 0.15}>
            <p className="intro-line">{line}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
