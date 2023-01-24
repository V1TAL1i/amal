import React from "react";
import imag from "./img/aboutbg.webp";
import logot from "./img/videoplay.webp";
import block1 from "../src/img/brand1.webp";
import block2 from "../src/img/brand2.webp";
import block3 from "../src/img/brand3.webp";
import block4 from "../src/img/brand4.webp";
import block5 from "../src/img/brand5.webp";
import teamkom1 from "./img/teamkom1.webp";
import teamkom2 from "./img/teamkom2.webp";
import teamkom3 from "./img/teamkom3.webp";



export default function About() {
  return (
    <div>
      <div className="container3">
        <div className="you">
          <img src={imag} alt="asdf" className="big" />
          <div className="logog">
            <a href="https://youtu.be/2Zt8va_6HRk">
              <img src={logot} />
            </a>
          </div>

        </div>
      </div>
      <div className="obj">
        <div className="container">
          <div className="texxt">
            <div>
              <h1 className="vis">Our Vision</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmoddll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo conseql Duis aute irure dolor in reprehendergg in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>

            </div>

            <div className="mis">
              <h1 className="miss">Our Mission</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmoddll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo conseql Duis aute irure dolor in reprehendergg in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>

            </div>
          </div>
        </div>

      </div>
      <div className="bloki">

        <div className="container">

          <div className="block">
            <img src={block1} alt="" />
          </div>
          <div className="block">
            <img src={block2} alt="" />
          </div>
          <div className="block">
            <img src={block3} alt="" />
          </div>
          <div className="block">
            <img src={block4} alt="" />
          </div>
          <div className="block">
            <img src={block5} alt="" />
          </div>



        </div>

      </div>

      <div className="team">
        <h2 className="member">Team Member</h2>
        <p className="lorem">Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod
          <span>tempor incididunt ut labore et dolore magna</span>
        </p>
      </div>


      <div className="people">

        <div className="kommand effect">

          <h1 className="kianna">KIANNA PHAM</h1>
          <p className="mem">Team Member</p>
        </div>

        <div className="kommand2 effect">

          <h1 className="kianna">KIANNA PHAM</h1>
          <p className="mem">Team Member</p>
        </div>

        <div className="kommand3 effect">

          <h1 className="kianna">KIANNA PHAM</h1>
          <p className="mem">Team Member</p>
        </div>

      </div>

    </div>
  );
}
