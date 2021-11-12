import axios from 'axios';
import './PlaceOrder.css'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { perfumeid } = useParams();
    const [perfume, setPerfume] = useState({});
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.order_id = perfumeid;
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset();
                }
            })
    };

    useEffect(() => {
        fetch(`http://localhost:5000/perfumes/${perfumeid}`)
            .then(res => res.json())
            .then(data => setPerfume(data));
    }, [perfumeid])
    return (
        <div className="container mx-auto py-5">
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={perfume?.img} className="card-img h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-left">
                            <h3 className="card-title">Name: {perfume?.name}</h3>
                            <h5 className="card-title">Brand: {perfume?.brand}</h5>
                            <h5 className="card-title">Price: ${perfume?.price}</h5>
                            <div className="placeOrder d-flex flex-column">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("name", { required: true, maxLength: 20 })} value={user.displayName} />
                                    <input {...register("email", { required: true, maxLength: 20 })} value={user.email} />
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