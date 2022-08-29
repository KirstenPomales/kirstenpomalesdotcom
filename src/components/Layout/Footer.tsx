import Container from './Container'

const Footer = () => {
  return (
    <footer className="mb-20">
      <Container>
        <hr className="w-full border-1 border-gray-200 mb-8" />
        <div className="flex gap-10">
          <a
            href="https://github.com/mattiapomelli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a href="mailto:mattiapomelli@gmail.com">Email</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer