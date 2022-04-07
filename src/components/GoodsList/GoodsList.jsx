import React from "react";
import GoodsItem from "./GoodsItem/GoodsItem";
import './GoodsList.css';

const GoodsList = ({goods, addToBasket}) => {
    if (!goods.length) {
       return <h3>Nothing here</h3>
    }
    return (
        <div className='goods'>
            {goods.map(item => (
                <GoodsItem key={item.id} {...item} addToBasket={addToBasket}/>
            ))}
        </div>
    )
}

export default GoodsList;