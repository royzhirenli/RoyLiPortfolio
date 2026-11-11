// Features: three big sections, like "Chip / Camera / Battery" on a phone launch page.
import Reveal from './Reveal.jsx'
import CountUp from './CountUp.jsx'
import content from '../data/content.js'
import '../styles/Features.css'

export default function Features() {
  return (
    <div id="features">
      {content.features.map((f, i) => (
        // Odd-numbered features flip left/right using the "flip" CSS class.
        <section key={f.title} className={`section feature ${i % 2 ? 'flip' : ''}`}>
          <div className="container feature-grid">
            <Reveal>
              <p className="eyebrow">{f.eyebrow}</p>
              <h2 className="feature-title">{f.title}</h2>
              <p className="feature-body">{f.body}</p>
            </Reveal>
            <Reveal delay={0.15} className="feature-stat-wrap">
              <p className="feature-stat gradient-text">
                <CountUp to={f.stat} suffix={f.suffix} />
              </p>
              <p className="feature-stat-label">{f.statLabel}</p>
            </Reveal>
          </div>
        </section>
      ))}
    </div>
  )
}
