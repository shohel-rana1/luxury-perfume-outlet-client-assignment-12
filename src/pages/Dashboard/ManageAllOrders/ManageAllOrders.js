import React, { useEffect, useState } from 'react';
import AllOrderManage from '../AllOrderManage/AllOrderManage';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="my-5">
            <h2 className="py-5">Manage All Available Orders </h2>
            <div className="py-3">

                {
                    orders.map(order => <AllOrderManage
                        key={order._id}
                        order={order}
                    ></AllOrderManage>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;