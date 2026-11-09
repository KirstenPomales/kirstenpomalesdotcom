import { ReactNode } from 'react'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

import { H4 } from '@/components/Text'

const CustomLink = ({ href, ...rest }: { href?: string }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    )
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />
}

interface ImageComponentProps extends ImageProps {
  caption?: ReactNode
}

const MDXComponents = {
  Image: ({ caption, src, alt, ...props }: ImageComponentProps) => (
    <figure className="media-frame flex flex-col items-center">
      <Image src={src} alt={alt} {...props} />
      {caption && <figcaption className="media-caption">{caption}</figcaption>}
    </figure>
  ),
  a: CustomLink,
  h3: ({ children, ...props }: { children?: ReactNode }) => (
    <H4 {...props}>{children}</H4>
  ),
}

export default MDXComponents
