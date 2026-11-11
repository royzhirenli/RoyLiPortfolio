# Roy Pro Max: Roy Zhiren Li's portfolio

A parody product-launch page where Roy is the product. Built with React, Vite, and Framer Motion.
Parody only. Not affiliated with Apple. so yeah

## Run it

```bash
npm install      # one time: downloads the libraries
npm run dev      # starts the site, open the address it prints (usually http://localhost:5173)
npm test         # runs the checks
npm run build    # makes the final site in the "dist" folder
```

## Make it yours

**Almost everything is edited in one file: `src/data/content.js`.**

| I want to change...        | Edit this in `content.js`                       |
| -------------------------- | ----------------------------------------------- |
| Name, tagline, subtitle    | `name`, `productName`, `tagline`, `subtitle`    |
| Hire / resume / email links| `links` (e.g. `'mailto:you@email.com'`)         |
| The big intro lines        | `intro`                                         |
| Projects in the phone      | `projects` (copy a line to add one)             |
| Big-number sections        | `features` (`stat` is the number that counts up)|
| Skills table               | `specs`                                         |
| Roy vs. Average Candidate  | `compare`                                       |
| Fine print                 | `footnotes`                                     |

**Colors:** edit the variables at the top of `src/styles/global.css` (`--blue`, `--orange`, ...).

**Page order:** move or delete lines in `src/App.jsx`.

**Phone scene speed:** in `src/styles/PinnedPhone.css`, `.phone-section { height: 400vh }`.
Taller means slower scrolling through the projects.

## Project map

```
src/
  data/content.js      all the words
  App.jsx              page order
  components/          one file per section (NavBar, Hero, Intro, PinnedPhone, Features, Specs, Compare, BuyBar, Footer)
  styles/              one CSS file per section, plus global.css
```

## Deploy (free)

1. Push this folder to a GitHub repo.
2. On vercel.com, choose "Add New Project", import the repo, and accept the defaults
   (Vite is detected automatically). Every push then redeploys.
