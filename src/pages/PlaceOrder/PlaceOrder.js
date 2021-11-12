import React from 'react';
import './PlaceOrder.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { perfumeid } = useParams();
    const [perfume, setPerfume] = useState({});
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.booking_id = perfumeid;
        axios.post('http://localhost:5000/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset();
                }
            })
        console.log(data)

    }

    useEffect(() => {
        fetch(`http://localhost:5000/perfumes/${perfumeid}`)
            .then(res => res.json())
            .then(data => setPerfume(data))

    }, [perfumeid])

    return (
        <div className="container mx-auto py-5">
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <h2>this is order</h2>
                    <div className="col-md-4">
                        <img src={perfume?.img} className="card-img h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-left">
                            <h3 className="card-title">Name: {perfume?.name}</h3>
                            <h5 className="card-title">Brand: {perfume?.brand}</h5>
                            <h5 className="card-title">Tour Cost: ${perfume?.price}</h5>
                            <div className="placeOrder d-flex flex-column">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("name", { required: true, maxLength: 20 })} value={user?.displayName} />
                                    <input {...register("email", { required: true, maxLength: 20 })} value={user?.email} />
                                    <input type="text" {...register("address")} placeholder="Address" />
                                    <input type="number" {...register("phone")} placeholder="Phone" />
                                    <input type="text" {...register("city")} placeholder="City" />
                                    <input type="text" {...register("status")} value="Pending" style={{ border: 'none' }} />
                                    <input type="submit" value="Confirm" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;