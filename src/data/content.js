// ============================================================
//  ALL THE TEXT ON THE SITE LIVES HERE.
//  To make the site yours, edit the words in this file only.
//  Everything is placeholder (lorem ipsum) until you replace it.
//  Tip: keep the quotes ' ' and commas , in place when editing.
//
//  QUICK GUIDE: HOW TO CHANGE STUFF
//  ---------------------------------
//  CHANGE TEXT:   edit the words between the quotes. Save, and the browser updates.
//
//  ADD AN ITEM:   lists look like  [ { ... }, { ... } ]  (square brackets with
//                 curly-bracket items inside). To add one, copy a whole
//                 { ... }, line, paste it right below, and edit the words.
//                 Example, a new project:
//                   { title: 'My New Thing', tag: 'Software', blurb: 'What it does.', color: '#ff375f' },
//                 (color is any hex color code. Search "color picker" to find one.)
//
//  REMOVE AN ITEM: delete its whole { ... }, line.
//
//  COMMON MISTAKES (these cause a blank page or a red error):
//    - a missing comma after a } or a line
//    - a missing closing quote, or an apostrophe inside 'single quotes'
//      ('Roy's' breaks it; write "Roy's" with double quotes instead)
//    If the page goes blank, look at the terminal running `npm run dev`: it names the
//    file and line number of the mistake.
//
//  WANT A NEW KIND OF THING (a whole new section)? See the comments at the top of
//  src/App.jsx.
// ============================================================

const content = {
  // Your identity. Used in the nav bar, hero, and footer.
  name: 'Roy Zhiren Li presents...',
  productName: 'Roy Pro Max',
  tagline: 'Hire different.',
  subtitle: 'Biomedical Engineering Student at the University of Waterloo. Scroll down to learn more about me!',

  // Links for the buttons. Replace '#' with real links, e.g. 'mailto:you@email.com'.
  links: {
    hire: 'mailto:roy@example.com',
    resume: '#',
    email: 'mailto:royzhirenli@gmail.com',
  },

  // Animations on/off for people who turned on "Reduce Motion" on their device
  // (iPhone: Settings > Accessibility > Motion).
  //   false = everyone sees the fade-ins, the pinned phone, and the portrait fade.
  //   true  = those visitors get a calm, static version instead (kinder to people who
  //           get dizzy from motion, but your effects won't show on their device).
  respectReducedMotion: false,

  // Your photo, shown between the hero and the intro text.
  // To swap it: put your picture in the "public" folder (e.g. public/roy.jpg)
  // and change the file name below to 'roy.jpg'. Keep the `${import.meta.env.BASE_URL}`
  // part: it makes the photo load correctly on GitHub Pages too.
  // Describe the photo in "alt" for screen readers.
  portrait: {
    src: `${import.meta.env.BASE_URL}portrait-placeholder.svg`,
    alt: 'Portrait of Roy Zhiren Li',
    caption: 'The product.',
  },

  // The big statement that fades in under the hero.
  intro: [
    'Hi! My name is Roy',
    'I love building projects, memories, and communities.',
    '.',
  ],

  // Projects shown inside the pinned phone. Add or remove items freely.
  projects: [
    { title: 'Project One', tag: 'Biomedical', blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', color: '#2997ff' },
    { title: 'Project Two', tag: 'Software', blurb: 'Sed do eiusmod tempor incididunt ut labore et dolore.', color: '#bf5af2' },
    { title: 'Project Three', tag: 'Hardware', blurb: 'Ut enim ad minim veniam, quis nostrud exercitation.', color: '#30d158' },
    { title: '@royatloo', tag: 'Instagram', blurb: 'Connected 500+ followers through.', color: '#ff9f0a' },
  ],

  // The three big feature sections. "stat" is the number that counts up.
  features: [
    { eyebrow: 'Brains', title: 'R1 Neural Engine.', stat: 99, suffix: '%', statLabel: 'lorem ipsum accuracy', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Machine learning and data work for biomedical problems.' },
    { eyebrow: 'Brawn', title: 'Pro Hardware.', stat: 12, suffix: '+', statLabel: 'circuits shipped', body: 'Sed do eiusmod tempor incididunt ut labore. Electronics, sensors, and embedded systems.' },
    { eyebrow: 'Stamina', title: 'All-day battery.', stat: 24, suffix: '/7', statLabel: 'lorem ipsum uptime', body: 'Ut enim ad minim veniam, quis nostrud exercitation. Reliable, curious, and always shipping.' },
  ],

  // The tech spec sheet. Each group has a heading and rows of label + value.
  specs: [
    {
      group: 'Biomedical',
      rows: [
        { label: 'Signals', value: 'Lorem ipsum, dolor sit amet' },
        { label: 'Imaging', value: 'Consectetur adipiscing' },
        { label: 'Lab Work', value: 'Sed do eiusmod tempor' },
      ],
    },
    {
      group: 'Software',
      rows: [
        { label: 'Languages', value: 'Python, JavaScript, lorem' },
        { label: 'Frameworks', value: 'React, ipsum, dolor' },
        { label: 'Battery Life', value: 'Runs on coffee' },
      ],
    },
    {
      group: 'Hardware',
      rows: [
        { label: 'Boards', value: 'Arduino, lorem, ipsum' },
        { label: 'Tools', value: 'Soldering iron, oscilloscope' },
        { label: 'Weight', value: 'Lighter than your last intern' },
      ],
    },
  ],

  // The compare grid. Each row is one feature, with a yes/no for each column.
  compare: {
    columns: ['Roy Pro Max', 'Average Candidate'],
    rows: [
      { feature: 'Lorem ipsum dolor', values: [true, false] },
      { feature: 'Builds hardware and software', values: [true, false] },
      { feature: 'Biomedical know-how', values: [true, true] },
      { feature: 'Consectetur adipiscing', values: [true, false] },
      { feature: 'Replies to email', values: [true, true] },
    ],
  },

  // Tiny fine print at the bottom. The last one is the legal disclaimer.
  footnotes: [
    '* Requires iced tea. VERY waterproof.',
    '** Results may vary.',
    'Roy Pro Max is a parody. Roy Zhiren Li is NOT affiliated with, endorsed by, or sponsored by Apple Inc (yet).',
  ],
}

export default content
