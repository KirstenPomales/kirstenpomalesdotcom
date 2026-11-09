import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="google-site-verification"
          content="MAJPawqNlnYmdLM95eERenip4W__AxwbUJJzkXKPANs"
        />
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
