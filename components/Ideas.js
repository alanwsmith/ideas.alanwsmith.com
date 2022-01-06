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
    <div>
      <div className="h-screen">
        <div
          className={`text-gray-400 flex flex-col items-center justify-center h-1/6`}
        >
          <div>Need an idea for a programming project?</div>
          <div>Here ya go...</div>
        </div>
        <div className="flex flex-col items-center justify-center h-1/4">
          <div
            className="text-2xl w-2/3 text-center lg:max-w-prose"
            dangerouslySetInnerHTML={{ __html: ideasData[ideaIndex] }}
          ></div>
        </div>
        <div className="text-center">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => refreshIdea()}
          >
            Get another idea
          </button>
        </div>
      </div>
      <div className="max-w-prose"></div>
    </div>
  )
}
