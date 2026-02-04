import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

import ThemeToggler from '@/components/ThemeToggler'
import Container from './Container'
import CloverCarousel from './CloverCarousel'

const Navbar = () => {
  const router = useRouter()

  return (
    <header>
      <div className="py-12">
        <Container className="flex justify-between items-center">
          <nav className="flex items-center gap-8">
            <Link href="/">
              <a
                className={cx(
                  'font-medium',
                  router.pathname === '/' ? 'underline' : 'text-text-secondary',
                )}
              >
                home
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={cx(
                  'font-medium',
                  router.pathname === '/projects'
                    ? 'underline'
                    : 'text-text-secondary',
                )}
              >
                projects
              </a>
            </Link>
            <Link href="/blog">
              <a
                className={cx(
                  'font-medium',
                  router.pathname === '/blog'
                    ? 'underline'
                    : 'text-text-secondary',
                )}
              >
                blog
              </a>
            </Link>
          </nav>
          <ThemeToggler />
        </Container>
      </div>
      <CloverCarousel />
    </header>
  )
}

export default Navbar
