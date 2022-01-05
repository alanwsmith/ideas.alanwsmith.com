import { useState } from 'react'
import { ideasData } from '../components/IdeasData'

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

export default function Ideas() {
  shuffle(ideasData)
  const [ideaIndex, setIdeaIndex] = useState(0)

  function refreshIdea() {
    if (ideaIndex < ideasData.length) {
      setIdeaIndex(ideaIndex + 1)
    } else {
      shuffle(ideasData)
      setIdeaIndex(0)
    }
  }

  return (
    <div className="max-w-prose">
      <div
        className="text-2xl"
        dangerouslySetInnerHTML={{ __html: ideasData[ideaIndex] }}
      ></div>
      <button
        className="mt-8 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => refreshIdea()}
      >
        Get another idea
      </button>
    </div>
  )
}
