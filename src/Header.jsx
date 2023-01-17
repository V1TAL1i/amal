import React from "react";
import "./index.css";
import logo from "./img/logo.webp";
import image from "./img/breadcrumbs-bg.webp";
import {IoIosSearch} from "react-icons/io";
import {CiHeart} from "react-icons/ci";
import {CgShoppingBag} from "react-icons/cg";
import imag from "./img/aboutbg.webp"; 
import logot from "./img/videoplay.webp";
// import block1 from ".img\brand-hover1.webp";
// // import block2 from ".img\brand-hover2.webp";
// // import block3 from ".img\brand-hover3.webp";
// // import block4 from ".img\brand-hover4.webp";
// // import block5 from ".img\brand-hover5.webp";
 
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
          <div className="icons">
            <IoIosSearch/>
            <CiHeart/>
            <CgShoppingBag/>
          </div>
        </div>

        
      </div>
      <div className="Header_average">
          <div className="container2">
            <div className="_nav1">
              <img src={image}  alt="" />
              <div className="text">
              <h1>About Us</h1>
              <p className="home">Home <span className="drob">//</span><span className="about">About Us</span></p>
              
               </div>
              
            </div>
           
            <div>

            </div>
            
          </div>
          <div className="container3">
            
    <div className="youtube">
      <img src={imag} alt="" />
      <a href="https://youtu.be/2Zt8va_6HRk">
      <img src={logot} alt="" />
      </a>
      <div className="logo">
      

      </div>

      </div>
      
    </div>
    <div className="obj">
    <div className="texxt">
<h1>Our Vision</h1>
<ul> 
  <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmoddll</li>
  <li> tempor incididunt ut labore et dolore magna Ut enim ad minim veni quis</li> 
  <li> nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo conseql Duis aute</li> 
  <li> irure dolor in reprehendergg in voluptate velit esse cillum dolore eu fugiat nulla</li>
  <li> pariatur. Excepteur sint occaecat.</li>
   </ul>
   <div className="teex">
   <h1>Our Mission</h1>
   <ul>
   <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmoddll</li>
  <li> tempor incididunt ut labore et dolore magna Ut enim ad minim veni quis</li> 
  <li> nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo conseql Duis aute</li> 
  <li> irure dolor in reprehendergg in voluptate velit esse cillum dolore eu fugiat nulla</li>
  <li> pariatur. Excepteur sint occaecat.</li>
   </ul>
   </div>
    </div>
    </div>

    <div className="blocker">
<div className="block1">
  {/* <img src={block1} alt=".img\brand-hover1.webp" /> */}

</div>
<div className="block2">
  {/* <img src={block2} alt="" /> */}
</div>
<div className="block3"> 
  {/* <img src={block3} alt="" /> */}
</div>
<div className="block4">
  {/* <img src={block4} alt="" /> */}
</div>
<div className="block5">
  {/* <img src={block5} alt="" /> */}
</div>

</div>

  </div>
        </div>
      

 
  );
}
