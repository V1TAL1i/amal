import React from 'react'
import './swiper.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image1 from "./img/testimonial-shap.webp";
import {MdStarRate} from 'react-icons/md'



export default function Swipper() {
  return (
    <div class="myswiper">
        <Swiper
        spaceBetween={30}
        
        >
        <div class="swiper-wrapper">
            <SwiperSlide> 
            
            <SwiperSlide className='texx'>
            <div className="slideWrapper">

            <img src={image1} alt="" className='povar'/>
            <div className='text'>
                <div className='stars'><MdStarRate/><MdStarRate/><MdStarRate/><MdStarRate/><MdStarRate/></div>
                            <h3 className='name'>Kianna Pham</h3>
                            <h4 className='profess'>Customer</h4>
                            <p className='lorems'>Lorem ipsum dolor sit amet, consectetur adipisicingl elit, sed do eiusmod
                                tempor
                                incididunt ut laboredolor magna aliqua. Ut enim ad minim veniam, quis
                                nostru
                                exercitation ullamco laboris</p>
                                </div>
                                </div>
                                </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
            <SwiperSlide className='texx'>
            <div className="slideWrapper">

            <img src={image1} alt="" className='povar' />
            <div className='text'>
                <div className='stars'><MdStarRate/><MdStarRate/><MdStarRate/><MdStarRate/><MdStarRate/></div>
                            <h3 className='name'>Kianna Pham</h3>
                            <h4 className='profess'>Customer</h4>
                            <p className='lorems'>Lorem ipsum dolor sit amet, consectetur adipisicingl elit, sed do eiusmod
                                tempor
                                incididunt ut laboredolor magna aliqua. Ut enim ad minim veniam, quis
                                nostru
                                exercitation ullamco laboris</p>
                                </div>
                                </div>
                                </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
            <SwiperSlide className='texx'>
            <div className="slideWrapper">

            <img src={image1} alt="" className='povar' />
            <div className='text'>
                <div className='stars'><MdStarRate/><MdStarRate/><MdStarRate/><MdStarRate/><MdStarRate/></div>
                            <h3 className='name'>Kianna Pham</h3>
                            <h4 className='profess'>Customer</h4>
                            <p className='lorems'>Lorem ipsum dolor sit amet, consectetur adipisicingl elit, sed do eiusmod
                                tempor
                                incididunt ut laboredolor magna aliqua. Ut enim ad minim veniam, quis
                                nostru
                                exercitation ullamco laboris</p>
                                </div>
                                </div>
                                </SwiperSlide>
            </SwiperSlide>
           
        </div>
        </Swiper>
    <div id="swiper-pagination" class="swiper-pagination"></div>
  </div>
  )
}


