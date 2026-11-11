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
