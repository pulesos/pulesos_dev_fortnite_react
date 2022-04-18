import React from "react";
import { OrderType } from "../../types/types";
import BasketItem from "./BasketItem/BasketItem";
import './BasketList.css';

type BasketListType = {
    order: OrderType[], 
    totalPrice: number,
    handleBasketShow: () => void, 
    removeFromBasket: (id: string) => void, 
    decQuantity: (id: string) => void, 
    incQuantity: (id: string) => void
}

const BasketList: React.FC<BasketListType> = ({order, handleBasketShow, removeFromBasket, decQuantity, incQuantity}) => {
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
                {
                    order.length ? order.map(item => (
                        <BasketItem 
                            key={item.id} 
                            orderItem={item} 
                            removeFromBasket={removeFromBasket} 
                            decQuantity={decQuantity} 
                            incQuantity={incQuantity}/>
                    )) : (
                    <li className="collection-item">Корзина пуста</li>
                )}
            <li className="collection-item active">
                Общая стоимость: {totalPrice} руб
                <button className="secondary-content btn-small">Оформить</button>
            </li>
            <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
        </ul>
            
    )
}

export default BasketList;