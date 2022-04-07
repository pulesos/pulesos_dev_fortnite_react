import React from "react";
import './BasketItem.css';

const BasketItem = ({id, name, price, quantity, removeFromBasket, decQuantity, incQuantity}) => {
    return (
        <li className="collection-item">
            {name} <i className='material-icons basket-quantity' onClick={() => decQuantity(id)}>remove</i>x{quantity}<i className='material-icons basket-quantity' onClick={() => incQuantity(id)}>add</i> = {price*quantity} руб.
            <span href="#!" class="secondary-content" onClick={() => removeFromBasket(id)}>
                <i class="material-icons item-delete">close</i>
            </span>
        </li>
    )
}

export default BasketItem;