// Reveal: wrap anything in <Reveal> and it fades + slides up when scrolled into view.
// We use it everywhere so the page feels alive without repeating code.
import { motion, useReducedMotion } from 'framer-motion'

// "children" is whatever you put between <Reveal> and </Reveal>.
// "delay" lets you stagger several items (0.1, 0.2, ...).
export default function Reveal({ children, delay = 0, className = '' }) {
  // true if the visitor's device is set to "reduce motion" (accessibility setting).
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      // Starting look: invisible and 40px lower. Skipped when reduced motion is on.
      initial={reduce ? false : { opacity: 0, y: 40 }}
      // End look once it is on screen.
      whileInView={{ opacity: 1, y: 0 }}
      // once: true means it animates only the first time, not every scroll past.
      // amount: 0.3 means "start when 30% of it is visible".
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
