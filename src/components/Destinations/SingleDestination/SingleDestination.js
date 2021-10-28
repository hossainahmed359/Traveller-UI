import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleDestination = (props) => {
    const { _id, picture, place, about } = props.singleService;
    return (
        <div>
            <Col>
                <Card className="border-0 shadow">
                    <Card.Img style={{
                        height: "250px"
                    }} variant="top" src={picture} />
                    <Card.Body className="text-start">
                        <Card.Title>{place}</Card.Title>
                        <Card.Text style={{ textAlign: "justify" }}>
                            {about.slice(0, 120)} ...
                        </Card.Text>
                        <Link to={`/placeOrder/${_id}`}>
                            <Button variant="outline-success" size="" className="shadow">Book Now
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleDestination;