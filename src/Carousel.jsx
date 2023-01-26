import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from "./img/testimonial.webp";
import image1 from "./img/testimonial-shap.webp";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="carousel">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"

                    />
                    <div className='center'>
                        <Carousel.Caption>
                            <img src={image1} alt="" className='povar' />
                            <ul>
                                <li>
                                    <a href="#" tabindex="0"><i class="ion-ios-star"></i></a>
                                </li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <h3 className='name'>Kianna Pham</h3>
                            <h4 className='profess'>Customer</h4>
                            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicingl elit, sed do eiusmod
                                tempor
                                incididunt ut laboredolor magna aliqua. Ut enim ad minim veniam, quis
                                nostru
                                exercitation ullamco laboris</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

render(<ControlledCarousel />);