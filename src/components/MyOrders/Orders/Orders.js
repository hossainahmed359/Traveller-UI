import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Orders = (props) => {
    const { _id, date, destination } = props.orders;

    // Store Destination Details
    const [singleDestinationDeatils, setSingleDestinatioDetails] = useState({});

    // Load Service
    useState(() => {
        fetch(`http://localhost:5000/services/${destination.id}`)
            .then(res => res.json())
            .then(data => {
                setSingleDestinatioDetails(data);
            })
    }, []);

    const handleDelete = () => {

        window.confirm("Are you sure you want to cancel ?");
        if (window.confirm) {
            console.log('confirmed')
            fetch(`http://localhost:5000/deleteOrder/${_id}`, {
                method: 'Delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Deleted')
                    }
                })
        }
        else {
            //some code
        }
    }

    return (
        <div>
            <Col>
                <Card className="">
                    <Card.Img
                        className="text-center text-center border rounded"
                        variant="top"
                        src={singleDestinationDeatils.picture}
                    />
                    <Card.Body className="">
                        <h3>
                            {singleDestinationDeatils.place}
                        </h3>
                        <div className="text-start">
                            <Card.Text>
                                {singleDestinationDeatils.price}

                            </Card.Text>
                            <p className="">
                                Date:  {date}</p>
                            <p className="">
                                Status: {destination.status}
                            </p>
                        </div>
                        <Button onClick={handleDelete} className="text-end" variant="outline-danger">Cancel Trip</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Orders;