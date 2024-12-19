import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import "../styles/Menu.css";

// Import images (Correct paths)
import momoImage from "../assets/momo.png";
import chowmeinImage from "../assets/chowmein.png";
import samosaImage from "../assets/samosa.png";
import chickenTikkaImage from "../assets/chicken_tikka.png";
import biryaniImage from "../assets/briyani.png";
import tandooriImage from "../assets/tandoori.png";

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  // Menu items with options and images
  const menuItems = [
    {
      id: 1,
      name: "MoMo",
      price: 8.99,
      description: "Steamed dumplings with delicious filling.",
      options: ["Chicken", "Veg"],
      image: momoImage,
    },
    {
      id: 2,
      name: "Chowmein",
      price: 7.99,
      description: "Stir-fried noodles with vegetables.",
      options: ["Chicken", "Veg"],
      image: chowmeinImage,
    },
    {
      id: 3,
      name: "Samosa",
      price: 5.99,
      description: "Crispy pastry filled with spiced chicken.",
      options: ["Chicken"],
      image: samosaImage,
    },
    {
      id: 4,
      name: "Chicken Tikka",
      price: 10.99,
      description: "Grilled chicken marinated with spices.",
      image: chickenTikkaImage,
    },
    {
      id: 5,
      name: "Biryani",
      price: 12.99,
      description: "Fragrant rice cooked with spices.",
      options: ["Chicken", "Goat"],
      image: biryaniImage,
    },
    {
      id: 6,
      name: "Tandoori Chicken",
      price: 12.99,
      description: "Roasted chicken cooked in a clay oven.",
      image: tandooriImage,
    },
  ];

  // State to manage selected options
  const [selectedOptions, setSelectedOptions] = useState({});

  // Update the selected option
  const handleOptionChange = (id, option) => {
    setSelectedOptions({ ...selectedOptions, [id]: option });
  };

  // Handle adding items to the cart
  const handleAddToCart = (e, item) => {
    e.preventDefault();
    const selectedOption =
      selectedOptions[item.id] || (item.options ? item.options[0] : null);
    addToCart({ ...item, option: selectedOption });
    alert(`${item.name} (${selectedOption || "No Option"}) added to cart!`);
  };

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            {/* Image */}
            <img src={item.image} alt={item.name} className="menu-item-image" />

            {/* Item Details */}
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>

            {/* Dropdown for options */}
            {item.options && (
              <select
                value={selectedOptions[item.id] || item.options[0]}
                onChange={(e) => handleOptionChange(item.id, e.target.value)}
              >
                {item.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}

            {/* Add to Cart Button */}
            <button onClick={(e) => handleAddToCart(item,e)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
