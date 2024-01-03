import React from "react"
import { Link } from "react-router-dom"
import { Col, Dropdown } from "react-bootstrap"

function MainNav(props) {
    return (<nav className=" p-1 d-flex align-items-center justify-content-center" style={{ backgroundColor: "rgba(43,110,248,1", height: "60px", position: "relative" }}>

        <Col className="flex-grow-1">
            <ul className="list-unstyled d-flex fw-bolder gap-5 align-items-center" style={{ marginLeft: '30px' }}>
                <li><Link className="text-decoration-none text-white" to='/'>HOME</Link></li>
                <li><Link className="text-decoration-none text-white" to='/accossies'>SHOP</Link></li>
                <li>
                    <Link to='/lasttestnews'>
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="text-white fw-bold">
                                BLOG
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"><Link >Action </Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><Link>Atction2</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-3"><Link>Action3</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Link>
                </li>
                <li><Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="text-white fw-bold">
                            PAGES
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ width: '200px' }}>
                            <Dropdown.Item href="#/action-1"><Link className="text-decoration-none text-black" to='/servies'>SERVICE</Link></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><Link className="text-decoration-none text-black" to='/Faq'>FAQs PAGE</Link></Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><Link className="text-decoration-none text-black">GALLERY</Link></Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><Link className="text-decoration-none text-black">ELEMENTS</Link></Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><Link className="text-decoration-none text-black">PAGE 404</Link></Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><Link className="text-decoration-none text-black">ABOUT US</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Link></li>
                <li><Link className="text-decoration-none text-white" to='/contact'> CONTACT US</Link></li>
                <li><Link className="text-decoration-none text-white" to='/features'>FEATURES</Link></li>
            </ul>
        </Col>
        <Col className="fw-bolder d-block ms-auto" style={{ position: "absolute", right: '120px', marginTop: "2px" }}>
            <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/themes/Shopeur/images/webi/svg/label.svg" alt="hdhd" width="40px" height={"30px"}></img>
            <Link className="text-decoration-none d-block ms-auto text-white d-md-none d-lg-inline">SPECIAL OFFER !</Link>
        </Col>

    </nav>)
}


export default MainNav