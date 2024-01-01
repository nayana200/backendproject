import React, { useState } from 'react';
import './Content.css';

const Content = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleHover = () => {
        setDropdownVisible(true);
    };

    const handleLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                <li
                    className="nav-item dropdown"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                >
                    <a href="/">Dropdown</a>
                    {isDropdownVisible && (
                        <div className="dropdown-content">
                            <a href="/">Item 1</a>
                            <a href="/">Item 2</a>
                            <a href="/">Item 3</a>
                        </div>
                    )}
                </li>
                <li className="nav-item">
                    <a href="/">About</a>
                </li>
                {/* Add more navigation items as needed */}
            </ul>
        </nav>
    );
};

export default Content;
