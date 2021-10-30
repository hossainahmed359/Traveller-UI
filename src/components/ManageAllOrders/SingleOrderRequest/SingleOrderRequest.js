import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

const SingleOrderRequest = (props) => {
    // Getting All the datas
    // console.log(props)
    const { _id, name, email, date, destination } = props.singleRequest;
    const handleApproved = props.handleApproved;
    const handleDelete = props.handleDelete;

    // Icon
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />
    const approveIcon = <FontAwesomeIcon icon={faCheck} />




    return (
        <div>
            <Row className=" mx-2 py-3 border border-bottom" sm={12} md={12} lg={12}>
                <Col className="">
                    <small>{name.slice(0, 14)}...</small>
                </Col>
                <Col className="">
                    <small>{email.slice(0, 14)}...</small>
                </Col>
                <Col className="">
                    <small>{date.slice(0, 14)}</small>
                </Col>

                <Col className={(destination?.status === 'pending') ? "text-warning" : "text-success"} >
                    <small>{destination?.status}</small>
                </Col>
                <Col className="">
                    <Button
                        onClick={() => handleApproved(_id)} variant="outline-success" size="sm" className="">{approveIcon}
                    </Button>
                </Col>
                <Col className="">
                    <Button
                        onClick={() => handleDelete(_id)} variant="outline-danger" size="sm" className="">{deleteIcon}
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default SingleOrderRequest;

/// <small className="text-danger">{deleteIcon}</small>