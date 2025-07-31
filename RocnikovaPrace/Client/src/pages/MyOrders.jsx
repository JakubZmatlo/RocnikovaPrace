import React, { useEffect, useState } from 'react';

function MyOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:4000/myorders', {
                headers: { 'auth-token': token }
            });
            const data = await res.json();
            if (data.success && Array.isArray(data.orders)) {
                setOrders(data.orders);
            } else {
                setOrders([]); // fallback pro jistotu
            }
        };
        fetchOrders();
    }, []);

    return (
        <div>
            <h2>My Orders</h2>
            {orders.length === 0 ? (
                <p>You have no orders.</p>
            ) : (
                orders.map((order, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
                        <p><strong>Date:</strong> {order.createdAt ? new Date(order.createdAt).toLocaleString() : "Unknown"}</p>
                        <p><strong>Payment:</strong> {order.paymentMethod || "Unknown"}</p>
                        <p><strong>Items:</strong></p>
                        <ul>
                            {order.items && order.items.map((item, i) => (
                                <li key={i}>
                                    {item.name} — ${item.price} × {item.quantity}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
}

export default MyOrders;