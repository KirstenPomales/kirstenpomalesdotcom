import Link from 'next/link'

import Container from './Container'

const Footer = () => {
  return (
    <footer className="site-foot">
      <Container>
        <nav className="foot-links" aria-label="Footer">
          <a
            className="btn btn--tomato"
            href="https://x.com/kirstenrpomales"
            target="_blank"
            rel="noopener noreferrer"
          >
            follow me on X
          </a>
          <a
            className="btn btn--mint"
            href="https://open.spotify.com/playlist/0GurmcNMc6cV0bUh72dzZl"
            target="_blank"
            rel="noopener noreferrer"
          >
            mixtape
          </a>
          <Link href="/blog/my-art">
            <a className="btn">art</a>
          </Link>
        </nav>
      </Container>
    </footer>
  )
}

export default Footer
