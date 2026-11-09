# Design system: Neo-Brutal Growth Mode

The site's look: butter-yellow paper, black ink, chunky blocks with hard offset
shadows, and a few colourful tilted stickers. It should feel playful, loud and
hand-made, in the spirit of Gumroad 2023 and the Figma community pages.

All tokens live in one place: `:root` in `src/styles/global.css`. Tailwind
reads the same variables (see `tailwind.config.js`), and the component classes
in `global.css` (`.btn`, `.card`, `.sticker`, …) are built only from tokens.

## Colour tokens

| Token            | Light       | Dark        | Use                                          |
| ---------------- | ----------- | ----------- | -------------------------------------------- |
| `--butter`       | `#ffd60a`   | same        | page background, nav pills, highlight blocks |
| `--ink`          | `#000000`   | same        | text on any coloured block                   |
| `--tomato`       | `#ff3b1f`   | same        | primary CTA, display highlight, hot blocks   |
| `--pink`         | `#ffe5ec`   | same        | sticker / card fill                          |
| `--mint`         | `#c1f7d5`   | same        | sticker / card fill, inline link chips       |
| `--lemon`        | `#fff07a`   | same        | "growth mode" block, card hover fill         |
| `--paper`        | `#fffaf0`   | same        | long-form reading surface (blog posts)       |
| `--bg`           | `--butter`  | `#121212`   | page background                              |
| `--fg`           | `--ink`     | `--paper`   | text placed directly on the page             |
| `--line`         | `--ink`     | `--butter`  | every border and every hard shadow           |

Coloured blocks always carry black text (`--ink`), whatever the theme. Only
text sitting directly on the page uses `--fg`.

## Type

- One family: **Space Grotesk** (Google Fonts, 500 and 700). Body text is 500
  and everything else is 700. There are no light weights.
- Scale (fluid `clamp()`):
  - `--fs-display`: up to 12rem. Used for the hero name and the 404 page.
    Tracking -0.06em, line-height 1.02.
  - `--fs-h1`: up to 5.5rem. Used for page titles such as "writing" and post
    titles. Tracking -0.04em.
  - `--fs-h2`: up to 7rem. Used for section headers. Tracking -0.03em,
    line-height 0.98.
  - `--fs-h3`: 1.5 to 2.2rem. Used for card titles and post titles in lists.
  - `--fs-body`: 1.06 to 1.3rem.
  - `--fs-label`: 0.8rem. Uppercase, tracking 0.12em, used for index numbers
    and meta chips.
- Headings are lowercase wherever the content already is. Case is never
  changed by CSS.

## Spacing

`--s1 .5rem · --s2 1rem · --s3 1.5rem · --s4 2.5rem · --s5 4rem · --s6 7rem`.
The page wrap is `min(100% - 2rem, 1200px)`, so there is a 16px gutter on
mobile. Sections are padded `--s6` top and bottom on desktop and `--s5` on
mobile. Long-form reading is capped at about 70ch.

## The chunky primitive

```css
--border: 3px solid var(--line);
--shadow: 6px 6px 0 var(--line);     /* 4px under 480px */
--shadow-sm: 3px 3px 0 var(--line);
```

Radius is always 0. Every block, card, sticker, frame and button uses
`--border`, and every interactive one also uses a shadow.

## Components

- **Nav**: a row of pill buttons (`.nav-link`) with butter fill and a hard
  shadow. The current page is inverted to an ink fill with butter text. The
  theme toggle is a square chunky button holding the clover or raccoon icon.
  Under the header runs the **clover marquee**, an ink strip with scrolling
  clovers and a 3px border top and bottom.
- **Buttons** (`.btn`): bold label, `.75em 1.25em` padding, pink by default,
  with `.btn--tomato` and `.btn--mint` variants. Square icon-only buttons use
  `.btn--icon`.
- **Inline links** (`.ilink`): a mint highlighter chip with a 3px border and a
  small shadow that presses in on hover.
- **Section header** (`SectionHead`): an ink index chip (`01`, `02`, …), a huge
  h2, and an optional intro paragraph. The section also shows a ghost outlined
  numeral behind it (decorative, `aria-hidden`) and sits on a dotted-grid
  background.
- **Panels** (`.panel`): text panels in pink, mint, butter or tomato, placed on
  a 12-column grid with staggered column offsets so they never line up into a
  boring stack.
- **Cards** (`ProjectCard`): a logo in a bordered square, an h3 title, a
  description, a bold meta line (dates and status emoji) and chunky icon link
  buttons. Fills rotate pink, mint and lemon. On hover a card lifts by -4px
  and its shadow grows to 10px. Every other card is tilted 1deg.
- **Growth card**: a lemon block rotated -1deg holding horizontal project rows.
  This is the signature moment under the hero.
- **Stickers** (`.sticker`): small bordered labels rotated -3deg to +4deg with
  a hard shadow, used to tag short existing lines of copy.
- **Post rows** (`PostRow`): full-width chunky link cards with a date chip and
  reading time. They press down on hover like a button.
- **Media frames**: post images sit in a 3px border with a hard shadow on paper.
- **Article surface**: a paper (`--paper`) card with a border and shadow
  holding the blog post body. Its prose headings are bold, its links are
  inline chips, its lists use square ink bullets, and its blockquotes are pink
  blocks with a tomato rule.
- **Footer**: a full-bleed ink band containing chunky buttons.

## Motion

- **Press**: interactive elements move `translate(6px, 6px)` while their
  shadow drops to `0 0 0` on hover, focus-visible and active, over 120ms with
  `ease`. It feels like pushing a physical button into the page.
- **Lift**: non-button cards move `translate(-4px,-4px)` and their shadow grows
  to 10px.
- **Straighten**: tilted elements (polaroid-style frames, stickers on hover)
  rotate back to 0deg.
- **Marquee**: the clovers scroll in a 28s linear loop.
- `prefers-reduced-motion` turns off every transition, transform animation and
  the marquee.
- Focus is shown as a 4px tomato outline with a 4px offset.

## Signature moves

1. **Hard offset black shadows on everything you can click**, which press down
   flush on hover.
2. **3px black borders with square corners** on every block. There are no
   gradients, blurs or radii.
3. **Tilted stickers and cards** in pink, mint and tomato, rotated a few
   degrees off the grid.
4. **A huge Space Grotesk display heading with a tomato highlight block**, such
   as "hey, i'm **kirsten!**".
5. **Butter-yellow paper with ink index chips and ghost outlined numerals**
   numbering each section.
