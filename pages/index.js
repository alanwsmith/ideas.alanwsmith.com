import Head from 'next/head'
import Ideas from '../components/Ideas'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ideas For Programming Projects</title>
        <meta
          name="description"
          content="A colleciton of ideas for programming projects."
        />
      </Head>
      <main>
        <div>Need an idea for a programming project?</div>
        <div>Here ya go...</div>
        <Ideas />
      </main>
      <footer></footer>
    </div>
  )
}
