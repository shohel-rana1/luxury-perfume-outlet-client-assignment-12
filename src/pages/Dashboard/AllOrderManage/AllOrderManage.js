import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import usePerfumes from '../../../hooks/usePerfumes';

const AllOrderManage = ({ order }) => {
    const [perfumes] = usePerfumes();
    const { name, address, phone,booking_id, status } = order;
    const [orders, setOrders] = useState({});

    const myPerfume = perfumes.find(perfume => perfume._id === booking_id);


    //delete an user
    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure to Delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainnigs = orders.filter(order => order._id !== id);
                        setOrders(remainnigs);
                    }
                })
        }
    }

    //update status
    const handleUpdate = id => {
        const status = ['Shipped'];
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)

        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <Table responsive className="mb-3 py-3 backgrnd-img">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product </th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Delete</th>
                    <th>Update</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{booking_id}</td>
                    <td >{myPerfume?.name}</td>
                    <td >{name} </td>
                    <td >{address} </td>
                    <td >{phone} </td>
                    <td >{status} </td>
                    <td ><button onClick={() => handleDelete(order._id)}>Delete</button></td>
                    <td ><button onClick={() => handleUpdate(order._id)}>Update</button></td>
                </tr>
            </tbody>
        </Table>
    );
};

export default AllOrderManage;