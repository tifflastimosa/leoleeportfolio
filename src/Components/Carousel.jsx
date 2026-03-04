//Carousel.jsx

import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        adaptiveHeight: true,

        appendDots: dots => (
            <div>
                <ul style={{
                    margin: "0px", padding: "0px"
                }}> {dots} </ul>
            </div>
        ),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="full-width-carousel">
                <Slider {...settings}>
                    <div className="full-width-slide">
                        <img src="images/port1.1.png"
                             alt="Slide 1" 
                             className="slide-image" />
                    </div>
                    <div className="full-width-slide">
                        <img src="images/port2.png"
                             alt="Slide 2" 
                             className="slide-image" />
                    </div>
                    <div className="full-width-slide">
                        <img src="images/port3.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                     <div className="full-width-slide">
                        <img src="images/port4.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                    <div className="full-width-slide">
                        <img src="images/port5.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                    <div className="full-width-slide">
                        <img src="images/port6.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                                        <div className="full-width-slide">
                        <img src="images/port7.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                                        <div className="full-width-slide">
                        <img src="images/port8.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                                        <div className="full-width-slide">
                        <img src="images/port9.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                                        <div className="full-width-slide">
                        <img src="images/port10.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                                        <div className="full-width-slide">
                        <img src="images/port11.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
          <div className="full-width-slide">
                        <img src="images/port13.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                                        <div className="full-width-slide">
                        <img src="images/port14.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                                        <div className="full-width-slide">
                        <img src="images/port15.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                                        <div className="full-width-slide">
                        <img src="images/port16.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                                        <div className="full-width-slide">
                        <img src="images/port17.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Carousel;