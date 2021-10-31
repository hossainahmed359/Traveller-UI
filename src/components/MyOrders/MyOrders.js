import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Orders from './Orders/Orders';

const MyOrders = () => {
    // Getting User Info
    const { user } = useAuth();
    const userEmail = user.email;
    // const userName = user.displayName;

    // fontAwesome
    const leftArrowIcon = <FontAwesomeIcon icon={faArrowLeft} />


    //************* Find User Orders by Email *************


    // Setting User Orders
    const [existingUserInfo, setExistingUserInfo] = useState([]);


    // Fetch Data via user email
    useEffect(() => {
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
                {existingUserInfo.length === 0 ?
                    <h2 className="text-muted">No Orders Available !</h2>
                    :
                    <Row xs={1} md={2} lg={3} className="g-5">
                        {existingUserInfo.map(orders =>
                            <Orders
                                key={orders._id}
                                orders={orders}
                                handleItemDeleteFromUI={handleItemDeleteFromUI}
                            ></Orders>)}
                    </Row>
                }
                <br />
                <Link to="/home"
                    className=""
                    style={{ textDecoration: 'none' }}
                >{leftArrowIcon} Back To Home</Link>
            </Container>
        </div>
    );
};

export default MyOrders;