import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Orders = (props) => {
    const { _id, date, destination, } = props.orders;
    const handleItemDeleteFromUI = props.handleItemDeleteFromUI;

    // Store Destination Details
    const [singleDestinationDeatils, setSingleDestinatioDetails] = useState({});

    // Load Service
    useState(() => {
        fetch(`https://scary-mansion-91853.herokuapp.com/services/${destination.id}`)
            .then(res => res.json())
            .then(data => {
                // Push The props in data
                data.date = date;
                data.destination = destination;
                setSingleDestinatioDetails(data)


            })
    }, []);

    const handleDelete = () => {

        const proceed = window.confirm("Are you sure you want to cancel ?");
        if (proceed) {
            console.log('confirmed')
            fetch(`https://scary-mansion-91853.herokuapp.com/deleteOrder/${_id}`, {
                method: 'Delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data)
                        console.log('Deleted')

                    }
                })
            handleItemDeleteFromUI(_id)
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
                                Date:  {singleDestinationDeatils.date}</p>
                            <p className={
                                singleDestinationDeatils.destination?.status === 'Approved'
                                    ?
                                    "text-success"
                                    :
                                    "text-warning"
                            }>
                                Status: {singleDestinationDeatils.destination?.status}
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