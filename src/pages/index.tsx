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
        <H1 className="mb-6">hey, i&apos;m kirsten!</H1>
        <Text>
          I spend most of my time leading the team behind{' '}
          <a
            href="https://www.talentlayer.org"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            Revyou
          </a>{' '}
          a platform that helps recruiters connect with top freelancers with
          verified availability. Revyou will be the first mainstream usecase
          built on the a{' '}
          <a
            href="https://core.telegram.org/bots/webapps"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            Telegram Mini App
          </a>{' '}
          infrastructure.
        </Text>
        <br />
        <Text>
          I write shitty code, but I build great teams. I&apos;ve been{' '}
          <Link href="/projects">
            <a className="underline">building software startups</a>
          </Link>{' '}
          since I was 16. I&apos;ve tried a lot, failed a lot, and learned a
          lot.
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
          Institute of Technology, Hyperledger Foundation and others.
        </Text>
        <Text>
          I spent 4 years working in politics on issues like freedom of speech,
          corporate cronyism, and criminal justice reform.
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
        <Text>Dropout and self-taught dev.</Text>
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
          Currently not based anywhere, but you can find me at the next
          blockchain hackathon.
        </Text>
      </div>

      {/* Projects */}
      <div className="mt-12">
        <H3 className="mb-3">growth mode</H3>
        <Text className="mb-6">
          My biggest goal right now is making TalentLayer grow.
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
          I&apos;ve been to 15 hackathons in the past two years. Most of the
          time, I&apos;m there building work tech proofs of concepts. I&apos;ve
          won prizes at the past 6 that I&apos;ve hacked at.
        </Text>
        {/* <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {filteredProjectsHack.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div> */}
        <div className="mt-6 flex justify-center">
          <a href="https://linktr.ee/kphacks" target="_blank" rel="noreferrer">
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
