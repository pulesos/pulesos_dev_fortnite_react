import React, {useEffect, useState} from "react";
import axios from 'axios';
import {API_KEY, API_URL} from '../../api/api';
import Preloader from "../Preloader/Preloader";
import './Shop.css';
import GoodsList from "../GoodsList/GoodsList";
import Cart from "../Cart/Cart";
import BasketList from "../BasketList/BasketList";
import Alert from "../Alert/Alert";
import { GoodsType, OrderType } from "../../types/types";


const Shop: React.FC = () => {
    const [items, setItems] = useState<GoodsType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [order, setOrder] = useState<OrderType[]>([]);
    const [isBasketShow, setBasketShow] = useState<boolean>(false);
    const [alertName, setAlertName] = useState<string>('');

    const addToBasket = (item: OrderType) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }  
        setAlertName(item.name); 
    }

    const removeFromBasket = (itemId: string) => {
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder);
    };

    const incQuantity = (itemId: string) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                } 
            } else {
                    return el;            
            }
        });
        setOrder(newOrder);
    };

    const decQuantity = (itemId: string) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                } 
            } else {
                    return el;            
            }
        });
        setOrder(newOrder);
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(() => {
        axios.get(API_URL, {
            headers: {
                // @ts-ignore
                Authorization: API_KEY,
            }
        })
        .then(res => {
            setItems(res.data.featured);
            setLoading(false);
        })
    }, [])

    return (
        <main className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? <Preloader/> : <GoodsList items={items} addToBasket={addToBasket}/>}
            {isBasketShow && 
                <BasketList 
                order={order}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
                decQuantity={decQuantity}
                incQuantity={incQuantity} 
                totalPrice={0}/>
            }
            {alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
        </main>
    )
}

export default Shop;