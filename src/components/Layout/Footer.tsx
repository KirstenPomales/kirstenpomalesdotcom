import Container from './Container'

const Footer = () => {
  return (
    <footer className="mb-20 mt-14">
      <Container>
        <hr className="w-full border-1 border-base-200 mb-8" />
        <div className="flex gap-10">
          <a
            href="https://linktr.ee/hellokp"
            target="_blank"
            rel="noopener noreferrer"
          >
            linktree
          </a>
          <a
            href="https://open.spotify.com/playlist/0GurmcNMc6cV0bUh72dzZl"
            target="_blank"
            rel="noopener noreferrer"
          >
            mixtape
          </a>
          <link href="/blog/my-art">art</link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
