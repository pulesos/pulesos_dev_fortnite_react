import React from "react";
import { GoodsType, OrderType } from "../../../types/types";
import './GoodsItem.css';

type GoodsItemType = {
    item: GoodsType
    addToBasket: (item: OrderType) => void
}

const GoodsItem: React.FC<GoodsItemType> = ({item, addToBasket}) => {
    const {description, id, price, full_background, name} = item
    
    const addBasket = () => {
        addToBasket({
            id,
            name,
            price,
            quantity: 0
        })
    }
    return (
        <div className="card" id={id}>
            <div className="card-image">
            <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
            <span className="card-title">{name}</span>
            <p>{description}</p>
            <div className="card-action">
                <button className='btn' onClick={addBasket}>Купить</button>
                <span className='right price'>{price} руб.</span>
            </div>
            </div>
        </div>
    )
}

export default GoodsItem;