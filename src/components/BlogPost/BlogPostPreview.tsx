import Link from 'next/link'
import { Post } from 'contentlayer/generated'

import { formatDate } from '@/utils/dates'

const BlogPostPreview = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="post-row">
        <div className="post-row__meta">
          <time className="chip" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="chip chip--paper">{post.readingTime}</span>
        </div>
        <article>
          <h3 className="post-row__title">{post.title}</h3>
          <p className="post-row__excerpt">{post.excerpt}</p>
        </article>
      </a>
    </Link>
  )
}

export default BlogPostPreview
