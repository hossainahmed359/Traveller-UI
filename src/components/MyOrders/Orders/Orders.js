import React, { useState } from 'react';

const Orders = (props) => {
    const { _id, date, destination } = (props.orders);

    // Store Destination Details
    const [singleDestinationDeatils, setSingleDestinatioDetails] = useState([])


    return (
        <div>
            <h1>{_id}</h1>
            <h2>{date}</h2>
            <h3>destination id {destination.id}</h3>
            <h3>destination status {destination.status}</h3>
        </div>
    );
};

export default Orders;