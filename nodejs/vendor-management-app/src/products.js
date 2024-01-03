import React from 'react'
import { MDBRipple } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import './products.css'
const Products = () => {
    return (
        <div className='container-fulid' style={{ width: "97%", marginLeft: "20px" }}>
            <div className="row">
                <h1>Top Categories</h1>
                <div className="col-3">

                    <MDBRipple className='bg-image' rippleTag='div' rippleColor='light'>
                        <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/5-1-360x400_t.jpg' alt="shuyw" className='w-100' />
                        <a href='#!'>
                            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                                <div className='d-flex justify-content-center align-items-center h-100'>
                                    <MDBBtn style={{ backgroundColor: "white", color: "black", width: "90%", marginTop: "280px" }}>Uncategorized</MDBBtn>
                                </div>
                            </div>
                            <div className='hover-overlay'>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                            </div>
                        </a>
                    </MDBRipple>
                </div>

                <div className="col-3">
                    <MDBRipple className='bg-image' rippleTag='div' rippleColor='light'>
                        <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/4-1-360x400_t.jpg' alt="dhudhe" className='w-100' />
                        <a href='#!'>
                            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                                <div className='d-flex justify-content-center align-items-center h-100'>
                                    <MDBBtn style={{ backgroundColor: "white", color: "black", width: "90%", marginTop: "280px" }}>Accessories</MDBBtn>
                                </div>
                            </div>
                            <div className='hover-overlay'>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                            </div>
                        </a>
                    </MDBRipple>
                </div>

                <div className="col-3">
                    <MDBRipple className='bg-image' rippleTag='div' rippleColor='light'>
                        <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/1-2-360x400_t.jpg' alt="jhad" className='w-100' />
                        <a href='#!'>
                            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                                <div className='d-flex justify-content-center align-items-center h-100'>
                                    <MDBBtn style={{ backgroundColor: "white", color: "black", width: "90%", marginTop: "280px" }}>Atomtronics</MDBBtn>
                                </div>
                            </div>
                            <div className='hover-overlay'>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                            </div>
                        </a>
                    </MDBRipple>
                </div>

                <div className="col-3">
                    <MDBRipple className='bg-image' rippleTag='div' rippleColor='light'>
                        <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/5-1-360x400_t.jpg' alt="sue" className='w-100' />
                        <a href='#!'>
                            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                                <div className='d-flex justify-content-center align-items-center h-100 mx-auto'>
                                    <MDBBtn style={{ backgroundColor: "white", color: "black", width: "90%", marginTop: "280px" }}>Atomtronics</MDBBtn>
                                </div>
                            </div>
                            <div className='hover-overlay'>
                                <div className='mask' style={{ backgroundColor: 'rgba(291, 201, 281, 0.2)' }}></div>
                            </div>
                        </a>
                    </MDBRipple>
                </div>
            </div>


        </div>
    )
}

export default Products
