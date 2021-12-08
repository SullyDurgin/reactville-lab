import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'

const App = () => {
  return (
    <>
      <Nav/>
      <main>
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='burgershop' element={<BurgerShop/>}/>
      </Routes>
      </main>
    </>
  )
}

export default App