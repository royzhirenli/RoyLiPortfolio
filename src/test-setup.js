// Runs before every test. Adds handy checks like expect(el).toBeInTheDocument().
import '@testing-library/jest-dom/vitest'

// The fake browser used in tests doesn't have IntersectionObserver (which Framer Motion
// uses to detect "this element scrolled into view"), so we provide an empty stand-in.
class FakeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = FakeObserver

// Same idea for matchMedia, which is how the browser reports "reduce motion" settings.
globalThis.matchMedia =
  globalThis.matchMedia ||
  (() => ({ matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }))
