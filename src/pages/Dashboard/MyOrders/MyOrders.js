import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import SingleOrer from '../SingleOrder/SingleOrder';
import './MyOrders.css'

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const MyItems = orders.filter(order => order.email === user.email)

    return (
        <div className="my-5">
            <h1 className="pb-5">My Orders</h1>
            <div className="backgrnd-img py-3">
                {
                    MyItems.map(item => <SingleOrer
                        key={item._id}
                        item={item}
                    ></SingleOrer>)
                }

            </div>
        </div>
    );
};

export default MyOrders;