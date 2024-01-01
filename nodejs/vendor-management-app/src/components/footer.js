import React from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer
    () {
    return (
        <div className="container-fluid bg-light mt-5">
            <footer className="  ">
                <div className="container-fulid ">
                    <Navbar expand="lg" className="rounded bg-primary    ">
                        <div className="container-fulid">
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-4 my-lg-0" style={{ maxHeight: '150px' }} navbarScroll>
                                    <Nav.Link href="#action1"><Button variant="light"><i className="fa-brands fa-md fa fa-facebook-f"></i></Button></Nav.Link>
                                    <Nav.Link href="#action1"><Button variant="light"><i class="fa-brands fa fa-twitter"></i></Button></Nav.Link>
                                    <Nav.Link href="#action1"><Button variant="light"><i class="fa-sharp fa fa-solid fa-rss"></i></Button></Nav.Link>
                                    <Nav.Link href="#action1"><Button variant="light"><i class="fa-brands fa fa-square-youtube"></i></Button></Nav.Link>
                                    <Nav.Link href="#action1"><Button variant="light"><i class="fa-solid fa-camera"></i></Button></Nav.Link>
                                </Nav>
                                <Navbar.Text className='text-white fs-6 me-5' style={{ marginRight: "160px", marginLeft: "120px" }}>
                                    SIGN UP FOR NEWSLETTER
                                </Navbar.Text>
                                <Form className="d-flex">
                                    <Form.Control type="search" placeholder="Search" style={{ width: "400px", marginLeft: "80px" }} className=" border-0 " aria-label="Search" />
                                    <Button variant="warning" >Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </div>

                <div className="container-fulid mt-5">
                    <div className="row ">
                        <div className="d-flex justify-content-around">
                            <div className="d-flex ">
                                <div className="col">
                                    <h5>CONTACT US</h5>
                                    <ul className="list-unstyled text-small" style={{ lineHeight: "2.0" }}>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}><i className="fa fa-xl  fa-location-dot"></i> 1093 Marigold Lane, Coral Way, Miami,<br /> Florida, 33169
                                        </a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}><i className=" fa fa-xl fa-phone"></i> 610-403-403</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}><i className='fa fa-xl fa-envelope'></i>company@example.com</a></li>

                                    </ul>
                                    <aside id="text-1" class="widget widget_text"><div class="title-outer">
                                        <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/themes/Shopeur/images/webi/f1.png" alt="" style={{ marginRight: "10px" }}></img>
                                        <img src="	https://pixeltemplate.com/wordpress/shopeur/wp-content/themes/Shopeur/images/webi/f2.png" alt=""></img>
                                    </div>
                                    </aside>
                                </div>
                            </div>
                            <div className="d-flex ">
                                <div className="col">
                                    <h5>MY ACCOUNT</h5>
                                    <ul className="list-unstyled text-small" style={{ lineHeight: "2.0" }}>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Cool stuff</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Random feature</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Team feature</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Stuff for developers</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Another one</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Last time</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex ">
                                <div className="col">
                                    <h5>CATEGORIES</h5>
                                    <ul className="list-unstyled text-small" style={{ lineHeight: "2.0" }}>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Resource</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }} >Resource name</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Another resource</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Final resource</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex ">
                                <div className="col">
                                    <h5>INFORMATION</h5>
                                    <ul className="list-unstyled text-small" style={{ lineHeight: "2.0" }}>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none", lineHeight: "1.3" }}>Business</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Education</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Education</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Government</a></li>
                                        <li><a className="text-muted" href="eee" style={{ textDecoration: "none" }}>Gaming</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <hr className='mb-4' />



                <div className="container">
                    <p >
                        <pre className="text-center">

                            Radio | Hydraulic | Lamp | Pro Electron | Atomtronics | Avionics |
                            Radio | Cryotronics | induction | Circuits | Cryotronics
                        </pre>
                    </p>
                    <p >
                        <pre className="text-center">

                            | Spintronics | Accessories | Electronics | Chairs | Bar Table |
                            Bioelectronics | Circuits
                        </pre>
                    </p>
                </div>

                <hr className='mb-4' />

                <div className="container text-center">
                    <p >Designed by Demo Theme All rights reserved.</p>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
                        <MDBIcon fab icon='facebook-f' size='lg' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
                        <MDBIcon fab icon='twitter' size='lg' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
                        <MDBIcon fab icon='google' size='lg' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
                        <MDBIcon fab icon='instagram' size='lg' />
                    </MDBBtn>
                </div>
            </footer>
        </div>
    )
}

export default Footer