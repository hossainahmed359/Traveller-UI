import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import SingleOrderRequest from './SingleOrderRequest/SingleOrderRequest';



const ManageAllOrders = () => {

    // Get All Orders
    const [allOrderRequests, setOrderRequests] = useState([]);


    // Fetch All Orders
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrderRequests(data))
    }, []);


    // console.log(allOrderRequests);


    // Handle User Approval
    const handleApproved = _id => {
        console.log(_id, 'will be approved')

        const oldRequests = [...allOrderRequests];
        oldRequests.find(order => order._id === _id &&
            axios.post(`http://localhost:5000/updateuser/${order._id}`, {
                order
            })
                .then(res => {
                    console.log(res)
                    if (res.data.modifiedCount > 0) {
                        alert('Approved Successfully !');
                        fetch('http://localhost:5000/allOrders')
                            .then(res => res.json())
                            .then(data => setOrderRequests(data))

                    }
                })
        )
    };


    // Handle  Delete Order
    const handleDelete = _id => {
        const proceed = window.confirm('Are You Sure You want to Delete ?')
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const oldOrders = [...allOrderRequests];
                        const updatedOrders = [];
                        oldOrders.map(order => order._id !== _id && updatedOrders.push(order));
                        setOrderRequests(updatedOrders);
                        console.log('updated delted')
                    }
                })
        }
    }


    return (
        <div>
            <Button variant="outline-success" size="lg" className="rounded-pill shadow my-5" disabled>
                Manage Orders
            </Button>
            <div>
                <div>
                    <p>Note: Click On The Icons to Delete Or Approve User </p>
                </div>
                <br />
                <div className="shadow border-success border-bottom">
                    <Row className="border border-success mx-2 py-3" sm={12} md={12} lg={12}>
                        <Col><b>Name</b></Col>
                        <Col><b>Email</b></Col>
                        <Col><b>Date</b></Col>
                        <Col><b>Status</b></Col>
                        <Col><b>Approve</b></Col>
                        <Col><b>Delete</b></Col>
                    </Row>
                    {allOrderRequests.map(singleRequest =>
                        <SingleOrderRequest
                            key={singleRequest._id}
                            singleRequest={singleRequest}
                            handleApproved={handleApproved}
                            handleDelete={handleDelete}
                        ></SingleOrderRequest>
                    )}
                </div>
                <br />



            </div>

        </div >
    );
};

export default ManageAllOrders;