export type GoodsType = {
    id: string, 
    name: string, 
    description: string, 
    price: number,
    full_background: string
}

export type OrderType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
}