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
                    <img className="d-block w-100" src={"https://elementor.dostguru.com/cartsly/wp-content/uploads/2022/01/s1-1920x660.jpg"} alt={`Slide ${idx}`} height={"500px"} style={{ marginLeft: "45px" }} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageSlider;
