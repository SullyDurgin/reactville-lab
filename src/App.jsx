import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import SuperMarket from './Components/SuperMarket/SuperMarket'
import Nav from './Components/Nav/Nav'

const App = () => {

  const [cash, setCash] = useState(100)

  return (
    <>
      <Nav cash={cash} />
      <main>
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/burgers' element={<BurgerShop/>}/>
        <Route path='/market' element={<SuperMarket/>}/>
      </Routes>
      </main>
    </>
  )
}

export default App