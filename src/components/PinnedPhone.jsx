// PinnedPhone: THE STANDOUT SCENE.
//
// How it works (the trick Apple pages use):
//   1. The outer <section> is VERY tall (400vh = four screen heights).
//   2. Inside it, a "sticky" box stays glued to the screen while you scroll through the tall section.
//   3. We measure how far you've scrolled through the tall section (progress, 0 to 1)
//      and use that number to animate the phone and swap the project on its screen.
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import useReducedMotion from './useReducedMotion.js'
import content from '../data/content.js'
import { pickProjectIndex } from './pickProject.js'
import '../styles/PinnedPhone.css'

export default function PinnedPhone() {
  const sectionRef = useRef(null) // a handle to the tall <section> so we can measure it
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0) // which project is showing right now
  const projects = content.projects

  // scrollYProgress = 0 when the section's top hits the top of the screen,
  // and 1 when the section's bottom hits the bottom of the screen.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // useTransform maps one range of numbers to another.
  // "As progress goes 0 -> 0.25, scale goes 0.6 -> 1", and so on.
  const scale = useTransform(scrollYProgress, [0, 0.25], [0.6, 1])
  const rotateX = useTransform(scrollYProgress, [0, 0.25], [55, 0]) // tilted back, then upright = "unfolds"
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]) // headline fades as phone arrives

  // Every time progress changes, update which project is showing.
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    setIndex(pickProjectIndex(p, projects.length))
  })

  // Accessibility: if the visitor wants less motion, skip the pinned animation
  // and just show every project in a simple list.
  if (reduce) {
    return (
      <section className="section" id="projects">
        <div className="container">
          <h2 className="phone-title">Projects.</h2>
          <div className="phone-static">
            {projects.map((p) => (
              <article key={p.title} className="phone-static-card" style={{ borderColor: p.color }}>
                <p className="phone-tag" style={{ color: p.color }}>{p.tag}</p>
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const current = projects[index]

  return (
    <section className="phone-section" id="projects" ref={sectionRef}>
      <div className="phone-sticky">
        {/* Headline that fades out as the phone appears. */}
        <motion.h2 className="phone-title phone-title-abs" style={{ opacity: titleOpacity }}>
          Ah yes, some of my favourite <span className="gradient-text">projects.</span>
        </motion.h2>

        {/* perspective on the parent gives the rotateX a 3D look. */}
        <div className="phone-stage">
          <motion.div className="phone" style={{ scale, rotateX, opacity }}>
            <div className="phone-notch" aria-hidden="true" />
            {/* The "screen": its background color follows the current project. */}
            <div className="phone-screen" style={{ background: `linear-gradient(160deg, ${current.color}, #000 85%)` }}>
              {/* key={index} makes React treat each project as new, so the text re-animates. */}
              <motion.div
                key={index}
                className="phone-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="phone-tag">{current.tag}</p>
                <h3>{current.title}</h3>
                <p className="phone-blurb">{current.blurb}</p>
                {/* Little dots show which project we are on. */}
                <div className="phone-dots" aria-hidden="true">
                  {projects.map((p, i) => (
                    <span key={p.title} className={i === index ? 'dot active' : 'dot'} />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
