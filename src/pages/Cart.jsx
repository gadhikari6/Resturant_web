import React, {useContext} from "react";
import CartContext from "../context/CartContext";
import '../styles/Cart.css';

const Cart = () => {
    const {cart} = useContext(CartContext);





    const totalPrice = cart.reduce((acc,item) => acc + item.price * item.quantity,0);
    return (
        <div className = "cart-conatiner">
            <h1>Your cart</h1>
            {cart.map((item) => (
                <div key = {item.id} className = "cart-item">
                    <span>
                        {item.name} * {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity). toFixed(2)}</span>
                    </div>
            ))}
            <h3>Total:${totalPrice.toFixed(2)}</h3>
            <button>Proceed to Checkout</button>
        </div>
    );
};
export default Cart;