import React from "react";
import { GoodsType, OrderType } from "../../types/types";
import GoodsItem from "./GoodsItem/GoodsItem";
import './GoodsList.css';

type GoodsListType = {
    items: GoodsType[],
    addToBasket: (item: OrderType) => void

}

const GoodsList: React.FC<GoodsListType> = ({items, addToBasket}) => {
    if (!items.length) {
       return <h3>Nothing here</h3>
    }
    return (
        <div className='goods'>
            {items.map(item => (
                <GoodsItem key={item.id} item={item} addToBasket={addToBasket}/>
            ))}
        </div>
    )
}

export default GoodsList;