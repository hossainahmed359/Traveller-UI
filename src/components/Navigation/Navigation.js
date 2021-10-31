import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigation.css'


const Navigation = () => {
    const { user, logOut } = useAuth();



    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" bg="info" variant="" className=" shadow">
                <Container fluid className="py-2 navigation">
                    <Nav.Link as={Link} to="/home">Traveller</Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">

                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {user?.email && <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>}
                            {user?.email && <Nav.Link as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link>}
                            {user?.email && <Nav.Link as={Link} to="/addNewService">Add New Service</Nav.Link>}
                            {user?.displayName
                                &&
                                <Button variant="outline-light" className="mx-3" disabled>
                                    {user.displayName}
                                </Button>}
                            {!user?.email ?
                                <Nav.Link as={Link} to="/login">Login </Nav.Link>
                                :
                                <Button onClick={logOut} variant="light">
                                    Log Out
                                </Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;