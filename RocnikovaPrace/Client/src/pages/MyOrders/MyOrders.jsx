import React, { useEffect, useState } from 'react';
import './MyOrders.css'

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch('http://localhost:4000/order/my-orders', {
        headers: {
          'auth-token': token,
        },
      });
      const data = await res.json();
      setOrders(data.orders || []);
    };

    fetchOrders();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    try {
      const res = await fetch(`http://localhost:4000/order/delete/${orderId}`, {
        method: 'DELETE',
        headers: {
          'auth-token': token,
        },
      });

      const data = await res.json();

      if (data.success) {
        setOrders((prev) => prev.filter((order) => order._id !== orderId));
      } else {
        alert('Delete error');
      }
    } catch (err) {
      console.error(err);
      alert('Delete error');
    }
  };

  return (
    <div className="my-orders-page">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <p>You don't have any orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div key={order._id} className="order-card">
              <h3>Order ID: {order._id}</h3>
              <p>Payment: {order.paymentMethod}</p>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>{item.name} x {item.quantity}</li>
                ))}
              </ul>
              <button
                onClick={() => handleDeleteOrder(order._id)}
                className="delete-order-button"
              >
                Delete Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;