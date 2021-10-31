import React from 'react';
import { Spinner, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Destinations from '../Destinations/Destinations';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import Testimony from '../Testimony/Testimony';
import Slider from './Slider/Slider';

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return (<Button variant="primary" className="my-5" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>)
    }

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