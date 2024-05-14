import React from "react";

import iconsend from "../../assets/svg/icon-send.svg";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__block">
            <h2>Exclusive</h2>
            <h3>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div className="footer-ms">
              <input type="text" placeholder="Enter your email" />
              <img src={iconsend} alt="" />
            </div>
          </div>
          <div className="footer__block">
            <h2>Support</h2>
            <h3>
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </h3>
            <span>exclusive@gmail.com</span>
            <span>+88015-88888-9999</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
