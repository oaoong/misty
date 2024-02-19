import { useState, useEffect } from 'react'

const BodyContents = () => {
  const [data, setData] = useState<null | { title: string }>(null)

  const getData = async () => {
    await new Promise(resolve => setTimeout(resolve, 5000))

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const jsonData = await response.json()
    setData(jsonData)
  }

  useEffect(() => {
    getData()
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return <div>{data.title}</div>
}

export default BodyContents
