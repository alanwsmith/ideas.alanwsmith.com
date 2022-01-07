import { useEffect, useState } from 'react'
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

const shuffledArray = shuffle(ideasData)

export default function Ideas() {
  const [ideaIndex, setIdeaIndex] = useState(0)
  const [ideasArray, setIdeaArray] = useState(shuffledArray)

  function refreshIdea() {
    if (ideaIndex < ideasArray.length) {
      const newIndex = ideaIndex + 1
      setIdeaIndex(newIndex)
    } else {
      setIdeaArray(shuffle(ideasData))
      setIdeaIndex(0)
    }
  }

  function makeKey(initialString) {
    return initialString.replace(/\W/g, '')
  }

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const returnValue = (
    <div>
      <div className="h-screen">
        <div className="text-gray-400 flex flex-col items-center justify-center h-1/6">
          <div>Need an idea for a programming project?</div>
          <div>Here ya go...</div>
        </div>
        <div className="flex flex-col items-center justify-center h-1/6">
          <div
            className="text-2xl w-2/3 text-center lg:max-w-prose"
            dangerouslySetInnerHTML={{
              __html: `<div>${ideasArray[ideaIndex]}</div>`,
            }}
          ></div>
        </div>
        <div className="flex flex-col items-center justify-center h-1/6">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => refreshIdea()}
          >
            Get another idea
          </button>
        </div>
      </div>
      <div>
        <ul>
          {ideasArray.map((idea) => (
            <li key={makeKey(idea)}>{idea}</li>
          ))}
        </ul>
      </div>
    </div>
  )

  return <> {isMounted ? returnValue : null}</>
}
