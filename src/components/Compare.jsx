// Compare: "Compare models" grid. Roy vs the average candidate.
import Reveal from './Reveal.jsx'
import content from '../data/content.js'
import '../styles/Compare.css'

export default function Compare() {
  const { columns, rows } = content.compare

  return (
    <section className="section compare" id="compare">
      <div className="container">
        <Reveal>
          <h2 className="compare-title">Compare.</h2>
        </Reveal>
        <div className="compare-grid">
          {/* One card per column. colIndex says which column (0 = Roy). */}
          {columns.map((col, colIndex) => (
            <Reveal key={col} delay={colIndex * 0.15}>
              <div className={colIndex === 0 ? 'compare-card highlight' : 'compare-card'}>
                <h3>{col}</h3>
                <ul>
                  {rows.map((r) => (
                    <li key={r.feature}>
                      {/* aria-label tells screen readers "yes"/"no" instead of reading a symbol. */}
                      <span
                        className={r.values[colIndex] ? 'yes' : 'no'}
                        aria-label={r.values[colIndex] ? 'Yes' : 'No'}
                      >
                        {r.values[colIndex] ? '✓' : '–'}
                      </span>
                      {r.feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
