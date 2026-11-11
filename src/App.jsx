// App: the whole page, assembled from sections in top-to-bottom order.
// To reorder the page, move these lines around. To remove a section, delete its line.
//
// ============================================================
//  HOW TO ADD YOUR OWN NEW SECTION (example: "Awards")
// ============================================================
//  A section is just a small file ("component") that returns some HTML-looking code.
//
//  STEP 1: Add your words to src/data/content.js, e.g. inside `const content = { ... }`:
//            awards: ['Lorem ipsum award', 'Another award'],
//
//  STEP 2: Create a new file src/components/Awards.jsx and paste this:
//
//            import Reveal from './Reveal.jsx'      // makes things fade in on scroll
//            import content from '../data/content.js'
//
//            export default function Awards() {
//              return (
//                <section className="section">
//                  <div className="container">
//                    <Reveal>
//                      <h2>Awards.</h2>
//                      {content.awards.map((a) => <p key={a}>{a}</p>)}
//                    </Reveal>
//                  </div>
//                </section>
//              )
//            }
//
//          (className="section" and "container" are ready-made styles from global.css:
//           "section" adds spacing, "container" centers the content.)
//
//  STEP 3: Come back to THIS file and do two things:
//            a) add an import line with the others:   import Awards from './components/Awards.jsx'
//            b) add <Awards /> in the list inside <main> below, wherever you want it on the page.
//
//  STEP 4 (optional): to add a link for it in the top bar, add a line in
//          src/components/NavBar.jsx like:  <li><a href="#awards">Awards</a></li>
//          and give your section an id:     <section className="section" id="awards">
//
//  OTHER QUICK TWEAKS
//    - Hide a section for now: put {/* and */} around its line, or just delete it.
//    - Colors: top of src/styles/global.css (the --blue, --orange lines).
//    - How long scroll scenes last: the "height: ...vh" lines in
//      src/styles/PinnedPhone.css and src/styles/Portrait.css (bigger = slower).
//    - Photo: put it in the "public" folder and change portrait.src in content.js.
// ============================================================
//
// ============================================================
//  HOW TO ADD NEW PAGES (example: a new Home page, with today's
//  site moved to its own "Portfolio" page)
// ============================================================
//  RIGHT NOW the site is ONE page: everything in <main> below is stacked top to bottom.
//  To get multiple pages you need a "router": a small library that swaps which page is
//  shown depending on the address (/#/portfolio, /#/about, ...) WITHOUT reloading.
//
//  WHY HashRouter (and not BrowserRouter)?
//    GitHub Pages is a dumb file host. If a visitor opens or refreshes
//    yoursite/portfolio, GitHub looks for a file with that name, finds none, and shows a
//    404. HashRouter puts the page name after a # (royli.net/#/portfolio), which GitHub
//    ignores, so every address works. It also works on your royli.net custom domain.
//
//  STEP 1: Install the router. Run this once in the project terminal:
//            npm install react-router-dom
//
//  STEP 2: Make a "pages" folder: src/pages/. A page is just a component (like the
//          sections in src/components/) that returns a whole screen's worth of sections.
//
//  STEP 3: Move today's page into src/pages/Portfolio.jsx. Create that file and paste:
//
//            import Hero from '../components/Hero.jsx'
//            import Portrait from '../components/Portrait.jsx'
//            import Intro from '../components/Intro.jsx'
//            import PinnedPhone from '../components/PinnedPhone.jsx'
//            import Features from '../components/Features.jsx'
//            import Specs from '../components/Specs.jsx'
//            import Compare from '../components/Compare.jsx'
//
//            export default function Portfolio() {
//              return (
//                <>
//                  <Hero />
//                  <Portrait />
//                  <Intro />
//                  <PinnedPhone />
//                  <Features />
//                  <Specs />
//                  <Compare />
//                </>
//              )
//            }
//
//          (Note the "../" in the import paths: the page lives one folder deeper than
//           this file, so it has to step back out of "pages" first.)
//
//  STEP 4: Make your NEW home screen: src/pages/Home.jsx. Same idea, with whatever
//          sections you like. This starter has a headline and a button to the portfolio:
//
//            import { Link } from 'react-router-dom'
//            import content from '../data/content.js'
//
//            export default function Home() {
//              return (
//                <section className="section" style={{ textAlign: 'center', minHeight: '100vh' }}>
//                  <div className="container">
//                    <h1 className="gradient-text">{content.name}</h1>
//                    {/* <Link> is a link that swaps pages instantly. Use it instead of <a> for
//                        links between your own pages. Use <a> only for outside websites. */}
//                    <Link className="btn btn-primary" to="/portfolio">See the portfolio</Link>
//                  </div>
//                </section>
//              )
//            }
//
//  STEP 5: Turn on the router. Open src/main.jsx. Add this import at the top:
//            import { HashRouter } from 'react-router-dom'
//          and wrap <App /> like this:
//            <HashRouter>
//              <App />
//            </HashRouter>
//
//  STEP 6: In THIS file (App.jsx), replace the sections inside <main> with routes:
//
//            import { Routes, Route } from 'react-router-dom'
//            import Home from './pages/Home.jsx'
//            import Portfolio from './pages/Portfolio.jsx'
//            ...
//            <main>
//              <Routes>
//                <Route path="/" element={<Home />} />            {/* royli.net/#/          */}
//                <Route path="/portfolio" element={<Portfolio />} /> {/* royli.net/#/portfolio */}
//              </Routes>
//            </main>
//
//          NavBar, Footer, and BuyBar stay where they are in App, so they show on EVERY
//          page. To make one only appear on some pages, move it into that page's file.
//
//  TO ADD ANOTHER PAGE LATER (say "About"): make src/pages/About.jsx (like Step 4),
//  import it here, add  <Route path="/about" element={<About />} />, and link to it
//  with  <Link to="/about">About</Link>  (for example in src/components/NavBar.jsx).
//
//  GOTCHAS (read these, they are the usual "why is my page blank/broken" causes):
//   1. THE # CLASH: this site's current links like href="#projects" (NavBar.jsx, the
//      hero's "See the projects" button) jump to a spot on the page using a #. HashRouter
//      also uses the #, so clicking those would try to open a page called "projects".
//      Fix: replace each such link with one that scrolls instead, for example
//        <a href="#projects" onClick={(e) => {
//          e.preventDefault()
//          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
//        }}>Projects</a>
//      Those jump-links only make sense on the Portfolio page, so you may want to show
//      them only there, or change them to <Link to="/portfolio">.
//   2. SCROLL POSITION: when you switch pages, the browser may stay scrolled down. To
//      jump back to the top on every page change, make a tiny component:
//        import { useEffect } from 'react'
//        import { useLocation } from 'react-router-dom'
//        export default function ScrollToTop() {
//          const { pathname } = useLocation()
//          useEffect(() => { window.scrollTo(0, 0) }, [pathname])
//          return null
//        }
//      and put <ScrollToTop /> just above <NavBar /> in App.
//   3. TESTS: src/App.test.jsx renders <App /> by itself. Once App uses a router, wrap it
//      there too:  render(<HashRouter><App /></HashRouter>)  (import HashRouter from
//      'react-router-dom'). Tests that look for the hero will also need the router to be
//      on the "/portfolio" page; ask for help with this one if it fights you.
//   4. PUBLISHING: nothing changes. git add . / commit / push, and the same workflow
//      deploys it. Your pages will live at royli.net/#/ and royli.net/#/portfolio.
//
//  PREFER NO LIBRARY? A simpler (but less flexible) option is separate HTML files. That
//  means Vite "multi-page mode" (extra entries in vite.config.js). Ask and I will set
//  either one up for you.
// ============================================================
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import Portrait from './components/Portrait.jsx'
import Intro from './components/Intro.jsx'
import PinnedPhone from './components/PinnedPhone.jsx'
import Features from './components/Features.jsx'
import Specs from './components/Specs.jsx'
import Compare from './components/Compare.jsx'
import Footer from './components/Footer.jsx'
import BuyBar from './components/BuyBar.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Portrait />
        <Intro />
        <PinnedPhone />
        <Features />
        <Specs />
        <Compare />
      </main>
      <Footer />
      <BuyBar />
    </>
  )
}
