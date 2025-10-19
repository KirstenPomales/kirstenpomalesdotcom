import React from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import ProjectCard from '@/components/ProjectCard'
import { H4, Text } from '@/components/Text'
import { projects } from '@/lib/projects'

const url = 'https://kirstenpomales.com/projects'
const title = 'Projects – Kirsten Pomales'
const description = 'Projects I have worked on.'

const ProjectsPage = () => {
  const personalProjects = projects.filter((project) => !project.governance)
  const governanceProjects = projects.filter((project) => project.governance)

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <H4 className="mt-6 mb-3">startups</H4>
      <Text className="mb-5">
        I&apos;ve been building software startups since I was 16. I&apos;ve
        tried a lot, failed a lot, and learned a lot.
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
        {personalProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <H4 className="mt-6 mb-3">governance consulting and research</H4>
      <Text className="mb-5">
        I&apos;ve been leading research organizations and consulting on
        blockchian governance since 2019. I entered the space after I left a
        political career for tech, and discovered this unique niche where I had
        a unique way to add value.
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
        {governanceProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <H4 className="mt-20 mb-3">prior political work</H4>
      <Text className="mb-5">
        I worked for 4 years in politics - initially grassroots campaign work,
        and later grassroots lobbying. I worked on issues I cared about, all
        around individual freedom and economic liberty - everything from
        preventing corporate bailouts to making immigration easier. I left
        government work because I realized that entrepreneurs have a hell of a
        lot bigger impact on human quality of life improvement than any policy
        change ever will.
      </Text>
      {/* <Image
        src="/static/images/politics.webp"
        width={650}
        height={350}
        alt="Picture of the author"
      /> */}

      <div className="mt-12">
        <H4 className="mb-3">hackathon projects</H4>
        <Text className="mb-6">
          I&apos;ve been to 13 hackathons the past year and a half. Most of the
          time, I&apos;m there building proofs of concept on TalentLayer.
          I&apos;ve won prizes at the past 6 that I&apos;ve hacked at.
        </Text>
        {/* <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {filteredProjectsHack.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div> */}
        <div className="mt-6 flex justify-center">
          <Link href="https://linktr.ee/kphacks" target="_blank">
            <a className="text-primary text-center bg-base-200 rounded-lg px-4 py-2">
              view the projects
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
