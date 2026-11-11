// useReducedMotion: answers "should this visitor get the calm, no-animation version?"
//
// Every animated component (Reveal, CountUp, PinnedPhone, Portrait) asks this one function.
// Whether it listens to the device's "Reduce Motion" setting is controlled by ONE switch:
//   respectReducedMotion in src/data/content.js
//     false -> everyone sees the animations (this is how the site is set up now)
//     true  -> visitors who turned on "Reduce Motion" on their device get a calm,
//              static version (an accessibility courtesy; some people get dizzy from motion)
import { useReducedMotion as useDeviceReducedMotion } from 'framer-motion'
import content from '../data/content.js'

export default function useReducedMotion() {
  // This reads the device setting (iPhone: Settings > Accessibility > Motion > Reduce Motion).
  const deviceWantsLessMotion = useDeviceReducedMotion()
  // Only obey it if the switch in content.js says to.
  return content.respectReducedMotion ? deviceWantsLessMotion : false
}
