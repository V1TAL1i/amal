import React from "react";
import "./Header.scss"
import About from "./About.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swipper from "./Swipper.jsx";
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
import shipping1 from "./img/shipping1.webp";
import shipping2 from "./img/shipping2.webp";
import shipping3 from "./img/shipping3.webp";
import strelka from "./img/4723461.png";
import paypel from "./img/paypal.webp";
import { RiMapPinLine } from "react-icons/ri";
import { GiSmartphone } from "react-icons/gi";
import { ImArrowRight2 } from "react-icons/im";
import { render } from "@testing-library/react";
import Menu from "./Menu.jsx"
import Shop from "./Shop.jsx"
import Example from "./Offcanvas";
import Blog from "./Blog.jsx";

function Header() {
  const [show, setShow] = React.useState(false)
  return (
    <div className="Header">
      <div className="Header_top">
        <div className="container">
          <div>World Wide Completely Free Returns and Free Shipping</div>
          <div className="nav">
            <a href="telef">+00 123 456 789</a>
            <a href="telef">demo@example.com</a>
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
            <ul className="qwer">



              <li className="home qwerty" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)} >Home

                <div class="dropdown" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                  {show && <ul class="dropmenu show">
                    <li>
                      <i className="menue"><i class="dropdown-item">Home 01</i></i></li>
                    <li>
                      <i className="menue"><i class="dropdown-item">Home 02</i></i></li>
                  </ul>}
                </div>

              </li>
              <li className="aboutt qwerty">About</li>


              <a class="orange" href="Shop.jsx" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)} >Shop

                <div class="dropdown" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                  {show && <ul class="dropmenu showw">
                    <li>
                      <i className="light"><i class="dropdown-item">Shop Layout</i></i></li>
                    <li>

                      <i className="light"><i class="dropdown-item">Shop Fullwidth</i></i></li>
                    <li>

                      <i className="light"><i class="dropdown-item">Shop Left Sidebar</i></i></li>
                    <li>

                      <i className="light"><i class="dropdown-item">Shop Right Sidebar</i></i></li>
                    <li>

                      <i className="light"><i class="dropdown-item">Shop List Fullwidth</i></i></li>
                    <li>

                      <i className="light"><i class="dropdown-item">Shop List Left Sidebar</i></i></li>
                    <li>

                      <i className="light"><i class="dropdown-item">Shop List Right Sidebar</i></i></li>

                    <div className="vtoroe">
                      <li>

                        <i className="light"><i class="dropdown-item">Product Style</i></i></li>

                      <li>

                        <i className="light"><i class="dropdown-item">Popular Products</i></i></li>

                      <li>

                        <i className="light"><i class="dropdown-item">Product Related</i></i></li>

                      <li>

                        <i className="light"><i class="dropdown-item">Single Product Default</i></i></li>
                      <li>

                        <i className="light"><i class="dropdown-item">Single Product Group</i></i></li>
                      <li>

                        <i className="light"><i class="dropdown-item">Single Product Variable</i></i></li>
                      <li>

                        <i className="light"><i class="dropdown-item">Single Product Sale</i></i></li>
                      <li>

                        <i className="light"><i class="dropdown-item">Single Product Sticky</i></i></li>
                      <li>

                        <i className="light"><i class="dropdown-item">Single Product Affiliate</i></i></li>

                    </div>


                  </ul>}
                </div>





              </a>

<button onClick="Blog.jsx">Blog</button>
{/* <a class="orange" href="Blog.jsx">Blog</a> */}
              {/* <a href="Blog.jsx" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)} >Blog

<div class="dropdown" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
  {show && <ul class="dropmenu show">
    <li>
      <i className="menue"><i class="dropdown-item">Blog Holder</i></i></li>
    <li>
      <i className="menue"><i class="dropdown-item">Blog Detalis Holder</i></i></li>
  </ul>}
</div>

</a> */}





             <a class="orange4" href="Contact.jsx">Contact</a>
            </ul>
          </div>


          <div className="icons">
            <IoIosSearch />
            <CiHeart />


            <Example />





          </div>
        </div>
      </div>
      <div className="Header_average">
        <div className="container2">

          <div className="_nav1">

            <div className="text">
              <h1 className="among">About Us</h1>
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
      <Header />


      <About />
      <div className="fony">
        <Swipper />

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


      <div className="niz">

        <div className="verh">

          <div className="shipping">
            <div className="ship">
              <img src={shipping1} alt="" />
            </div>
            <div className="texx">
              <h3 className="free">Free Shipping</h3>
              <p className="capped">Capped at $39 per order</p>
            </div>
          </div>
          <div className="payments">
            <div className="ship2">
              <img src={shipping2} alt="" />
            </div>
            <div className="textt">
              <h3 className="cars">Card Payments</h3>
              <p className="month">12 Months Installments</p>
            </div>
          </div>

          <div className="returns">
            <div className="ship3">
              <img src={shipping3} alt="" />
            </div>
            <div className="texz">
              <h3 className="easy">Easy Returns</h3>
              <p className="shop">Shop Wwith Confidence</p>
            </div>
          </div>

        </div>
        <div className="infa">
          <div className="contacts">
            <div className="conta">
              <h2>CONTACT US</h2></div>
            <div className="you">
              <p>If you have any question.please contact us at <a href="#" className="email">demo@example.com</a> </p>
            </div>
            <div className="your">
              <i>
                <RiMapPinLine />
              </i>
              <p>Your address goes here. 123 <br />
                Address.</p>
            </div>
            <div className="your">
              <i>
                <GiSmartphone />
              </i>
              <div>
                <a href="star">+00 123 456 789</a> <br />
                <a href="star">+00 123 456 789</a>

              </div>
            </div>

          </div>


          <div className="celoe">

            <div className="infar">
              <div className="formation">
                <div className="infor">
                  <h2>INFORMATION </h2>
                </div>
                <div className="mation">
                  <a href="star" >About us</a >
                  <a href="star" >Delivery information</a>
                  <a href="star" >Privacy Policy</a >
                  <a href="star" >Sales</a >
                  <a href="star" >Terms & Conditions</a >
                  <a href="star" >Shipping Policy</a >
                  <a href="star" >EMI Payment</a>
                </div>
              </div>
              <div className="account">
                <div className="acc">
                  <h2>ACCOUNT</h2>
                </div>
                <div className="count">
                  <a href="star" >My account</a>
                  <a href="star" >My orders</a>
                  <a href="star" >Returns</a>
                  <a href="star" >Shipping</a>
                  <a href="star" >Wishlist</a>
                  <a href="star" >How Does It Work</a>
                  <a href="star" >Merchant Sign Up</a>
                </div>
              </div>




            </div>



          </div>
          <div className="newsletter">
            <div className="news">

              <h2>NEWSLETTER</h2>
            </div>
            <div className="have">
              <p>If you have any question.please contact us at <a href="" className="send">Send Us a Email</a></p>
            </div>







            <div className="adress">

              <div className="strelka">
                <i className="strellka">

                  <ImArrowRight2 />

                </i>
              </div>


              <h4 className="adre">Email Address</h4>




              <div className="paypel">
                <img src={paypel} alt="" className="payp" />
              </div>




            </div>

          </div>
        </div>
        <div className="konec">
          <p>© 2022 Bucker. Made With  By CodeCarnival</p>
        </div>
      </div>

    </div>

  );
}

export default App;
