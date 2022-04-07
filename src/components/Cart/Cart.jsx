import React from "react";
import './Cart.css';

const Cart = ({quantity = 0, handleBasketShow}) => {
    return (
        <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    )
}

export default Cart;