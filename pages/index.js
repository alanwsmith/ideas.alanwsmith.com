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
        <meta property="og:image" content="/open-graph.png" />
      </Head>
      <main>
        <Ideas />
      </main>
    </div>
  )
}
