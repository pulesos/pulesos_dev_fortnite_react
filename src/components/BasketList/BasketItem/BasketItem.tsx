import React from "react";
import { OrderType } from "../../../types/types";
import './BasketItem.css';

type BasketItemType = {
    orderItem: OrderType,
    removeFromBasket: (id: string) => void,
    decQuantity: (id: string) => void, 
    incQuantity: (id: string) => void
}

const BasketItem: React.FC<BasketItemType> = ({orderItem, removeFromBasket, decQuantity, incQuantity}) => {
    const {quantity, id, name, price} = orderItem
    return (
        <li className="collection-item">
            {name} <i className='material-icons basket-quantity' onClick={() => decQuantity(id)}>remove</i>x{quantity}<i className='material-icons basket-quantity' onClick={() => incQuantity(id)}>add</i> = {price*quantity} руб.
            <a href="#!" className="secondary-content" onClick={() => removeFromBasket(id)}>
                <i className="material-icons item-delete">close</i>
            </a>
        </li>
    )
}

export default BasketItem;