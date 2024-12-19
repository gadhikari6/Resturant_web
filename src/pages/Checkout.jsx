import React, { useState } from "react";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    address: "",
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setIsPopupVisible(true); // Show popup
  };

  // Close popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout Page</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="place">Place:</label>
          <input
            type="text"
            id="place"
            name="place"
            value={formData.place}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h3>Checkout Details</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Place:</strong> {formData.place}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <button onClick={closePopup} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
