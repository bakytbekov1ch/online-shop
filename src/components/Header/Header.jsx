import React from "react";

import { GrSearch } from "react-icons/gr";

import cart from "../../assets/svg/cart.svg";
import Wishlist from "../../assets/svg/Wishlist.svg";

import "./Header.scss";

function Header() {
  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="flex">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%! <strong>ShopNow</strong>
            </p>
            <select name="" id="">
              <option value="en">ENG</option>
              <option value="ru">RUS</option>
              <option value="kg">KGZ</option>
            </select>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header-menu">
              <div className="logo">Exclusive</div>
              <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
              </ul>
            </div>
            <div className="header-auth">
              <div className="header-search">
                <input type="text" placeholder="What are you looking for?" />
                <GrSearch className="header-search-btn" />
              </div>
              <div className="header-icons">
                <img src={Wishlist} alt="" />
                <img src={cart} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </header>
    </>
  );
}

export default Header;
