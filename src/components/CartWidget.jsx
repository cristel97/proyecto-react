import React from 'react'
import carrito from './shopping-cart.svg'
import './CartWidget.css'

const CartWidget =() => {
    return (
        <div>
            <img src={carrito} alt="cart" className="CartWidget"></img>
        </div>
    )
}

export default CartWidget