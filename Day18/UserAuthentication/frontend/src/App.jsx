import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Register from './Auth/Register'
import Login from './Auth/Login'
import Daashboard from './pages/Daashboard'
import { useAuth } from './contexts/AuthContext'





function App() {

  const { isAuthenticated } = useAuth()
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={!isAuthenticated ? <Register /> : <Navigate to={'/dashboard'}></Navigate>}></Route>
          <Route path='/login' element={!isAuthenticated ? <Login /> : <Navigate to={'/dashboard'}></Navigate>}></Route>
          <Route path='/dashboard' element={isAuthenticated ? <Daashboard /> : <Login></Login>}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
