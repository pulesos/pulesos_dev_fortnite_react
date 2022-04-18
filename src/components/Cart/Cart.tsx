import React from "react";
import './Cart.css';

type CartType = {
    quantity: number,
    handleBasketShow: () => void
}

const Cart: React.FC<CartType> = ({quantity = 0, handleBasketShow}) => {
    return (
        <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    )
}

export default Cart;