
import Link from 'next/link'
import { Post } from 'contentlayer/generated'

import BlogPostPreview from '@/components/BlogPost/BlogPostPreview'
import ProjectCard from '@/components/ProjectCard'
import { H1, H3, H4, Text } from '@/components/Text'
import { getLatestPosts } from '@/lib/posts'
import { projects } from '@/lib/projects'

const HomePage = ({ latestPosts }: { latestPosts: Post[] }) => {
  const filteredProjects = projects.filter((project) => project.showOnHomepage)

  
  const current = projects.filter((project) => project.current)

  return (
    <>
      {/* Bio */}
      <div className="mt-6">
        <H1 className="mb-6 mt-10">hey, i&apos;m kirsten!</H1>
        <H4 className="mb-6">i do ai, decentralized systems, and sometimes lobbying.</H4>
        
        <Text>
          I lead{' '}
          <a
            href="https://recursive.so/"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            Recursive
          </a>
          , the software development studio behind your favorite crypto and AI
          startups.
        </Text>
        <br />
        <Text>
        <strong>I&apos;ve been building a stealth startup for the past few months. More details on that coming soon.</strong>
        </Text>

        <H3 className="mb-4 mt-8">/startups</H3>
        <Text>
          I&apos;m a 2x venture backed founder who loves ai and{' '}
          <a
            href="https://medium.com/talentlayer/the-great-evolution-of-the-marketplace-market-networks-unbundling-and-user-owned-networks-b2ab9a086ec"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            multi-sided marketplaces
          </a>
          .
        </Text>
        <br />
        <Text>
          I&apos;ve been{' '}
          <Link href="/projects">
            <a className="underline">building software startups</a>
          </Link>{' '}
          since I was 16. I&apos;ve tried a lot, failed a lot, and learned a
          lot.
        </Text>
        <br />
        <Text>Dropout and self-taught dev.</Text>

        <H3 className="mb-4 mt-8">/decentralized tech</H3>
        <Text>
          I&apos;ve spent the past 8+ years in crypto, building VC
          backed protocol networks, enterprise blockchain systems, & open-source
          software communities with groups like the IEEE, European Comission, and others. Read my work bio{' '}
          <a
            href="https://www.recursive.so/leadership#kirsten"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            here
          </a>
          .
        </Text>
        <br />
        <Text>
          I ran a 200 person IEEE standards group on Blockchain Governance from 2019 to 2021.{' '}
          <a
            href="https://www.youtube.com/channel/UCgyT_7we6YGDVQJDKZD6EBA"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            You can listen to my lectures
          </a>{' '}
          on blockchain governance and ecosystem design, hosted by INATBA
          (European Commission blockchain association), The IEEE, Fedex
          Institute of Technology, Hyperledger Foundation and others. I also
          consulted multiple enterprise blockchain projects during that time.
        </Text>
        <br />
        <Text>
          My 1st crypto transaction was buying a pocket knife with $DASH during{' '}
          <a
            href="https://en.wikipedia.org/wiki/Porcupine_Freedom_Festival"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            PorcFest
          </a>{' '}
          2018.
        </Text>

        <H3 className="mb-4 mt-8">/lobbying & government relations</H3>
        <Text>
          Before getting into tech, I spent 4 years working in US politics on free-market issues like promoting innovation, reducing corporate cronyism, tax reform, criminal justice reform, immigration, and more. <strong>My work has impacted the passage of dozens of bills on the state and federal level.</strong>
        </Text>
        <br />
        <Text>
          Teams I worked with: Senator Rob Portman, Americans for Prosperity, American Petroleum Institute, Concerned Veterans of America, Libre Initiative, and others.
        </Text>
        <br />
        <Text>
          After moving to Europe in 2022, I&apos;ve secured my teams Certificate of Excellence in Innovation and major European Union grant funding.
        </Text>
        <br />
        <Text>
          <strong>Currently working on some new innovation initiatives in the US and EU. More on that soon.</strong>
        </Text>

        <H3 className="mb-4 mt-8">/personal stuff</H3>

        <Text>
          My most fundamental belief is that humans are autonomous; that is, they are
          able to take action to impact their environment and circumstances.
          Anything can be done by anyone with enough willpower and grit. We make
          our own reality. When we realize this, we are free.
        </Text>
        <br />
        <Text>
          No one cares about your story, they just care about what you can do. I was homeless at 6. I ran away at 16. I&apos;ve worked 3 minimum wage jobs at once. I get it. Shit&apos;s hard sometimes. But that&apos;s only an excuse if you make it one.
        </Text>
        <br />
        <Text>
          I&apos;m a &quot;politically radical&quot;{' '}
          <a
            href="https://nakamotoinstitute.org/crypto-anarchist-manifesto/"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            Cryptoanarchist
          </a>
          . The future is decentralized, democratized, and censorship resistant.
        </Text>
        <br />
        <Text>Unabashed techno-optimist.</Text>
        <br />
        <Text>Above all, I&apos;m building a tribe.</Text>
      </div>

      {/* Projects */}
      <div className="mt-12">
        <H4 className="mb-3">growth mode</H4>
        <Text className="mb-6">
          I&apos;m building a few projects at the moment. Check them out here!
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {current.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mt-12">
        <H4 className="mb-3">prior startups</H4>
        <Text className="mb-6">
          I&apos;ve built multiple VC-backed, revenue generating startups like
          marketplaces, data infra, and more.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/projects">
            <a className="text-primary text-center bg-base-200 rounded-lg px-4 py-2">
              see more
            </a>
          </Link>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-12">
        <H4 className="mb-3">hackathon projects</H4>
        <Text className="mb-6">
          I&apos;ve been to 15+ hackathons in the past two years. Most of the
          time, I&apos;m there building work tech proofs of concepts. I&apos;ve
          won prizes at the past 6 that I&apos;ve hacked at.
        </Text>
        {/* <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {filteredProjectsHack.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div> */}
        <div className="mt-6 flex justify-center">
          <a href="https://revyou.me/kphacks" target="_blank" rel="noreferrer">
            <a className="text-primary text-center bg-base-200 rounded-lg px-4 py-2">
              view the projects
            </a>
          </a>
        </div>
      </div>

      {/* Posts */}
      <div className="mt-12">
        <H4 className="mb-3">latest writing</H4>
        <Text className="mb-6">
          I write occasionally about tech, startups, and the future of work.
        </Text>
        <div className="flex flex-col gap-8">
          {latestPosts.map((post) => (
            <BlogPostPreview key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/blog" target="_blank">
            <a className="text-primary text-center bg-base-200 rounded-lg px-4 py-2">
              read more
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomePage

export async function getStaticProps() {
  const latestPosts = getLatestPosts()
  return {
    props: {
      latestPosts,
    },
  }
}

