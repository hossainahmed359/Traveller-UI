import React from 'react';
import { Container, Button, Carousel, Col } from 'react-bootstrap';


const Reviews = () => {
    return (
        <div>
            <Container className="mb-5 ">
                <Button variant="outline-success" size="lg" className="rounded-pill shadow my-5" disabled>
                    Best Travel Locations
                </Button>
                <div className="d-lg-flex align-items-center shadow px-2" >
                    <Col className="my-5">
                        <Carousel variant="dark" fade>
                            <Carousel.Item>
                                <img

                                    className="d-block w-100"
                                    src="https://i.ibb.co/kMx3BM7/New-Project.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img

                                    className="d-block w-100"
                                    src="https://i.ibb.co/931MbGG/New-Project-2.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/0sZqLVZ/New-Project-1.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                        <div className="">
                            <Button variant="outline-warning" size="lg" className="rounded-pill shadow mb-4" disabled>
                                Discover The World
                            </Button>

                            <p style={{ textAlign: 'justify' }} className="text-secondary px-3">
                                Many first-time visitors to Japan are often surprised to learn that, as one of the world's most advanced industrialized nations, this relatively small Asian country also boasts a rich and fascinating history that dates back thousands of years..
                            </p>
                            <p style={{ textAlign: 'justify' }} className="text-secondary px-3 pb-3">
                                Indeed, long before many of Europe's most spectacular cathedrals were built, Japan's Shinto and Buddhist temples were already well-established and drawing pilgrims and patrons for their often elaborate designs and décor.
                            </p>
                        </div>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Reviews;