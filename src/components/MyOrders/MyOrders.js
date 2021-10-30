import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Orders from './Orders/Orders';

const MyOrders = () => {

    // const [clicked, setClicked] = useState(false)

    //************* Find User Orders *************
    // Temporary Email
    const userEmail = 'hossainahmed359@gmail.com'


    // Setting User Orders
    const [existingUserInfo, setExistingUserInfo] = useState([]);


    // Fetch Data
    useEffect(() => {
        // ************* Change the email when needed *************
        fetch(`http://localhost:5000/finduser/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setExistingUserInfo(data)
            });

    }, []);





    return (
        <div className="my-5">
            <Button variant="outline-info" size="lg" className="rounded-pill shadow my-5" disabled>
                My Orders
            </Button>
            {/* <button onClick={() => { setClicked(true) }}>Force Load User Info</button> */}
            <Container>
                {existingUserInfo.map(orders => <Orders
                    key={orders._id}
                    orders={orders}
                ></Orders>)}
            </Container>
        </div>
    );
};

export default MyOrders;