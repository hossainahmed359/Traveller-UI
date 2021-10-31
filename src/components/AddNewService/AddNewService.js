import axios from 'axios';
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddNewService = () => {
    // Handle Add Service Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://scary-mansion-91853.herokuapp.com/addService', {
            data
        })
            .then(res => {
                res.data.insertedId && alert('Adding Service Successful');
                reset();
            })
    };
    return (
        <div>
            <Button variant="outline-success" size="lg" className="rounded-pill shadow my-5" disabled>
                Add A New Service
            </Button>
            <Container >
                <Row sm={3} md={2} lg={2} className="  px-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto my-5  border border-success rounded shadow">
                        <input {...register("picture", { required: true })} placeholder="Image url" className="w-100 my-3 py-2"
                        />
                        <br />
                        <input {...register("place", { required: true })} placeholder="Place Name" className="w-100 my-3 py-2"
                        />
                        <br />
                        <input {...register("price", { required: true })}
                            placeholder="price" className="w-100 my-3 py-2"
                        />
                        <br />

                        <textarea {...register("about", { required: true })}
                            rows="10" className="w-100 my-3" placeholder="Description"
                        ></textarea>

                        <br />
                        <Button variant="success" size="lg" className="w-100 rounded mb-4" type="submit">Submit</Button>
                    </form>
                    <br />
                </Row>
            </Container>
            <br />

        </div>
    );
};

export default AddNewService;