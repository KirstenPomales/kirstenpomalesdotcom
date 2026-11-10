import Image from 'next/image'
import Link from 'next/link'
import { Post } from 'contentlayer/generated'

import BlogPostPreview from '@/components/BlogPost/BlogPostPreview'
import ProjectCard from '@/components/ProjectCard'
import { ExtLink, Section, SectionHead, Text } from '@/components/Text'
import { getLatestPosts } from '@/lib/posts'
import { projects } from '@/lib/projects'

const HomePage = ({ latestPosts }: { latestPosts: Post[] }) => {
  const filteredProjects = projects.filter((project) => project.showOnHomepage)

  const favoriteHacks = projects.filter((project) => project.favoriteHack)

  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <h1 className="display" id="hero-title">
          <span className="inline-block w-full">hey, i&apos;m</span>{' '}
          <span className="hl mt-[0.14em]">kirsten!</span>
        </h1>
        <h4 className="sticker hero__head">
          i do ai, decentralized systems, and sometimes lobbying.
        </h4>

        <div className="hero__grid">
          <div className="hero__intro">
            <Text>
              I lead the Movement team at{' '}
              <ExtLink href="https://logos.co/movement">Logos</ExtLink>, where
              we&apos;re building a parallel society operating on a sovereign
              tech stack.
            </Text>
            <Text>
              I lead <ExtLink href="https://recursive.so/">Recursive</ExtLink>,
              a software development studio working with clients like Dragonfly
              Capital, EthersJS, and others.
            </Text>
            <Text>
              Allegedly, I run a{' '}
              <ExtLink href="https://x.com/talentlayer">
                cult of racoons
              </ExtLink>
              .
            </Text>
            <Text>
              Based in Prague. Most likely to be found at a shisha lounge or on
              the crypto hackathon circuit.
            </Text>
          </div>
        </div>
      </section>

      {/* /startups */}
      <Section num="01" labelledBy="startups-title">
        <SectionHead num="01" id="startups-title" title="/startups" />
        <div className="grid12 stagger">
          <div className="panel">
            <Text>
              I&apos;m a 2x venture backed founder who loves{' '}
              <ExtLink href="https://medium.com/talentlayer/the-great-evolution-of-the-marketplace-market-networks-unbundling-and-user-owned-networks-b2ab9a086ec">
                multi-sided marketplaces
              </ExtLink>{' '}
              decentralized systems, and AI.
            </Text>
          </div>
          <div className="panel panel--mint">
            <Text>
              I&apos;ve been{' '}
              <Link href="/projects">
                <a className="ilink">building software startups</a>
              </Link>{' '}
              since I was 16. I&apos;ve tried a lot, failed a lot, and learned a
              lot.
            </Text>
          </div>
        </div>
        {/* prior startups */}
        <div className="cards mt-16">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="cta-row">
          <Link href="/projects">
            <a className="btn btn--tomato">see more</a>
          </Link>
        </div>
      </Section>

      {/* /decentralized tech */}
      <Section num="02" labelledBy="tech-title">
        <SectionHead num="02" id="tech-title" title="/decentralized tech" />
        <div className="grid12 stagger">
          <div className="panel panel--sm lift">
            <Text>
              I&apos;ve spent the past 8+ years in crypto, building VC backed
              protocol networks, enterprise blockchain systems, &amp;
              open-source software communities with groups like the IEEE,
              European Comission, and others. Read my work bio{' '}
              <ExtLink href="https://www.recursive.so/leadership#kirsten">
                here
              </ExtLink>
              .
            </Text>
          </div>
          <div className="panel panel--sm panel--mint lift">
            <Text>
              I ran a 200 person IEEE standards group on Blockchain Governance
              from 2019 to 2021.{' '}
              <ExtLink href="https://www.youtube.com/channel/UCgyT_7we6YGDVQJDKZD6EBA">
                You can listen to my lectures
              </ExtLink>{' '}
              on blockchain governance and ecosystem design, hosted by INATBA
              (European Commission blockchain association), The IEEE, Fedex
              Institute of Technology, Hyperledger Foundation and others. I also
              consulted multiple enterprise blockchain projects during that
              time.
            </Text>
          </div>
          <div className="panel panel--sm panel--butter lift">
            <Text>
              My 1st crypto transaction was buying a pocket knife with $DASH
              during{' '}
              <ExtLink href="https://en.wikipedia.org/wiki/Porcupine_Freedom_Festival">
                PorcFest
              </ExtLink>{' '}
              2018.
            </Text>
          </div>
        </div>
        <figure className="polaroid">
          <Link href="/blog/eth-prague-good-profit-good-token">
            <a className="polaroid__link">
              <Image
                src="/static/images/tokenomics-talk-2026.jpg"
                width={1800}
                height={997}
                alt="Kirsten Pomales on stage at ETHPrague 2026 next to her slide: Part 1, A Brief History of Tokens. Every major trend in token economics has been a reaction to SEC pressure, not what projects actually need."
              />
              <figcaption>
                <span className="polaroid__title">
                  Good Profit, Good Token: Building the Next Era of Crypto
                  Businesses
                </span>
                <span className="polaroid__meta">ETHPrague 2026</span>
              </figcaption>
            </a>
          </Link>
        </figure>
      </Section>

      {/* /lobbying & government relations */}
      <Section num="03" labelledBy="lobby-title" dots={false}>
        <div className="field">
          <SectionHead
            num="03"
            id="lobby-title"
            title="/lobbying & government relations"
          />
          <div className="split">
            <div className="panel panel--butter panel--sm">
              <Text className="big">
                Before getting into tech, I spent 5+ years working in US
                politics on free-market issues like promoting innovation,
                reducing corporate cronyism, tax reform, criminal justice
                reform, immigration, and more.{' '}
                <strong>
                  My work has impacted the passage of dozens of bills on the
                  state and federal level.
                </strong>
              </Text>
            </div>
            <div className="stack">
              <Text>
                Teams I worked with: Senator Rob Portman, Americans for
                Prosperity, American Petroleum Institute, Concerned Veterans of
                America, Libre Initiative, and others.
              </Text>
              <Text>
                After moving to Europe in 2022, I&apos;ve secured my teams
                Certificate of Excellence in Innovation and major European Union
                grant funding.
              </Text>
            </div>
          </div>
        </div>
      </Section>

      {/* /personal stuff */}
      <Section num="04" labelledBy="personal-title">
        <SectionHead num="04" id="personal-title" title="/personal stuff" />
        <div className="grid12 personal">
          <div className="panel panel--sm panel--mint lift">
            <Text className="personal__long">
              My most fundamental belief is that humans are autonomous; that is,
              they are able to take action to impact their environment and
              circumstances. Anything can be done by anyone with enough
              willpower and grit. We make our own reality. When we realize this,
              we are free.
            </Text>
          </div>
          <div className="panel panel--sm panel--lemon lift">
            <Text>Dropout and self-taught dev.</Text>
          </div>
          <div className="panel panel--sm panel--butter lift">
            <Text>
              I&apos;m a{' '}
              <ExtLink href="https://nakamotoinstitute.org/crypto-anarchist-manifesto/">
                Cryptoanarchist
              </ExtLink>
              . The future is decentralized, democratized, and censorship
              resistant.
            </Text>
          </div>
          <div className="panel panel--sm lift tilt-r">
            <Text>Unabashed techno-optimist.</Text>
          </div>
          <div className="panel panel--sm panel--tomato lift tilt-l">
            <Text>Above all, I&apos;m building a tribe.</Text>
          </div>
        </div>
      </Section>

      {/* hackathon projects */}
      <Section num="05" labelledBy="hack-title" dots={false}>
        <div className="panel panel--lemon hack">
          <span className="index-no" aria-hidden="true">
            05
          </span>
          <h2 id="hack-title">hackathon projects</h2>
          <Text>
            I&apos;ve averaged 10+ hackathons per year since 2023, winning
            prizes at most of them. I like building crazy experiments with
            frontier tech. Check out some of my favorites below.
          </Text>
        </div>
        <div className="cards mt-12">
          {favoriteHacks.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <a
          className="tweet-shot"
          href="https://x.com/kirstenrpomales/status/2082465368803627082"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/static/images/ethglobal-lisbon-post.jpg"
            width={1778}
            height={1660}
            alt="Kirsten's X post about building Lortnoc Tahc at ETHGlobal Lisbon: 6 days ago the EU passed the Chat Control Act, enabling tech cos and governments to scan your messages. The video shows the team presenting on the ETHGlobal Lisbon finalist stage. 103 likes."
          />
          <span className="sticker tweet-shot__badge">ETHGlobal Finalist</span>
        </a>
      </Section>

      {/* latest writing */}
      <Section num="06" labelledBy="writing-title">
        <SectionHead
          num="06"
          id="writing-title"
          title="latest writing"
          intro="I write occasionally about tech, startups, and the future of work."
        />
        <div className="posts">
          {latestPosts.map((post) => (
            <BlogPostPreview key={post.slug} post={post} />
          ))}
        </div>
        <div className="cta-row">
          <Link href="/blog">
            <a className="btn">read more</a>
          </Link>
        </div>
      </Section>
    </>
  )
}

export default HomePage

export async function getStaticProps() {
  const latestPosts = getLatestPosts()
  return {
    props: {
      latestPosts,
    },
  }
}
