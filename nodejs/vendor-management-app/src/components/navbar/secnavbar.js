import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { IoMdMail } from "react-icons/io";

const SubNav2 = () => {
    return (
        <>

            <div className='container-fluid ' style={{ backgroundColor: "rgba(245,245,245,1)" }}>
                <Navbar collapseOnSelect expand="lg" className="">

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link href="#pricing">Extra 30% Off On Selected Itmes</Nav.Link>
                            <Nav.Link href="#pricing"><IoMdMail className="me-2 fs-4" />company@example.com</Nav.Link>

                        </Nav>
                        <Nav expand="lg" className='me-5'>
                            <Nav.Link href="#deets">
                                Wishlist
                            </Nav.Link>
                            <div className='vr'>

                            </div>

                            <NavDropdown title="USD" id="nav-dropdown" className="me-5">
                                <NavDropdown.Item >GBS</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        </>
    );
}



export default SubNav2