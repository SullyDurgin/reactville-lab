import { PromiseProvider } from 'mongoose'
import React from 'react'
import Cash from '../../assets/cash.png'

const Wallet = (props) => {
  return (
    <p className="display-items"><img src={Cash} /> $ {props.cash}</p>
  )
}

export default Wallet