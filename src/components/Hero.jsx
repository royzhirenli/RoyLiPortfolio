// Hero: the first thing visitors see. Giant headline + two buttons.
//
// Animation order on page load:
//   1. The "Roy Pro Max. Hire different." title drops in from the TOP while fading in.
//   2. A moment later, the name above it, the subtitle, and the buttons fade in.
import { motion } from 'framer-motion'
import content from '../data/content.js'
import useReducedMotion from './useReducedMotion.js'
import '../styles/Hero.css'

export default function Hero() {
  const reduce = useReducedMotion() // see useReducedMotion.js (switch lives in content.js)

  // A small helper that returns the "fade in after a delay" settings for the other text,
  // so we don't repeat the same lines three times. initial=false means "no animation".
  const fadeIn = (delay) => ({
    initial: reduce ? false : { opacity: 0 }, // start: invisible
    animate: { opacity: 1 }, // end: visible
    transition: { duration: 0.9, delay, ease: 'easeOut' },
  })

  return (
    // id="top" is the target of the logo link in the nav bar.
    <section className="hero" id="top">
      <div className="hero-inner container">
        {/* motion.p / motion.h1 / motion.div are normal tags that can animate. */}
        <motion.p className="hero-eyebrow" {...fadeIn(0.7)}>{content.name}</motion.p>

        <motion.h1
          className="hero-title"
          // y is how far from its final spot the title starts. NEGATIVE = above it, so it
          // drops DOWN into place. (A positive number would make it rise from below.)
          initial={reduce ? false : { opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          // duration = seconds the drop takes. The ease numbers make it start quick and
          // settle gently. Try duration: 1.8 for slower, or y: -160 for a longer fall.
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="gradient-text">{content.productName}.</span>
          <br />
          {content.tagline}
        </motion.h1>

        <motion.p className="hero-sub" {...fadeIn(0.9)}>{content.subtitle}</motion.p>
        <motion.div className="hero-buttons" {...fadeIn(1.1)}>
          <a className="btn btn-primary" href={content.links.hire}>Hire Roy</a>
          <a className="btn" href="#projects">See the projects</a>
        </motion.div>
      </div>
    </section>
  )
}
