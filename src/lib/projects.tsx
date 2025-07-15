import CodeshareLogo from '@/icons/codeshare.svg'
import CryviaLogo from '@/icons/cryvia.svg'

export interface Project {
  title: string
  description: string
  year: string
  tags: string[]
  url: string
  githubUrl?: string
  logo: string | (({ className }: { className: string }) => JSX.Element)
  showOnHomepage?: boolean
  showOnHomepageHack?: boolean
  current?: boolean
  hackathon?: boolean
  governance?: boolean
}

export const projects: Project[] = [
  {
    title: 'Recursive Studio, Partner',
    description:
      'a development studio helping teams ship powerful crypto and AI products',
    year: '🟢 Sept 2024 - Present',
    tags: [],
    url: 'https://www.recursive.so/',
    logo: '/recursive.png',
    current: true,
  },
  {
    title: 'ReplyGuy.ai, Co-founder',
    description:
      'the AI agent system that helps you grow your X following while you sleep',
    year: '🟢 March 2025 - Present',
    tags: [],
    url: 'https://www.replyguy.ai/',
    logo: '/reply-guy-logo.png',
    current: true,
  },
  {
    title: 'TalentLayer Guild, Founder',
    description:
      'a developer guild building products in ai and crypto. led by the origional team from TalentLayer protocol (see prev projects)',
    year: '🟢 July 2022 - Present',
    tags: [],
    url: 'https://www.talentlayer.org/',
    logo: '/talentlayer-raccoon-head.png',
    current: true,
  },
  {
    title: 'Revyou, CEO',
    description:
      'the easiest way to aggregate and show off your work reputation. import and collect reviews from your clients, show them off in a stylish portfolio page',
    year: '🟡 Sept 2024 - Dec 2024',
    tags: [],
    url: 'https://www.revyou.me/',
    logo: '/Revyou1.png',
    showOnHomepage: true,
  },
  {
    title: 'TalentLayer Protocol, CEO',
    description:
      'an open-source blockchain infrastructure decentralized marketplaces with interoperable reputation. backed by outlier ventures, founders of The Graph, Kleros, +',
    year: '🟡 July 2022 - Sept 2024',
    tags: [],
    url: 'https://docs.talentlayer.org/',
    logo: '/talentlayer.png',
    showOnHomepage: true,
  },
  {
    title: 'IEEE P2145 Blockchian Governance Working Group, Vice Chair',
    description:
      'a working group on blockchian governnce standards. grew it from 0 to 200 contributors, with final research being published in 2023.',
    year: '🔴 Nov 2019 - August 2021',
    tags: [],
    url: 'https://sagroups.ieee.org/ieee2145/',
    logo: '/ieee.png',
    governance: true,
  },
  {
    title: 'Independent Consulting',
    description:
      'advised on various enterprise blockchain projects on systems design and governance, with a focus on blockchain consortia and infrastructure projects. notably designed a blockchain governance and stakeholder alignment strategy and implementation for a major enterprise blockchain KYC automation protocol geared to a network of Caribbean banks alongside team members from the IEEE working group.',
    year: '🟢 June 2019 - Present',
    tags: [],
    url: 'https://sagroups.ieee.org/ieee2145/',
    logo: '/other.png',
    governance: true,
  },
  {
    title: 'Facings, COO',
    description:
      'a white-label NFT marketplace solution for influencers, sports collectables, clothing companies, and more. grew it from 5 to 12 people, generated revenue, raised pre-seed round. its still running today w/o me.',
    tags: [],
    year: '🟢 June 2021 - July 2022',
    url: 'https://facings.io/',
    logo: '/facings.png',
  },
  {
    title: 'SponPay, COO',
    description:
      'an micro-influencer marketing marketplace. had a few 100 users and revenue, but we had trouble scaling. in 2018, most businesses did not know about influencer marketing. now, micro-influencers are the #1 marketing channel globally. we were too early!',
    tags: [],
    year: '🔴 Nov 2018 - April 2019',
    url: 'https://www.crunchbase.com/organization/sponpay',
    githubUrl: '',
    logo: '/sponpay.png',
  },
  {
    title: 'Pollr, Business Development Officer',
    description:
      'an alternative political data aggregator designed to give lobbying organizations more accurate data to advocate their positions with. the problem we tried to solve ended up being very misguided - turns out political organizations don not want more accurate data, they want data that supports their side of the story.',
    tags: [],
    year: '🔴 Jan 2019 - Nov 2020',
    url: 'https://www.crunchbase.com/organization/pollr-io',
    logo: '/pollr.png',
    hackathon: true,
    showOnHomepageHack: true,
  },
  {
    title: 'PeopleHat, Founder',
    description:
      'a monthly subsctiption for virtual assistants (indie hack, for extra income). initially tried to serve software entreprenurs, but had more traction with real estate agents. i ended up closing it to focus more on my main startup at the time (Pollr).',
    tags: [],
    year: '🔴 June 2020 - August 2020',
    url: 'https://www.indiehackers.com/post/its-happening-first-free-trial-14-products-in-14-days-update-8-f85f0daa56',
    logo: '/peoplehat.png',
    hackathon: true,
    showOnHomepageHack: false,
  },
  {
    title: 'F4F Learn, COO',
    year: '🔴 June 2015 - Jan 2016',
    description:
      'an online course platform designed for high-school age public speaking curriculum. had dozens of student teachers posting video courses from around the US and Canada and 100s of viewers (but no business model)!',
    tags: ['Next.js', 'Lens Protocol', 'Railgun', 'Sismo'],
    url: 'https://www.facebook.com/fightforforensics',
    logo: '/f4f.png',
    hackathon: true,
    showOnHomepageHack: true,
  },
  // {
  //   title: 'BeeTogether',
  //   description:
  //     'An all-in-one platform to launch and manage your own service DAO or freelance collective in web3',
  //   tags: [],
  //   url: 'https://prompthunt.vercel.app/',
  //   githubUrl: 'https://github.com/prompt-hunt',
  //   logo: '/beetogether.png',
  //   hackathon: true,
  // },
  // {
  //   title: 'PromptHunt',
  //   description: 'An open and collaborative repository of AI prompts',
  //   tags: [],
  //   url: 'https://prompthunt.vercel.app/',
  //   githubUrl: 'https://github.com/prompt-hunt',
  //   logo: '/prompthunt.png',
  //   hackathon: true,
  // },
  // {
  //   title: 'Lenschool',
  //   description:
  //     'A social learning platform to make online education more fun, collaborative and effective.',
  //   tags: ['Next.js', 'Lens Protocol', 'KnowledgeLayer', 'Livepeer'],
  //   url: 'https://lenschool.vercel.app/',
  //   githubUrl: 'https://github.com/mattiapomelli/lenschool',
  //   logo: '/lenschool.png',
  //   hackathon: true,
  // },
  // {
  //   title: 'Gumrua',
  //   description:
  //     'Web3 Gumroad, the easiest way to sell digital products and educational content with crypto.',
  //   tags: ['Next.js', 'Monerium', 'Solidity', 'Safe SDK', 'Supabase'],
  //   url: 'https://betterpc.vercel.app/',
  //   githubUrl: 'https://github.com/TalentLayer-Labs/betterpc',
  //   logo: '/gumrua.webp',
  //   hackathon: true,
  // },
  // {
  //   title: 'BetteRPC',
  //   description:
  //     'An efficient, decentralized and configurable RPC gateway leveraging a peer-to-peer network.',
  //   tags: ['Express', 'Fluence Network'],
  //   url: 'https://betterpc.vercel.app/',
  //   githubUrl: 'https://github.com/TalentLayer-Labs/betterpc',
  //   logo: '/betterpc.png',
  //   hackathon: true,
  // },
  // {
  //   title: 'Capaz',
  //   description:
  //     'A yield-bearing escrow system, and marketplace for tokenized escrow payments.',
  //   tags: ['Solidity', 'React', 'Ethereum'],
  //   url: 'https://capazpay.eth.limo/',
  //   githubUrl: 'https://github.com/TalentLayer-Labs/capaz',
  //   logo: '/capaz.png',
  //   hackathon: true,
  // },
  // {
  //   title: 'Leets',
  //   description:
  //     'The place to find new music daily, share your discoveries of new hits and support talented emerging artists.',
  //   tags: ['MongoDB', 'Next.js', 'Tailwind', 'Typescript'],
  //   url: 'https://www.leets.it/',
  //   githubUrl: 'https://github.com/valdo99/leets-frontend',
  //   logo: '/leets.png',
  // },
  // {
  //   title: 'Cryvia',
  //   description:
  //     'Test your web3 knowledge and win crypto prizes participating to live quiz contests.',
  //   tags: [
  //     'Next.js',
  //     'Tailwind CSS',
  //     'Solidity',
  //     'Polygon',
  //     'Prisma',
  //     'PostgreSQL',
  //   ],
  //   url: 'https://beta.cryvia.xyz/',
  //   githubUrl: 'https://github.com/mattiapomelli/cryvia-contracts',
  //   logo: CryviaLogo,
  // },
  // {
  //   title: 'Codeshare',
  //   description:
  //     'A platform where developers can share their best code snippets and find solutions to coding problems.',
  //   tags: ['Next.js', 'Styled-components', 'GraphQL', 'PostgreSQL', 'Hasura'],
  //   url: 'https://codeshare.tech/',
  //   githubUrl: 'https://github.com/mattiapomelli/codeshare',
  //   logo: CodeshareLogo,
  // },
]
