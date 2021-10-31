import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Testimony = () => {
    return (
        <div>
            <Container>
                <Button variant="outline-primary" size="lg" className="rounded-pill shadow my-5" disabled>
                    See Client's Review
                </Button>
                <div className="d-lg-flex align-items-center">
                    <img
                        style={{
                            borderRadius: "50%"
                        }}
                        className="w-25 m-5 shadow" src="https://i.ibb.co/TR2p1hG/Client.jpg" alt="" />
                    <div className="m-5 text-start">
                        <h1 className="">Alex Smith</h1>
                        <div >
                            <h3 className="text-danger">England</h3>
                            <p style={{ textAlign: 'justify' }}
                                className="fs-5 text-muted">
                                Traveller is one of the most exciting and competent people I have ever met in the IT field. The more difficult the IT challenge, the more Traveller enjoys the work. He always delivers the highest quality results and client satisfaction is his major goal. He is absolutely one of the best...if not THE best!
                            </p>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Testimony;