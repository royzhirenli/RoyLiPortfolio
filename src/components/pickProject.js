// A tiny helper that answers: "given how far we've scrolled, which project is on screen?"
//
// progress = a number from 0 (top of the scene) to 1 (bottom of the scene).
// count    = how many projects there are.
// introEnd = the first part of the scroll is spent unfolding the phone; projects
//            only start flipping after this point (0.25 = after the first 25%).
//
// Example: with 4 projects and introEnd 0.25, the remaining 75% is split in 4 equal slices.
export function pickProjectIndex(progress, count, introEnd = 0.25) {
  if (count <= 0) return 0
  if (progress <= introEnd) return 0 // still unfolding: show the first project
  // How far through the "flipping" part are we? (0 to 1)
  const t = (progress - introEnd) / (1 - introEnd)
  // Multiply by count and round down to get a slice number, but never go past the last one.
  return Math.min(count - 1, Math.floor(t * count))
}
