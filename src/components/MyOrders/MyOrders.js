import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Orders from './Orders/Orders';

const MyOrders = () => {

    // const [clicked, setClicked] = useState(false)

    //************* Find User Orders *************
    // Temporary Email
    const userEmail = 'hossainahmed359@gmail.com'


    // Setting User Orders
    const [existingUserInfo, setExistingUserInfo] = useState([]);


    // Fetch Data via user email
    useEffect(() => {
        // ************* Change the email when needed *************
        fetch(`https://scary-mansion-91853.herokuapp.com/finduser/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setExistingUserInfo(data)
            });

    }, []);

    // Handle Delete On User cancel request
    const handleItemDeleteFromUI = _id => {
        const remainingOrders = []
        existingUserInfo.filter(orders => {
            if (orders._id !== _id) {
                remainingOrders.push(orders)
            }
            setExistingUserInfo(remainingOrders);
        })
    }


    return (
        <div className="my-5">
            <Button variant="outline-info" size="lg" className="rounded-pill shadow my-5" disabled>
                My Orders
            </Button>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-5">
                    {existingUserInfo.map(orders =>
                        <Orders
                            key={orders._id}
                            orders={orders}
                            handleItemDeleteFromUI={handleItemDeleteFromUI}
                        ></Orders>)}
                </Row>
            </Container>
        </div>
    );
};

export default MyOrders;