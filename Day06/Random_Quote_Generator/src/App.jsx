import { useState } from 'react'

import './App.css'
import RandomQuote from './Components/RandomQuote/RandomQuote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RandomQuote/>
      </div>
     
    </>
  )
}

export default App
