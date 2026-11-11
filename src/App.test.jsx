// Tests are small programs that check our code behaves. Run them with: npm test
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.jsx'
import content from './data/content.js'
import { pickProjectIndex } from './components/pickProject.js'

describe('pickProjectIndex', () => {
  it('shows the first project while the phone is still unfolding', () => {
    expect(pickProjectIndex(0, 4)).toBe(0)
    expect(pickProjectIndex(0.25, 4)).toBe(0)
  })
  it('moves through projects as progress grows', () => {
    expect(pickProjectIndex(0.5, 4)).toBe(1)
    expect(pickProjectIndex(0.7, 4)).toBe(2)
    expect(pickProjectIndex(0.9, 4)).toBe(3)
  })
  it('never goes past the last project', () => {
    expect(pickProjectIndex(1, 4)).toBe(3)
  })
})

describe('BuyBar', () => {
  it('is rendered on load without needing any scrolling', () => {
    render(<App />)
    expect(screen.getByRole('complementary', { name: 'Hire Roy' })).toBeInTheDocument()
  })
})

describe('App', () => {
  it('renders the hero with content from content.js', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(content.productName)
  })
  it('renders one feature section per feature', () => {
    render(<App />)
    content.features.forEach((f) => {
      expect(screen.getByText(f.title)).toBeInTheDocument()
    })
  })
  it('renders every spec row', () => {
    render(<App />)
    const total = content.specs.reduce((n, g) => n + g.rows.length, 0)
    expect(document.querySelectorAll('.spec-row')).toHaveLength(total)
  })
  it('renders a card per compare column and the disclaimer', () => {
    render(<App />)
    expect(document.querySelectorAll('.compare-card')).toHaveLength(content.compare.columns.length)
    expect(screen.getByText(/Not affiliated with/i)).toBeInTheDocument()
  })
})
