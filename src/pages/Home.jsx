import React from "react";

const Home = () => {
    return (
        <div>
            <header>
                <h1>Welcome to The Ballus Dada Resturant</h1>
                <p>Delicious Nepali Food Delivered to your doorstep</p>
                <button onClick = {() => window.location.href = '/menu'}>Order Now</button>
            </header>

        </div>
    );
};
export default Home;