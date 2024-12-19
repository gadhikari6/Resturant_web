import React, {createContext,useState} from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([
        {id:1,name:"MoMo",price:8.99,quantity:2},
        {id:2,name:"Chowmein",price:7.99,quantity:1},
        {id:3,name:"Samosa",price:4.99,quantity:3},

    ]);
    const addToCart = (item) => {
    setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id===item.id);
            if(existingItem) {
                return prevCart.map((cartItem) => cartItem.id == item.id)? {...cartItem,quantity:cartItemquantity +1} : cartItem
            } else {
                return [...prevCart,{...item,quantity:1}];
            }
        });
    };

    //API calling will bw herjr

    return (
        <CartContext.Provider value = {{cart, setCart,addToCart}}>{children}</CartContext.Provider>
    );
};
export default CartContext;