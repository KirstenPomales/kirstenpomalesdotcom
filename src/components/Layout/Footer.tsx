import Container from './Container'

const Footer = () => {
  return (
    <footer className="mb-20 mt-14">
      <Container>
        <hr className="w-full border-1 border-base-200 mb-8" />
        <div className="flex gap-10">
          <a
            href="https://github.com/kirstenpomales/"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            href="https://twitter.com/kirstenpomales"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          <a
            href="https://www.linkedin.com/in/kirstenpomales/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
