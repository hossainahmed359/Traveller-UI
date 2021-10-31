import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Button, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {
        user,
        setUser,
        error,
        setError,
        handleGoogleSignIn,
        handleEmailRegistraion,
        handleEmailSignIn } = useAuth();

    // Redirect
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './'

    // ToggleLogIn 
    const [exists, setExists] = useState(false)
    const toggleLogIn = e => {
        setExists(e.target.checked)
    }

    // Handle Google SignIn
    const continueWithGoogle = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(redirect_uri)
                // const user = result.user;
                setError('')
                // ...
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message)
            });
    }



    // Handle Email Registration    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        exists ?
            (handleEmailSignIn(data.email, data.password)
                .then((result) => {
                    history.push(redirect_uri)
                    // const user = result.user;
                })
                .catch((error) => {

                    setError(error.message)
                })
            )
            :
            (handleEmailRegistraion(data.email, data.password)
                .then((result) => {
                    history.push(redirect_uri)
                    // const user = user.result
                })
                .catch((error) => {
                    setError(error.message)
                })
            )

        setError('');
        reset();
    };


    //
    return (
        <div className=" mx-auto">
            <Row sm={1} md={2} lg={4} className="mx-auto">
                <Container className="my-5 ">
                    <Button variant="outline-primary" disabled className="my-3 py-2 px-5 rounded-pill">{exists ? "Login" : "Register"}</Button>
                    <br />
                    <Button onClick={continueWithGoogle} variant="success" size="lg w-100" className=" my-3">
                        Continue with Google
                    </Button>
                    <h3>OR</h3>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="w-100 my-3 py-2" {...register("email", { required: true })}
                                placeholder="Your Email" />
                            <input className="w-100 my-3 py-2" type="password" {...register("password", { required: true })}
                                placeholder="Password" />
                            <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                                <Form.Check onClick={toggleLogIn} type="checkbox" label="Already have an account ?" />
                            </Form.Group>
                            <p>{error}</p>
                            <Button type="submit" variant="outline-primary" size="lg" className="w-100 my-3">
                                {exists ? "Login" : "Register"}
                            </Button>


                        </form>
                    </div>
                </Container>
            </Row>
        </div>
    );
};

export default Login;