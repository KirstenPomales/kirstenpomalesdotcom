import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@kirstenrpomales" />
        <meta
          name="twitter:title"
          content="Kirsten Pomales - startups, decentralization, sovereignty"
        />
        <meta
          name="twitter:description"
          content="startups, decentralization, sovereignty"
        />
        <meta
          name="twitter:image"
          content="https://kirstenpomales.com/static/images/banner.png"
        />
        <meta
          name="twitter:image:alt"
          content="startups, decentralization, sovereignty"
        />
        <link
          rel="preload"
          href="/fonts/nunito-sans-v6-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/nunito-sans-v6-latin-800.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/nunito-sans-v6-latin-900.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
