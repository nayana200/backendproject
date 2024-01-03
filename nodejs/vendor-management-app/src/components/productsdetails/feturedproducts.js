import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cartslider.css'
import { Link } from 'react-router-dom'
const CardSlider = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(10);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/auth/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % products.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 2 + products.length) % products.length
        );
    };

    return (
        <div className="card-slider">
            <div className="card-container">


                {products.slice(currentIndex, currentIndex + 4).map((product, index) => (


                    <div key={index} className="card">
                        <Link to={`products/${product._id}`}>
                            <img src={product.imageUrl} alt={product.name} />
                            <h6 className="mt-4">{product.name}</h6>
                            <div className='col-6' style={{ marginLeft: "62px" }}>
                                <i class="fa-regular fa fa-star" style={{ color: "yellow" }}></i>
                                <i class="fa-regular fa fa-star" style={{ color: "yellow" }}></i>
                                <i class="fa-regular fa fa-star" style={{ color: "yellow" }}></i>
                                <i class="fa-regular fa fa-star" style={{ color: "yellow" }}></i>


                            </div>

                            <p>{`Rs.${product.price}`}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={handlePrev}>&lt;</button>
            <button className="next" onClick={handleNext}>&gt;</button>
        </div>
    );
};

export default CardSlider;