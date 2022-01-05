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
        <div className="half">
          <div className="flex flex-col h-screen">
            <div className="flex-grow" id="container">
              <div>
                <div>Need an idea for a programming project?</div>
                <div className="pb-4">Here ya go...</div>
                <Ideas />
              </div>
            </div>
          </div>
          <div className="half">div</div>
        </div>
      </main>
    </div>
  )
}
