const title = 'Kirsten Pomales'
const description = 'never stop working on something bigger'
const url = 'https://kirstenpomales.com'
const image = `${url}/static/images/banner.png`

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
    title,
    description,
    images: [
      {
        url: image,
        alt: 'Kirsten Pomales',
        type: 'image/png',
      },
    ],
  },
}

export default SEO
