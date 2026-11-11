// CountUp: a number that counts from 0 up to "to" when it scrolls into view.
import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export default function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 }) // true once it's visible
  const reduce = useReducedMotion()
  // "value" is the number currently shown. useState remembers it between redraws.
  const [value, setValue] = useState(reduce ? to : 0)

  // useEffect runs code when something changes. Here: when the number becomes visible.
  useEffect(() => {
    if (!inView || reduce) return
    // animate() smoothly moves a number from 0 to "to" over 1.8 seconds.
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop() // cleanup if the component disappears
  }, [inView, reduce, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
