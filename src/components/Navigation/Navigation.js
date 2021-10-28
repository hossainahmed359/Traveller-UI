import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="light" className=" shadow">
                <Container fluid className="py-2">
                    <Nav.Link as={Link} to="/home">Traveller</Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/placeOrder">Place Order</Nav.Link>
                            <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;