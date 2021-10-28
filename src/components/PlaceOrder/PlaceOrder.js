import React from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>This is placeOrder</h1>
            <h2>{id}</h2>
        </div>
    );
};

export default PlaceOrder;