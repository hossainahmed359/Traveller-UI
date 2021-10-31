import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="light" className=" shadow">
                <Container fluid className="py-2 ">
                    <Nav.Link as={Link} to="/home">Traveller</Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link>
                            <Nav.Link as={Link} to="/addNewService">Add New Service</Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                {!user?.email ?
                                    <Link to="/login">Log In</Link>
                                    :
                                    <Button onClick={logOut} variant="light">
                                        Log Out
                                    </Button>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;