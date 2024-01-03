
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Thirdbar from '../navbar/navbar'
import { useCart } from "../context/createContext";





const SingleProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState('');
    const { addToCart } = useCart();
    useEffect(() => {

        fetch(`http://localhost:4000/auth/products/${productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) =>
                console.error("Error fetching product details:", error)
            );
    }, [productId]);

    const handleAddToCart = () => {
        // Call the addToCart function from the CartContext
        console.log(product)
        addToCart(product);
    };



    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Thirdbar />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card-body text-center">
                                <img src={product.imageUrl} alt="shshs" width={"50%"} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card" style={{ height: "330px" }}>
                            <div className="card-body">
                                <div className="card-title">
                                    <h2>{product.name}</h2><hr />
                                </div>

                                <p>{product.description}</p><hr />
                                <p>Price: ${product.price}</p><hr />
                                <p>Quantity Available: {product.quantity}</p>

                                <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;