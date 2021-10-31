import React from 'react';
import Destinations from '../Destinations/Destinations';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import Testimony from '../Testimony/Testimony';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Destinations></Destinations>
            <Reviews></Reviews>
            <Testimony></Testimony>
            <Footer></Footer>
        </div>
    );
};

export default Home;