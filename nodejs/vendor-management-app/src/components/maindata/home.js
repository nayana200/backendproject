import React from "react";
import { Dropdown, Col } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";

import ImageSlider from "./imageslider";


const SideNav = ({ children }) => (
    <div className="d-flex mt-5">
        <Col xs={3}>
            <ul className="list-unstyled d-flex flex-column row-gap-3 border border-2" style={{
                width: "300px",
                lineHeight: "0.2px",
                marginLeft: "32px"
            }}>

                <SideNavItem icon={<FaBars size="20px" />} label="ALL CATEGORY" style={{ backgroundColor: '#f6d72f', lineHeight: "1.3" }} />
                <MegaDropdownMenuItem title="Accessories" categories={['Avionics', 'Electronics', 'Iphone', 'Cryotronics']} />
                <SideNavItem label="Hydraulic" />
                <MegaDropdownMenuItem title="Lamp" categories={['Pro elections', "Atomics"]} />
                <SideNavItem label="Cryotronics" />
                <SideNavItem label="Induction" />
                <MegaDropdownMenuItem title="Avionics" categories={['BarTable', 'Bio Electronics']} />
                <SideNavItem label="Circuits" />
                <SideNavItem label="Electronics" />
                <SideNavItem label="Handwash" />
            </ul>
        </Col>
        <Col xs={8}>
            <ImageSlider images={['https://elementor.dostguru.com/cartsly/wp-content/uploads/2022/01/s1-1920x660.jpg']} style={{ marginRight: "8px" }} />
        </Col>
    </div>
);

const SideNavItem = ({ icon, label, children, style }) => (
    <li className={`d-flex gap-3 p-3 ${style}`} style={style}>
        {icon && <span>{icon}</span>}
        <span className="fw-bold">{label}</span>
        {children}
    </li>
);

const MegaDropdownMenuItem = ({ title, categories }) => (
    <Dropdown drop="end" className="p-0">
        <Dropdown.Toggle variant="transparent" id="mega-dropdown-basic">
            <Link className="text-black text-decoration-none fw-bold">{title}</Link>
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
            <div className="mega-menu">
                <div className="mega-menu-column">
                    <h5>{title}</h5>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index}>
                                <Link to='/data' className="text-decoration-none text-black">{category}</Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </Dropdown.Menu>
    </Dropdown>

);

export default SideNav;
