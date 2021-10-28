import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import SingleDestination from './SingleDestination/SingleDestination';

const Destinations = () => {
    // Setting Data
    const [services, setServices] = useState([]);
    // Loading Data
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-5">
            <Container>
                <Button variant="outline-info" size="lg" className="rounded-pill shadow my-5" disabled>
                    Destinations
                </Button>
                <div>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {services.map(singleService => <SingleDestination
                            key={singleService._id}
                            singleService={singleService}
                        ></SingleDestination>)}

                    </Row>

                </div>
            </Container>
        </div>
    );
};

export default Destinations;