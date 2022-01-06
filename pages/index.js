import Head from 'next/head'
import Ideas from '../components/Ideas'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ideas For Programming Projects</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A colleciton of ideas for programming projects."
        />
        <meta property="og:title" content="TheIdeasOfAlan" />
        <meta property="og:type" content="website" />
        <meta name="twitter:creator" content="@theidofalan" />
        <meta
          property="og:description"
          content="A collection of ideas for programming projects"
        />
        <meta property="og:url" content={`https://ideas.alanwsmith.com`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="https://ideas.alanwsmith.com/open-graph.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicons/128x128.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/favicons/196x196.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="228x228"
          href="/favicons/228x228.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/favicons/152x152.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="167x167"
          href="/favicons/167x167.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="180x180"
          href="/favicons/180x180.png"
        />
      </Head>
      <header>
        <div className="text-sm text-right pr-2 bg-gray-900">
          <a className="text-gray-500" href="https://twitter.com/TheIdOfAlan">
            twitter
          </a>{' '}
          -{' '}
          <a className="text-gray-500" href="https://www.alanwsmith.com/">
            site
          </a>{' '}
          -{' '}
          <a
            className="text-gray-500"
            href="https://www.alanwsmith.com/the-pod-of-alan"
          >
            podcast
          </a>
        </div>
      </header>
      <main>
        <Ideas />
      </main>
    </div>
  )
}
