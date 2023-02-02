import React from "react";
// import Header from "./Header.jsx";
import "./Header.scss"
import About from "./About.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swipper from "./Swipper.jsx";
import Eat from "./Eat.jsx";
import logo from "./img/logo.webp";
import image from "./img/breadcrumbs-bg.webp";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";
import imag from "./img/aboutbg.webp";
import logot from "./img/videoplay.webp";
import services1 from "./../src/img/services1.webp";
import services2 from "./../src/img/services2.webp";
import services3 from "./../src/img/services3.webp";
import services4 from "./../src/img/services4.webp";

function Header() {
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
          <div className="icons">
            <IoIosSearch />
            <CiHeart />
            <CgShoppingBag />

          </div>
        </div>
      </div>
      <div className="Header_average">
        <div className="container2">

          <div className="_nav1">

            <div className="text">
              <h1>About Us</h1>
              <p className="home">
                Home <span className="drob">//</span>
                <span className="about">About Us</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  AOS.init()
  return (
    <div className='App'>
      <Header/> 

      
      <About/>
      <div className="fony">
      <Swipper/>
    
      </div>
      <div className="eat">
  <div className="container">

<div className="center">

    <div className="pastry">
      <div className="services1">
      <img src={services1} alt="" />
      </div>

      <a href="ff">PASTRY</a>
      <p className="p">Lorem ipsum dolor sit ametgtol consecr adipiscing elit.</p>
    </div>

    <div className="breakfast">
      <div className="services2">
      <img src={services2} alt="" />
      </div>
      <a href="ff">BREAKFAST</a>
      <p className="p">Lorem ipsum dolor sit ametgtol consecr adipiscing elit.</p>
    </div>

    <div className="cake">
      <div className="services3">
      <img src={services3} alt="" />
      </div>
      <a href="ff">COFEE CAKE</a>
      <p className="p">Lorem ipsum dolor sit ametgtol consecr adipiscing elit.</p>
    </div>

    <div className="tost">
      <div className="services4">
      <img src={services4} alt="" />
      </div>
      <a href="ff">BAKE TOST</a>
      <p className="p">Lorem ipsum dolor sit ametgtol consecr adipiscing elit.</p>
    </div>

</div>
  </div>
</div>
    </div>
    
  );
}

export default App;
