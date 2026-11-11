// Portrait: a blank black screen, then your photo + caption fade in AS YOU SCROLL.
//
// This is "scroll-linked": the fade is controlled by the scrollbar itself, not by a timer.
//   - Scroll down: blank screen -> photo and caption fade in.
//   - Scroll up:   the exact same fade plays backwards -> back to the blank screen.
// Same trick as the phone scene: a tall section with a "sticky" screen inside it.
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import content from '../data/content.js'
import '../styles/Portrait.css'

export default function Portrait() {
  const ref = useRef(null) // handle to the tall section so we can measure scrolling inside it
  const reduce = useReducedMotion()

  // progress = 0 when the section's top reaches the top of the screen,
  //            1 when its bottom reaches the bottom of the screen.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Turn scroll progress into opacity:
  //   0 to 0.25  -> still 0 (blank black screen, a short moment of nothing)
  //   0.25 to 0.6 -> fades from 0 up to 1 (photo and caption appear)
  //   0.6 to 1    -> stays at 1 (hold, so you can look at it)
  // Change these numbers to make the fade earlier, later, or slower.
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.6, 1], [0, 0, 1, 1])

  // Reduced motion: no pinning or fading, just show the photo.
  if (reduce) {
    return (
      <section className="portrait-static" aria-label="Portrait">
        <figure className="portrait-figure">
          <img className="portrait-img" src={content.portrait.src} alt={content.portrait.alt} />
          <figcaption className="portrait-caption">{content.portrait.caption}</figcaption>
        </figure>
      </section>
    )
  }

  return (
    <section className="portrait" ref={ref} aria-label="Portrait">
      {/* This sticky box stays on screen while the tall section scrolls past. */}
      <div className="portrait-sticky">
        {/* The whole figure (photo AND caption) shares one opacity, so they fade together. */}
        <motion.figure className="portrait-figure" style={{ opacity }}>
          <img className="portrait-img" src={content.portrait.src} alt={content.portrait.alt} />
          <figcaption className="portrait-caption">{content.portrait.caption}</figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
