import Link from 'next/link'
import { NextSeo } from 'next-seo'

const title = '404'

export default function NotFound() {
  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title,
        }}
      />
      <section className="section section--dots flex flex-col items-start gap-10">
        <span className="ghost-num" aria-hidden="true">
          404
        </span>
        <h1 className="display">
          <span className="hl">404</span> – Not Found
        </h1>
        <p className="sticker tilt-r4 text-[length:var(--fs-h3)]">
          Are you lost? 👀
        </p>
        <Link href="/">
          <a className="btn btn--tomato">go home</a>
        </Link>
      </section>
    </>
  )
}
