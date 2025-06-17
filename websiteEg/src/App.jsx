import { useState } from 'react'

//import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Feature from './Component/Feature'
import About from './Component/About'
import Pricing from './Component/Pricing'
import Footer from './Pages/Footer'
import Newsletter from './Component/Newsletter'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Feature/>
      <About/>
      <Pricing/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
