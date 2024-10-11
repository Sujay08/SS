// import { useState } from 'react'
import './App.css'
import Login from './pages/onboarding/Login'
import Password from './pages/onboarding/Password'
import SetPassword from './pages/onboarding/SetPassword'
import Dashboard from './pages/dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/password' element={<Password/>}></Route>
          <Route path='/set-password' element={<SetPassword/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
