import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart, useDispatchCart } from "../Components/ContextReducer";

export default function Cart() {
    const data = useCart();
    const dispatch = useDispatchCart();

    if (data.length === 0) {
        return (
            <div className="empty-cart">The Cart is Empty!</div>
        );
    }

    const handleCheckOut = async () => {
        try {
            const userEmail = localStorage.getItem("userEmail");

            const response = await fetch(`${window.location.origin}/api/orderData`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    order_data: data,
                    email: userEmail,
                    order_date: new Date().toDateString(),
                }),
            });

            console.log("JSON RESPONSE:::::", response.status);
            if (response.ok) {
                dispatch({ type: "DROP" });
            } else {
                console.error("Checkout failed with status: ", response.status);
            }
        } catch (error) {
            console.error("Error during checkout: ", error);
        }
    };

    const totalPrice = data.reduce((total, food) => total + food.price, 0);

    return (
        <div className="cart-container container table-responsive table-responsive-sm table-responsive-md">
            <table className="table cart-table">
                <thead className="text-success fs-4">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Option</th>
                        <th scope="col">Amount</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((food, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{food.name}</td>
                            <td>{food.qty}</td>
                            <td>{food.size}</td>
                            <td>{food.price}</td>
                            <td>
                                <button type="button" className="btn p-0">
                                    <FaTrash
                                        onClick={() => {
                                            dispatch({ type: "REMOVE", index: index });
                                        }}
                                    />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="cart-total">
                <h1>Total Price: {totalPrice}/-</h1>
            </div>
            <div>
                <button className="cart-checkout-btn" onClick={handleCheckOut}>
                    Check Out
                </button>
            </div>
        </div>
    );
}
