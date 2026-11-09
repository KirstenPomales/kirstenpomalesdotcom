import { ReactNode } from 'react'
import classNames from 'classnames'

interface TextProps {
  children: ReactNode
  className?: string
}

export const H1 = ({ children, className }: TextProps) => (
  <h1 className={classNames('page-title', className)}>{children}</h1>
)

export const H3 = ({ children, className }: TextProps) => (
  <h3 className={classNames('card__title', className)}>{children}</h3>
)

export const H4 = ({ children, className }: TextProps) => (
  <h4 className={classNames('card__title', className)}>{children}</h4>
)

export const Text = ({ children, className }: TextProps) => (
  <p className={className}>{children}</p>
)

export const TextSmall = ({ children, className }: TextProps) => (
  <p className={classNames('card__desc', className)}>{children}</p>
)

/** Inline external link rendered as a chunky highlighter chip. */
export const ExtLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" className="ilink" rel="noreferrer">
    {children}
  </a>
)

interface SectionHeadProps {
  num?: string
  title: ReactNode
  intro?: ReactNode
  id?: string
  as?: 'h1' | 'h2'
}

/** Section header: ink index chip, huge heading, optional intro. */
export const SectionHead = ({ num, title, intro, id, as = 'h2' }: SectionHeadProps) => {
  const Heading = as
  return (
    <div className="section__head">
      {num && (
        <span className="index-no" aria-hidden="true">
          {num}
        </span>
      )}
      <Heading id={id}>{title}</Heading>
      {intro && <p>{intro}</p>}
    </div>
  )
}

interface SectionProps {
  num?: string
  children: ReactNode
  className?: string
  labelledBy?: string
  dots?: boolean
}

/** Page section with optional ghost numeral and dotted-grid backdrop. */
export const Section = ({ num, children, className, labelledBy, dots = true }: SectionProps) => (
  <section
    aria-labelledby={labelledBy}
    className={classNames('section', dots && 'section--dots', className)}
  >
    {num && (
      <span className="ghost-num" aria-hidden="true">
        {num}
      </span>
    )}
    {children}
  </section>
)
