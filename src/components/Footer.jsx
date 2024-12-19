import React from "react";
import "../styles/Footer.css";

// Import assets
import facebookIcon from "../assets/fb.png";
import instagramIcon from "../assets/instagram.png"; // Ensure this path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        {/* Facebook Link */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
          <span>Facebook</span>
        </a>

        {/* Instagram Link */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
          <span>Instagram</span>
        </a>
      </div>

      {/* Footer Text */}
      <p>&copy; 2024 Ballu Dada Cottage. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
