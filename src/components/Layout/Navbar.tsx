import Link from 'next/link'
import { useRouter } from 'next/router'

import ThemeToggler from '@/components/ThemeToggler'
import CloverCarousel from './CloverCarousel'
import Container from './Container'

const links = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: '/blog', label: 'blog' },
]

const Navbar = () => {
  const router = useRouter()

  return (
    <header>
      <div className="site-head">
        <Container>
          <nav className="nav" aria-label="Primary">
            {links.map(({ href, label }) => (
              <Link key={href} href={href}>
                <a
                  className="nav-link"
                  aria-current={router.pathname === href ? 'page' : undefined}
                >
                  {label}
                </a>
              </Link>
            ))}
          </nav>
          <ThemeToggler />
        </Container>
      </div>
      <CloverCarousel />
    </header>
  )
}

export default Navbar
