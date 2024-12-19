import React from "react";
import {useLocation,Link} from "react-router-dom";
import '../styles/Confirmation.css';

const Confirmation = () => {
    const location = useLocation();
    const {orderDetails} = location.state || {};

    if (!orderDetails) {
        return (
            <div className = "confirmation-conatiner">
                <h1>Order not found</h1>
                <p>It seems like you haven't placed an order yet.</p>
                <link to = "/" className = "go-back-link">Go Back to Menu</link>
            </div>
        );
    }

    const {userDetails,cart,totalPrice} = orderDetails;

    return (
        <div className ="confirmation-container">
            <h1>Thank For Your Order!</h1>
            <p>Your order has been placed successfully.</p>

            <h2>Order Summary</h2>
            <div className = "order-summary">
                {cart.map((item) => (<div key = {item.id} className = "order-item">
                    <span>{item.name}*{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <h3>Total : ${totalPrice.toFixed(2)}</h3>
            </div>
            <h2>Delivery Details</h2>
            <p>Name:{userDetails.name}</p>
            <p>Adress:{userDetails.address}</p>
            <p>Phone:{userDetails.phone}</p>
            <Link to = "/" className = "go-back-link">Place another Order</Link>
        </div>
    );
} ;
export default Confirmation;