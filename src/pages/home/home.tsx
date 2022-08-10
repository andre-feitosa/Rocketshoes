import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/actions/cartAction'

import './homeStyle.css'

interface ProductsProps {
  id: any,
  title: any,
  price: any,
  image: any
}

const Home = () => {
  const dispatch = useDispatch()

  const [ Products, ProductsState ] = useState([])
  const selectCart = useSelector((state: {cart: any})=>state.cart)
    var productFilter: any[] = []

    async function ResponseAxios() {
      const response = await axios.get('http://localhost:3333/products')

      ProductsState(response.data)
    }

    ResponseAxios()

  function handleAddProduct(product: any){
    dispatch(addToCart({product}))
  }

  return (
    <div className='products'>
      { Products.map((product: ProductsProps) => (
        <li key={String(product.id)}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>R$ {product.price}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </div>
  )
} 

export default Home