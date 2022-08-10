import React from 'react'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import {useSelector, useDispatch } from 'react-redux'
import { removeToCart, updateAmount } from '../../redux/actions/cartAction'

import './cartStyle.css'

const Cart = () => {
  const selectCart = useSelector((state: {cart: any})=>state.cart)

  const dispatch = useDispatch()

  const teste: any = []

  selectCart.reduce((prev: any, elem: any)=>{teste.push(Number((elem.payload[0].product.price * elem.amount).toFixed(2)))}, 0)

  var soma = teste.reduce(function(soma: any, i: any) {
    return soma + i;
  }, 0);

  return (
    <div className='container'>
      <div className='product_table'>
        <table>
        <thead>
          <tr>
            <th/>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {
            selectCart.map((product: any, key: any)=>{
              const wayProduct = product.payload[0].product

              const amount = product.amount

              const subTotal = (amount * wayProduct.price).toFixed(2)

              return(<tr key={key}>
                <td>
                  <img src={wayProduct.image} alt="" />
                </td>
                <td>
                  <strong>{wayProduct.title}</strong>
                  <span>R$ {wayProduct.price}</span>
                </td>
                <td>
                  <div className='div_input'>
                    <button>
                      <MdRemoveCircleOutline size={20} color="#7159c1" onClick={()=>{dispatch(updateAmount({product, amount: amount - 1}))}}/>
                    </button>
                    <input type="number" readOnly value={amount}/>
                    <button>
                      <MdAddCircleOutline size={20} color="#7159c1" onClick={()=>{dispatch(updateAmount({product, amount: amount + 1}))}}/>
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R${subTotal}</strong>
                </td>
                <td>
                  <button>
                    <MdDelete size={20} color="#7159c1" onClick={()=>{dispatch(removeToCart({product}))}}/>
                  </button>
                </td>
              </tr>)
            })
          }
        </tbody>
        </table>
      </div>
      <footer>
        <button>Finalizar o pedido</button>
         
        <div className='total'>
          <span>TOTAL</span>
          <strong>R${(soma).toFixed(2)}</strong>
        </div>
      </footer>
    </div>
  )
}

export default Cart