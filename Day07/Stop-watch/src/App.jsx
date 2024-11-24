import { useState } from 'react'
import './App.css'
import StopWatch from './Components/StopWatch.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* Coz  StoopWatch is component we can use it multiple ttimes and its loggic codee will be running separately */}
      <StopWatch />
      <StopWatch />
      <StopWatch />


    </>
  )
}

export default App
