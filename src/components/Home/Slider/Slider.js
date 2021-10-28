import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/R9J3jSb/Banner3.png'
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/TT2gsfk/Banner2.jpg'
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/nRPhjKB/Banner1.jpg'
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
