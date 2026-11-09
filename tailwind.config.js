const { fontFamily } = require('tailwindcss/defaultTheme')

// Design tokens live in src/styles/global.css (:root). Tailwind only maps them.
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    '../data/posts/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        main: ['Space Grotesk', ...fontFamily.sans],
      },
      colors: {
        butter: 'var(--butter)',
        ink: 'var(--ink)',
        tomato: 'var(--tomato)',
        pink: 'var(--pink)',
        mint: 'var(--mint)',
        lemon: 'var(--lemon)',
        paper: 'var(--paper)',
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        line: 'var(--line)',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': false, // hide backticks from inline code
            'code::after': false,
            'blockquote p:first-of-type::before': false, // remove quotation marks in blockquotes
            'blockquote p:last-of-type::after': false,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
