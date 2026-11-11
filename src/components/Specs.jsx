// Specs: your skills formatted like a product "Tech Specs" sheet.
import Reveal from './Reveal.jsx'
import content from '../data/content.js'
import '../styles/Specs.css'

export default function Specs() {
  return (
    <section className="section specs" id="specs">
      <div className="container">
        <Reveal>
          <h2 className="specs-title">Tech Specs.</h2>
        </Reveal>
        {content.specs.map((g) => (
          <Reveal key={g.group}>
            <div className="spec-group">
              <h3 className="spec-group-title">{g.group}</h3>
              {/* A <dl> is a "description list": labels (dt) paired with values (dd). */}
              <dl className="spec-rows">
                {g.rows.map((r) => (
                  <div key={r.label} className="spec-row">
                    <dt>{r.label}</dt>
                    <dd>{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
