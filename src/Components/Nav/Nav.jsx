import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// Components & Assets
import Logo from '../../assets/react-logo.png'
import Supermarket from '../../assets/supermarket.png'
import Burger from '../../assets/burger.png'
import Wallet from './Wallet'

const Nav = (props) => {
  console.log(Logo)
  return (
    <nav className="navigation-bar">
      <NavLink to='/' id='logo' ><img src={Logo} /></NavLink>
      <NavLink to='/burgers' id='burger'><img src={Burger} /></NavLink>
      <NavLink to='/market'><img src={Supermarket} /></NavLink>
      <Wallet cash={ props.cash }/>

    </nav>
  )
}

export default Nav