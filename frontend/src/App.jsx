
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      <button className="fancy-button" onClick={() => navigate('/start')}>
        HELLPPPP
      </button>
      <p>bruh</p>
    </>
  )
}

export default App
