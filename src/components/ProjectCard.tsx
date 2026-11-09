import Image from 'next/image'
import classNames from 'classnames'

import { H3, TextSmall } from '@/components/Text'
import ExternalLinkIcon from '@/icons/external-link.svg'
import GithubIcon from '@/icons/github.svg'
import { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  /** Horizontal row layout, used inside the "growth mode" card. */
  row?: boolean
}

const ProjectCard = ({ project, row = false }: ProjectCardProps) => {
  const { title, description, url, githubUrl, year } = project
  const { logo } = project

  const Logo =
    typeof logo === 'string'
      ? () => <Image src={logo} height="72px" width="72px" alt="Project logo" />
      : project.logo

  const actions = (
    <div className="card__actions">
      {githubUrl && (
        <a
          className="btn btn--icon"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      )}
      <a
        className="btn btn--mint btn--icon"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLinkIcon />
      </a>
    </div>
  )

  if (row) {
    return (
      <article className="card card--row">
        <div className="logo-box">
          <Logo className="w-10 h-10" />
        </div>
        <div className="card__body">
          <H3>{title}</H3>
          <TextSmall>{description}</TextSmall>
          <p className="font-bold">{year}</p>
          {actions}
        </div>
      </article>
    )
  }

  return (
    <article className={classNames('card')}>
      <header className="card__top">
        <div className="logo-box">
          <Logo className="w-10 h-10" />
        </div>
        {actions}
      </header>
      <H3>{title}</H3>
      <TextSmall>{description}</TextSmall>
      <p className="card__meta">{year}</p>
    </article>
  )
}

export default ProjectCard
