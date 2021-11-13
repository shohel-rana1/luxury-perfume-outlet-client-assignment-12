import React, { useEffect, useState } from 'react';
import AllOrderManage from '../AllOrderManage/AllOrderManage';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [countDelete, setCountDelete] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleUpdate = id => {
        const status = ['Approved'];
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
        <div className="backgrnd-img">
            <div className="py-3">
                <h2 className="pb-2">Orders available</h2>
                {
                    orders.map(order => <AllOrderManage
                        key={order._id}
                        handleUpdate={handleUpdate}
                        order={order}
                    ></AllOrderManage>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;