import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const axios = require('axios').default;


const PlaceOrder = () => {
    const { id } = useParams();


    // *********** Destination Details Section ***********

    // Font Awesome
    const mapMark = <FontAwesomeIcon icon={faMapMarkerAlt} />


    // Store Single Service 
    const [service, setService] = useState({});
    //
    const { _id, price, picture, place, about } = service;


    // Load Single Service
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    // *********** Booking Section ***********


    // Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        // Destructuring Data
        const { email, name, number, date, location } = data;


        // Setting Destination
        const destination = { id: _id, status: 'pending' };


        // Setting User information
        const user = { email, name, number, location, date, destination };


        // Place Order
        axios.post('http://localhost:5000/placeOrder', {
            user
        })
            .then((res) => {
                if (res.data.insertedId) {
                    alert('Booking Successful')
                }
            })
            .catch((error) => {
                console.log(error);
            });

        reset();

    };


    return (
        <div className="my-4">
            <Button variant="outline-info" size="lg" className="rounded-pill shadow my-5" disabled>
                Destination Details
            </Button>
            <Container className="my-4">
                <Row>
                    <Col sm={12} md={8} lg={8}>
                        <Card border="info" className="rounded shadow">
                            <Card.Img variant="top" src={picture} />
                            <Card.Body className="text-start">
                                <h3 className="my-3"><small className="text-info">{mapMark}</small> {place}</h3>
                                <h2 className="text-info my-3">
                                    {price}
                                </h2>
                                <Card.Text className="my-3" style={{ textAlign: "justify" }}>
                                    {about}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4} lg={4} className="border border-info rounded shadow">
                        <h2 className="text-info my-3">Get Booking</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="px-2">
                            <input {...register("email", { required: true })} className="my-3 py-2 w-100" placeholder="Email" />
                            <input {...register("name", { required: true, maxLength: 30 })} className="my-3 py-2 w-100" placeholder="Name" />
                            <input {...register("number", { required: true })} className="my-3 py-2 w-100" placeholder="Phone Number" />
                            <input {...register("date",)} className="my-3 py-2 w-100" placeholder="Set Date" />
                            <input {...register("location", { required: true, maxLength: 20 })} className="my-3 py-2 w-100" placeholder="Your address" />
                            <h3 className="text-muted border-bottom pb-2">{place}</h3>
                            <Button type="submit" variant="outline-success" className="w-100 py-2  rounded">Submit</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
            <h2>{id}</h2>
        </div >
    );
};

export default PlaceOrder;