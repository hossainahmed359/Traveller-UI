import axios from 'axios';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddNewService = () => {
    // Handle Add Service Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/addService', {
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
            <Container className="col-lg-6 col-md-8 col-lg-12 border border-success rounded shadow px-4">
                <form onSubmit={handleSubmit(onSubmit)}>

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
                    <Button variant="success" size="lg" className="w-100 rounded" type="submit">Submit</Button>
                </form>
                <br />
            </Container>
            <br />

        </div>
    );
};

export default AddNewService;