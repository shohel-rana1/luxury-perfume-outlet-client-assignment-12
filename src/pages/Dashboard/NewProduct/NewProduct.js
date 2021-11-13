import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './NewProduct.css'
const NewProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/perfumes', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset();
                }
            })
    };
    return (
        <div className="">
            <h2 className="py-5">Add a Product</h2>
            <div className="add-place py-3 mb-3 mx-auto backgrnd-img">

                <form onSubmit={handleSubmit(onSubmit)} className="backgrnd-img">
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input {...register("brand", { required: true, maxLength: 20 })} placeholder="Brand" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="Image Url" />
                    <input type="submit" className="btnBg" />
                </form>
            </div>
        </div>
    );
};

export default NewProduct;