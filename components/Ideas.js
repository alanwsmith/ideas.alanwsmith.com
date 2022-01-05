import { useState } from 'react'
import { ideasData } from '../components/IdeasData'

export default function Ideas() {
  // console.log(ideasData)
  // const ideas = [`this <a href="asdf">asdf</a>`, 'b', 'c']
  const [ideaIndex, setIdeaIndex] = useState(0)

  function refreshIdea() {
    setIdeaIndex(1)
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: ideasData[ideaIndex] }}></div>
      <button onClick={() => refreshIdea()}>Get another idea</button>
    </div>
  )
}

