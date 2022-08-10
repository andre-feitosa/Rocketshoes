import React from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { useSelector } from 'react-redux'

import './index.css'
import logo from "../../assets/logo.svg"

const Header = () => {
  const selectCart = useSelector((state: {cart: any})=>state.cart)

  return (
    <div className='header'>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <Link to='/cart' className='cart'>
        <div>
          <strong>Meu carrinho</strong>
          <span>{selectCart.length} items</span>
        </div>
        <MdShoppingBasket size={36} color="fff"/>
      </Link>
    </div>
  )
}

export default Header