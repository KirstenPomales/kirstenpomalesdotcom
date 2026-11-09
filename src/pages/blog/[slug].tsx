import { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Post } from 'contentlayer/generated'

import BlogSeo from '@/components/BlogPost/BlogPostSeo'
import MDXComponents from '@/components/MDXComponents'
import { H1 } from '@/components/Text'
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/utils/dates'

const BlogPostPage = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  useEffect(() => {
    // Don't register view if is not production
    if (
      process.env.NEXT_PUBLIC_ENV !== 'production' ||
      window.location.hostname !== 'kirstenpomales.com'
    )
      return

    // Don't register view if it's me 😝
    if (
      localStorage.getItem('admin-secret') ===
      process.env.NEXT_PUBLIC_ADMIN_SECRET
    )
      return

    const registerView = () =>
      fetch(`/api/views/${post.slug}`, {
        method: 'PUT',
      })

    registerView()
  }, [post.slug])

  return (
    <>
      <BlogSeo post={post} />
      <article className="article">
        <header className="article__head">
          <H1>{post.title}</H1>
          <p className="article__meta">
            <time className="chip" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span className="sr-only"> • </span>
            <span className="chip chip--paper">{post.readingTime}</span>
          </p>
        </header>
        <div className="article__body prose max-w-none">
          <MDXContent components={MDXComponents} />
        </div>
      </article>
    </>
  )
}

export default BlogPostPage

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getAllPostSlugs()
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = getPostBySlug(params?.slug?.toString() || '')
  return {
    props: {
      post,
    },
  }
}
