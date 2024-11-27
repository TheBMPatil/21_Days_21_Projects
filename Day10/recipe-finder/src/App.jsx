import { useState } from 'react'
import './App.css'
import MainPage from './component/MainPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MealInfo from './component/MealInfo.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MainPage /> */}
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/:mealid' element={<MealInfo/>}/>
      </Routes>


    </>
  )
}

export default App
