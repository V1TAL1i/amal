import React from "react";
import imag from "./img/aboutbg.webp";
import logot from "./img/videoplay.webp";




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
            {/* <ul>
              
              <li>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmoddll
              </li>
              <li>
                {" "}
                tempor incididunt ut labore et dolore magna Ut enim ad minim
                veni quis
              </li>
              <li>
                {" "}
                nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo
                conseql Duis aute
              </li>
              <li>
                {" "}
                irure dolor in reprehendergg in voluptate velit esse cillum
                dolore eu fugiat nulla
              </li>
              <li> pariatur. Excepteur sint occaecat.</li>
            </ul> */}
          </div>

          <div className="mis">
            <h1 className="miss">Our Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmoddll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo conseql Duis aute irure dolor in reprehendergg in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
            {/* <ul>
              <li>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmoddll
              </li>
              <li>
                {" "}
                tempor incididunt ut labore et dolore magna Ut enim ad minim
                veni quis
              </li>
              <li>
                {" "}
                nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo
                conseql Duis aute
              </li>
              <li>
                {" "}
                irure dolor in reprehendergg in voluptate velit esse cillum
                dolore eu fugiat nulla
              </li>
              <li> pariatur. Excepteur sint occaecat.</li>
            </ul> */}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}