import { useEffect, useState } from 'react'

function App() {
  const [greetings, setGreetings] = useState([])

  useEffect(() => {
    fetch('/api/greetings')
      .then((response) => response.json())
      .then((data) => {
        setGreetings(data)
      })
      .catch((error) => {
        console.error('Error fetching greetings:', error)
      })
  });

  if (!greetings || !greetings.length) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>Greetings</h1>
      <ul>
        {greetings.map((greeting, index) => (
          <li key={index}>{greeting}</li>
        ))}
      </ul>
    </>
  )
}

export default App
