import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import MoonIcon from '@/icons/clover.svg'
import SunIcon from '@/icons/raccoon.svg'

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  if (!mounted)
    return <span className="btn--icon inline-block" aria-hidden="true" />

  return (
    <button
      type="button"
      className="btn btn--butter btn--icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ThemeToggler
