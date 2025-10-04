import { ArticleJsonLd, NextSeo } from 'next-seo'
import { Post } from 'contentlayer/generated'

const BlogPostSeo = ({ post }: { post: Post }) => {
  const { slug, title, excerpt, date } = post
  const publishedTime = new Date(date).toISOString()
  const url = `https://kirstenpomales.com/blog/${slug}`

  return (
    <>
      <NextSeo
        title={`${title} – Kirsten Pomales`}
        description={excerpt}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime,
          },
          url,
          title,
          description: excerpt,
          images: post.image
            ? [
                {
                  url: `https://kirstenpomales.com/static/images/${post.slug}/${post.image}`,
                },
              ]
            : [],
        }}
      />
      <ArticleJsonLd
        authorName="Kirsten Pomales"
        dateModified={date}
        datePublished={date}
        description={excerpt}
        publisherName="Kirsten Pomales"
        title={title}
        url={url}
        images={[]}
        publisherLogo=""
      />
    </>
  )
}

export default BlogPostSeo
