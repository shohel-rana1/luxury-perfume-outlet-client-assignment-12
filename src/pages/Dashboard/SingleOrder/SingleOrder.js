// import { Table } from 'react-bootstrap';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import usePerfumes from '../../../hooks/usePerfumes';
const SingleOrer = ({ item }) => {
    const [perfumes] = usePerfumes();
    const { address, city, phone, email, name, booking_id, status } = item;
    console.log(booking_id)
    const myOrder = perfumes.find(perfume => perfume._id === booking_id);
    //delete an user
    const handleDelete = id => {
        id = booking_id;
        const proceed = window.confirm('Are you Sure to Delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${booking_id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        // const remainnigs = orders.filter(order => order._id !== id);
                        // setOrders(remainnigs);
                    }
                })
        }
    }

    return (

        <div className=" container" >
            <div className="row">
                <div className="col-md-6 text-left">
                    <img src={myOrder?.img} className=" h-50 w-25" alt="..." />
                    <h5 className="">Name: {myOrder?.name}</h5>
                </div>
                <div className="col-md-6">
                    <Table responsive className="mb-3">
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >{name} </td>
                                <td >{address} </td>
                                <td >{phone} </td>
                                <td >{status} </td>
                                <td ><button onClick={ ()=>handleDelete(booking_id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default SingleOrer;