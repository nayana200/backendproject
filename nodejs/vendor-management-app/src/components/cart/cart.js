import React from "react";
import { useCart } from "../context/createContext";


import { Link } from "react-router-dom";



const Cart = ({ item }) => {
    const { cart } = useCart();
    const { incrementQuantity, decrementQuantity } = useCart();

    if (cart.length === 0) {
        alert("Your cart is empty!!!!!. add product");
    }

    return (
        <div>


            <div className="container mt-3 mb-5 d-flex justify-content-around align-items-center">

                <div>CART</div>
                <button className="btn btn-primary">
                    <Link className=" text-light" to='/cehckout'>Proceed To Check Out</Link>
                </button>





            </div>

            <section class="mb-5">
                <div class="container ">
                    <div class="row">
                        {cart.map((item) => (
                            <div className="col-lg-5 col-md-4 col-sm-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h2>Shopping Cart</h2>
                                        <hr />
                                        <p key={item.productId}></p>
                                        <p>Product: {item.name}</p>
                                        <hr />
                                        <p>price: {item.price}</p>
                                        <hr />
                                        <p>totalPrice: {item.totalPrice}</p>
                                        <hr />

                                        <div className="d-flex justify-content-center">
                                            <button
                                                onClick={() => incrementQuantity(item.productId)}
                                                className="btn btn-primary"
                                            >
                                                +
                                            </button>

                                            <p className="border p-1 m-2">
                                                {" "}
                                                quantity: {item.quantity}
                                            </p>

                                            <button
                                                onClick={() => decrementQuantity(item.productId)}
                                                className="btn btn-primary"
                                            >
                                                -
                                            </button>
                                        </div>

                                        <hr />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Cart;