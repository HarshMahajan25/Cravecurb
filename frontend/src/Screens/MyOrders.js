import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState({});

    const fetchMyOrder = async () => {
        try {
            const userEmail = localStorage.getItem('userEmail');
            const response = await fetch(`${window.location.origin}/api/myOrderData`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: userEmail })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const orderData = await response.json();
            setOrderData(orderData);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error state or display an error message
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />

            <div className='container'>
                <div className='row'>
                    {orderData && orderData.order_data && Object.keys(orderData.order_data).length > 0 ? (
                        orderData.order_data.map((order, index) => (
                            <div key={index}>
                                {order.map((item, innerIndex) => (
                                    <div key={innerIndex}>
                                        <div className='m-auto mt-5'>
                                            {item[1] && <div>{item[1]}</div>}
                                            <hr />
                                        </div>
                                        <div className='col-12 col-md-6 col-lg-3'>
                                            {item[0].map((arrayData, itemIndex) => (
                                                <div key={itemIndex} className='card mt-3' style={{ width: '16rem', maxHeight: '360px' }}>
                                                    <img src={arrayData.img} className='card-img-top' alt='...' style={{ height: '120px', objectFit: 'fill' }} />
                                                    <div className='card-body'>
                                                        <h5 className='card-title'>{arrayData.name}</h5>
                                                        <div className='container w-100 p-0' style={{ height: '38px' }}>
                                                            <span className='m-1'>{arrayData.qty}</span>
                                                            <span className='m-1'>{arrayData.size}</span>
                                                            <span className='m-1'>{item[1]}</span>
                                                            <div className=' d-inline ms-2 h-100 w-20 fs-5'>
                                                                ₹{arrayData.price}/-
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <div style={{margin:"40px"}}>No orders found.</div>
                    )}
                </div>
            </div>

        </div>
    );
}
