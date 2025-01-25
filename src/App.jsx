import { useState } from 'react'
import './App.css'
import { LandingPage } from './Components/landingPage'
import { Route, Routes } from 'react-router-dom'
import { Api1 } from './Components/api1'
import { Api2 } from './Components/api2'
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/api1' element={<Api1 />} />
        <Route path='/api2' element={<Api2 />} />
      </Routes>

    </>
  )
}

export default App
