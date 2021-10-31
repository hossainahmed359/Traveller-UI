import React from 'react';
import Destinations from '../Destinations/Destinations';
import Reviews from '../Reviews/Reviews';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Destinations></Destinations>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;