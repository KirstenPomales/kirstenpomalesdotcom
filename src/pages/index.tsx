import Image from 'next/image'
import Link from 'next/link'
import { Post } from 'contentlayer/generated'

import BlogPostPreview from '@/components/BlogPost/BlogPostPreview'
import ProjectCard from '@/components/ProjectCard'
import { H1, H3, Text } from '@/components/Text'
import { getLatestPosts } from '@/lib/posts'
import { projects } from '@/lib/projects'

const HomePage = ({ latestPosts }: { latestPosts: Post[] }) => {
  const filteredProjects = projects.filter((project) => project.showOnHomepage)
  const filteredProjectsHack = projects.filter(
    (project) => project.showOnHomepageHack,
  )
  const personalProjects = projects.filter((project) => !project.hackathon)
  const hackathonProjects = projects.filter((project) => project.hackathon)
  const current = projects.filter((project) => project.current)

  return (
    <>
      {/* Bio */}
      <div className="mt-6">
        <div className="relative mb-50 size-[200px] shrink-0 lg:mb-0">
          <Image
            src="/kirsten-glow.png"
            alt="Kirsten Pomales"
            layout="fill"
            className="rounded-2xl object-contain"
          />
        </div>
        <H1 className="mb-6 mt-10">hey, i&apos;m kirsten!</H1>
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
          I&apos;ve been building a stealth startup for the past few months. More details on that coming soon.{' '}
        </Text>
        <br />
        <Text>
          I&apos;ve spent the past 8+ years in crypto full-time, building VC
          backed protocol networks, enterprise blockchain systems, & open-source
          software communities with groups like the IEEE, European Comission, and others.Read my work bio{' '}
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
        <Text>Dropout and self-taught dev.</Text>
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
        <br />
        <Text>
          I ran an IEEE research group on Blockchain Governance from 2019 to
          2021.{' '}
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
          Before that, I spent 4 years working in politics on issues like
          freedom of speech, corporate cronyism, and criminal justice reform. I
          left when I realized{' '}
          <i>
            it is faster to build tech that enables freedom instead of fighting
            existing systems
          </i>
          .
        </Text>
        <br />
        <Text>
          My most fundamental belief is that{' '}
          <a className="font-bold">humans are autonomous</a>; that is, they are
          able to take action to impact their environment and circumstances.
          Anything can be done by anyone with enough willpower and grit. We make
          our own reality. When we realize this, we are free.
        </Text>
        <br />
        <Text>
          Ask me about{' '}
          <a
            href="https://nakamotoinstitute.org/crypto-anarchist-manifesto/"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            Cryptoanarchy
          </a>
          .
        </Text>
        <br />
        <Text>
          Attempting to be based in Portugal, but usually hopping blockchain
          hackathons.
        </Text>
        <br />
        <Text>Above all, building a tribe.</Text>
      </div>

      {/* Projects */}
      <div className="mt-12">
        <H3 className="mb-3">growth mode</H3>
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
        <H3 className="mb-3">prior startups</H3>
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
        <H3 className="mb-3">hackathon projects</H3>
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
        <H3 className="mb-3">latest writing</H3>
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
