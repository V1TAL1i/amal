import React from "react";
import Header from "./Header.jsx";
import "./Header.scss"
import About from "./About.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from "./Carousel.jsx";

function App() {
  AOS.init()
  return (
    <div className='App'>
      <Header/> 
      <About/>
    </div>
  );
}

export default App;
