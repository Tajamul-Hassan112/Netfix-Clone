import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__column">
            <h1 className="footer__logo">Netflix</h1>
            <h4>Questions? Contact us.</h4>
            <ul>
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Account</li>
              <li>Media Center</li>
            </ul>
          </div>

          <div className="footer__column">
            <h1 className="footer__logo">Netflix</h1>
            <h4>Account</h4>
            <ul>
              <li>Redeem Gift Cards</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
          </div>

          <div className="footer__column">
            <h1 className="footer__logo">Netflix</h1>
            <h4>Media Center</h4>
            <ul>
              <li>Buy Gift Cards</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>

          <div className="footer__column">
          <h1 className="footer__logo">Netflix</h1>
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        </div>
       

        <div className="footer__bottom">
          <h1 className="footer__logo">Netflix</h1>
          <p>&copy; 2024 Your Netflix Clone</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
