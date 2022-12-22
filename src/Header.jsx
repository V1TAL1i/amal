import React from "react";
import "./index.css";
import logo from "./img/logo.webp";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header_top">
        <div className="container">
          <div>World Wide Completely Free Returns and Free Shipping</div>
          <div className="nav">
            <a href="">+00 123 456 789</a>
            <a href="">demo@example.com</a>
            <div>Account</div>
          </div>
        </div>
      </div>
      
      <div className="Header_nav">
        <div className="container">
      <div className="Bucker">
        <img src={logo} alt="" />

      </div>
      <div className="nav">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
        </ul>
        </div>
      <div></div>
      </div>
    </div>
    </div>
  );
}
