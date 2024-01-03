import React from "react";
import { FaBars } from "react-icons/fa";
import { Button } from "react-bootstrap";

function AccessorySideNav({ categories, colors, sizes, productTags }) {
    return (
        <div className="d-flex flex-column mt-5">
            <h5 className="d-flex gap-3 p-1" style={{ backgroundColor: 'yellow' }}>
                <span>
                    <FaBars color="black" size="30px" />
                </span>
                <span>ALL CATEGORY</span>
            </h5>
            <div className="mt-5">
                <input type="range" style={{ width: '100%' }} />
                <br />
                <Button variant="primary" className="p-0">
                    FILTER
                </Button>
                <h6 className="mt-2">PRICE : </h6>
                <div className="mt-3">
                    <h4 style={{ borderBottom: '1px solid black' }}>Filter By Color</h4>
                    {colors.map((color, index) => (
                        <p key={index} className="d-flex justify-content-between">
                            <span>{color.name}</span>
                            <span>{color.count}</span>
                        </p>
                    ))}
                </div>
                <div className="mt-3">
                    <h4 style={{ borderBottom: '1px solid black' }}>Filter By Size</h4>
                    {sizes.map((size, index) => (
                        <p key={index} className="d-flex justify-content-between">
                            <span>{size.name}</span>
                            <span>{size.count}</span>
                        </p>
                    ))}
                </div>
                <div className="mt-3">
                    <h4 style={{ borderBottom: '1px solid black' }}>Product Tags</h4>
                    {productTags.map((tag, index) => (
                        <Button key={index} role="link" variant="secondary" className="m-1">
                            {tag}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AccessorySideNav;
