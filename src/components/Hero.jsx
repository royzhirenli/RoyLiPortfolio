// Hero: the first thing visitors see. Giant headline + two buttons.
import { motion } from 'framer-motion'
import content from '../data/content.js'
import '../styles/Hero.css'

export default function Hero() {
  return (
    // id="top" is the target of the logo link in the nav bar.
    <section className="hero" id="top">
      {/* motion.div is a normal div that can animate. */}
      <motion.div
        className="hero-inner container"
        initial={{ opacity: 0, y: 30 }} // start: invisible, a bit lower
        animate={{ opacity: 1, y: 0 }} // end: visible, in place
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="hero-eyebrow">{content.name}</p>
        <h1 className="hero-title">
          <span className="gradient-text">{content.productName}.</span>
          <br />
          {content.tagline}
        </h1>
        <p className="hero-sub">{content.subtitle}</p>
        <div className="hero-buttons">
          <a className="btn btn-primary" href={content.links.hire}>Hire Roy</a>
          <a className="btn" href="#projects">See the projects</a>
        </div>
      </motion.div>
    </section>
  )
}
