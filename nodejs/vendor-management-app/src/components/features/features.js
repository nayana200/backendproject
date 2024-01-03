// import React from "react"
// import { Container, Row, Col, Button } from "react-bootstrap"
// import { FaBars } from "react-icons/fa";

// function Features() {
//     return (<Container>
//         <Row>
//             <Col className="col-3"><div className="d-flex flex-column mt-5">
//                 <h5 className="d-flex gap-3 p-1" style={{ backgroundColor: 'yellow' }}><span><FaBars color="black" size="30px" /></span><span>ALL CATEGORY</span></h5>
//                 <div className="mt-3">
//                     <h4 style={{ borderBottom: '1px solid black' }}>Product Details</h4>
//                     <Button role="link" variant="secondary" className="m-1">Accessories</Button>
//                     <Button role="link" variant="secondary" className="m-1">Avionics</Button>
//                     <Button role="link" variant="secondary" className="m-1">Bioelectronics</Button>
//                     <Button role="link" variant="secondary" className="m-1">Cryotronics</Button>
//                     <Button role="link" variant="secondary" className="m-1">Electronics</Button>
//                     <Button role="link" variant="secondary" className="m-1">Handwatch</Button>
//                     <Button role="link" variant="secondary" className="m-1">Induction</Button>
//                     <Button role="link" variant="secondary" className="m-1">Integrated</Button>
//                     <Button role="link" variant="secondary" className="m-1">Iphone</Button>
//                     <Button role="link" variant="secondary" className="m-1">Laptops</Button>
//                     <Button role="link" variant="secondary" className="m-1">Mega</Button>
//                     <Button role="link" variant="secondary">Mobiles</Button>
//                 </div>
//             </div></Col>
//             <Col className="col-8">
//                 <h3 className="mt-2">FEATURES</h3>
//                 <Row>
//                     <Col className="col-6 mt-3" style={{ height: '300px' }}>
//                         <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/fea11.jpg' alt="dshjdhs" className="" width='100%' height='300px' />

//                     </Col>
//                     <Col className="col-6 mt-3">
//                         <h4>AWESOME SUPPORT</h4>
//                         <p className="mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
//                         <h4 className="mt-5">MARKET ANALYSIS</h4>
//                         <p className="mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
//                     </Col>
//                     <Col style={{ textAlign: 'right', height: '300px' }} className="mt-5" >
//                         <h4 className="">MULTIPLE WIDGETS</h4>
//                         <p className="mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
//                         <h4 className="mt-5">SOCIAL SHARING</h4>
//                         <p className="mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
//                     </Col>
//                     <Col className="col-6 mt-5">
//                         <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/fea12.jpg' alt="sandjh" className="img-fluid" />
//                     </Col>
//                     <Col className="col-6 mt-5" style={{ height: '300px' }}>
//                         <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/fea13.jpg' alt="ahd" className="img-fluid" />

//                     </Col>
//                     <Col className="col-6 mt-5">
//                         <h4>HTML5 + CSS3</h4>
//                         <p className="mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
//                         <h4 className="mt-5">RESPONSIVE DESIGN</h4>
//                         <p className="mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
//                     </Col>
//                 </Row>
//             </Col>
//         </Row>
//     </Container>
//     )
// }


// export default Features





import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

function Features() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="col-3">
                        <div className="d-flex flex-column mt-5">
                            <Dropdown>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    <h5 className="d-flex" style={{ backgroundColor: 'rgb(246, 215, 47)' }}><span><FaBars color="black" size="20px" /></span><span>ALL CATEGORY</span></h5>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Accessories</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Avionics</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Bioelectronics</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Accessories</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Avionics</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Bioelectronics</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Accessories</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Avionics</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Bioelectronics</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Accessories</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Avionics</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Bioelectronics</Dropdown.Item>
                                    {/* Add more Dropdown.Items as needed */}
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </Col>
                    <Col className="col-8">
                        <h3 className="mt-2">FEATURES</h3>
                        <Row>
                            <Col className="col-6 mt-3" style={{ height: '300px' }}>
                                <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/fea11.jpg' alt="hjh" className="img-fluid" />
                            </Col>
                            <Col className="col-6 mt-3">
                                <h4>AWESOME SUPPORT</h4>
                                <p className="mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
                                <h4 className="mt-5">MARKET ANALYSIS</h4>
                                <p className="mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
                            </Col>
                            <Col style={{ textAlign: 'right', height: '300px' }} className="mt-5">
                                <h4 className="">MULTIPLE WIDGETS</h4>
                                <p className="mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
                                <h4 className="mt-5">SOCIAL SHARING</h4>
                                <p className="mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
                            </Col>
                            <Col className="col-6 mt-5">
                                <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/fea12.jpg' className="img-fluid" alt="rtre" />
                            </Col>
                            <Col className="col-6 mt-5" style={{ height: '300px' }}>
                                <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/fea13.jpg' alt="mage" className="img-fluid" />
                            </Col>
                            <Col className="col-6 mt-5">
                                <h4>HTML5 + CSS3</h4>
                                <p className="mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
                                <h4 className="mt-5">RESPONSIVE DESIGN</h4>
                                <p className="mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Features;
