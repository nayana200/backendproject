// ImageSlider.js

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {images.map((image, idx) => (
                <Carousel.Item key={idx}>
                    <img className="d-block w-100" src={"https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/revslider/wntr_homeslider/04c41f72f75d3c451cd237b511a966be-copy-100x50.jpg"} alt={`Slide ${idx}`} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageSlider;
