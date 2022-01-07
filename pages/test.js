import { useEffect, useState } from 'react'
import { ideasData } from '../components/IdeasData'

function shuffle(array) {
  let currentIndex = array.length
  let randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex = currentIndex - 1
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

const shuffledArray = shuffle(ideasData)

export default function Home() {
  const [ideaIndex, setIdeaIndex] = useState(0)
  const [ideasArray, setIdeaArray] = useState(shuffledArray)
  const [textString, setTextString] = useState(ideasArray[ideaIndex])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const returnValue = (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: `<div>${textString}</div>` }}
      ></div>
      <hr />
      <ul>
        {ideasArray.map((idea) => (
          <li key={idea.replace(/\W/g, '')}>{idea}</li>
        ))}
      </ul>
    </div>
  )

  return <> {isMounted ? returnValue : null}</>
}
