import React from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import ProjectCard from '@/components/ProjectCard'
import { Section, SectionHead, Text } from '@/components/Text'
import { projects } from '@/lib/projects'

const url = 'https://kirstenpomales.com/projects'
const title = 'Projects – Kirsten Pomales'
const description = 'Projects I have worked on.'

const ProjectsPage = () => {
  const openSourceProjects = projects.filter((project) => project.openSource)
  const personalProjects = projects.filter(
    (project) => !project.governance && !project.openSource
  )
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
      <Section num="01" labelledBy="oss-title">
        <SectionHead
          num="01"
          id="oss-title"
          title="open-source"
          intro="I've been contributing OS code and research occasionally. Active projects here."
        />
        <div className="cards">
          {openSourceProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section num="02" labelledBy="startups-title">
        <SectionHead
          num="02"
          id="startups-title"
          title="startups"
          intro="I've been building software startups since I was 16. I've tried a lot, failed a lot, and learned a lot."
        />
        <div className="cards">
          {personalProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section num="03" labelledBy="governance-title">
        <SectionHead
          num="03"
          id="governance-title"
          title="governance consulting and research"
          intro="I've been leading research organizations and consulting on blockchian governance since 2019. I entered the space after I left a political career for tech, and discovered this unique niche where I had a unique way to add value."
        />
        <div className="cards">
          {governanceProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section num="04" labelledBy="politics-title" dots={false}>
        <div className="field">
          <SectionHead num="04" id="politics-title" title="prior political work" />
          <div className="panel panel--butter panel--sm">
            <Text className="big">
              I worked for 5+ years in politics - initially grassroots campaign
              work, and later grassroots lobbying. I worked on issues I cared
              about, all around individual freedom and economic liberty -
              everything from preventing corporate bailouts to making
              immigration easier. I left government work because I realized
              that entrepreneurs have a hell of a lot bigger impact on human
              quality of life improvement than any policy change ever will.
            </Text>
          </div>
        </div>
        {/* <Image
          src="/static/images/politics.webp"
          width={650}
          height={350}
          alt="Picture of the author"
        /> */}
      </Section>

      <Section num="05" labelledBy="hack-title" dots={false}>
        <div className="panel panel--lemon hack">
          <span className="index-no" aria-hidden="true">
            05
          </span>
          <h2 id="hack-title">hackathon projects</h2>
          <Text>
            I&apos;ve been to 13 hackathons the past year and a half. Most of
            the time, I&apos;m there building proofs of concept on TalentLayer.
            I&apos;ve won prizes at the past 6 that I&apos;ve hacked at.
          </Text>
          {/* <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
            {filteredProjectsHack.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div> */}
          <Link href="https://linktr.ee/kphacks" target="_blank">
            <a className="btn btn--tomato">view the projects</a>
          </Link>
        </div>
      </Section>
    </>
  )
}

export default ProjectsPage
