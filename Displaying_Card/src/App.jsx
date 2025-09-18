import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Navbar from './components/navbar'
import ApiFile from './components/apifile'

function App() {

  return (
    <>
    <Navbar />
    
    <ApiFile />
    </>
  )
}

export default App
