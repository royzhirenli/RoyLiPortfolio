// BuyBar: a bar pinned to the bottom of the screen with "Hire Roy" buttons.
// It is ALWAYS on screen: it slides in when the page loads and stays while you scroll.
//
// position: fixed (in BuyBar.css) is what keeps it glued to the bottom of the window.
import { motion } from 'framer-motion'
import content from '../data/content.js'
import '../styles/BuyBar.css'

export default function BuyBar() {
  return (
    <motion.aside
      className="buybar"
      aria-label="Hire Roy"
      initial={{ y: 100, opacity: 0 }} // start: below the screen and invisible
      animate={{ y: 0, opacity: 1 }} // end: in place and visible
      transition={{ duration: 0.6, delay: 0.5 }} // slides in half a second after load
    >
      <p className="buybar-text">
        <strong>{content.productName}</strong>
        <span> Available now.</span>
      </p>
      <div className="buybar-buttons">
        <a className="btn btn-primary" href={content.links.hire}>Hire Roy</a>
        <a className="btn" href={content.links.resume}>Resume</a>
      </div>
    </motion.aside>
  )
}
