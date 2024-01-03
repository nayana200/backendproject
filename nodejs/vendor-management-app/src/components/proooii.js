import React, { useState } from 'react';

const ProductCarousel = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showProduct = (index) => {
        setCurrentIndex(index);
    };

    const nextProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    return (
        <div>
            <div style={{ display: 'flex', overflow: 'hidden', position: 'relative' }}>
                {products.map((product, index) => (
                    <div
                        key={index}
                        style={{
                            width: '300px',
                            marginRight: '20px',
                            position: 'relative',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        onMouseOver={() => showProduct(index)}
                    >
                        <img src={product.image} alt={`Product ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
                        {currentIndex === index && (
                            <div
                                style={{
                                    display: 'flex',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                }}
                            >
                                <span style={{ marginRight: '5px', cursor: 'pointer' }}>❤️</span>
                                <span style={{ cursor: 'pointer' }}>🛒</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button onClick={prevProduct}>Previous</button>
            <button onClick={nextProduct}>Next</button>
        </div>
    );
};

export default ProductCarousel;
