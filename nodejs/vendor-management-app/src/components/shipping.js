import { React } from 'react'
import { Alert } from 'react-bootstrap'


const ShippingComponent = () => {
    return (
        <div className='container-fulid mt-4' style={{ width: "99%" }}>


            <div className='mb-5 '>
                <div className='row'>
                    <div className='col '>
                        <div className='card  d-flex' style={{ marginLeft: "21px", marginRight: "29px" }}>
                            <div className=' d-flex' >
                                <div className="  d-flex  p-3  " style={{ marginLeft: "40px" }}><Alert variant="warning" className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "60px" }}><img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/themes/Shopeur/images/webi/svg/customer.svg" alt="ygsyus" width="30px" height="30px"></img></Alert>
                                    <div >
                                        <h3 className="ms-4 fs-5">24/7 Support</h3>
                                        <h5 className="ms-4 fs-6">Online Support 24/7</h5>
                                    </div>
                                </div>
                                <div className='vr mt-3 ' style={{ height: "50px" }}></div>
                                <div className="  d-flex  p-3  "><Alert variant="warning" className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "60px" }}><img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/themes/Shopeur/images/webi/svg/money.svg" alt="ygsyus" width="30px" height="30px"></img></Alert>
                                    <div >
                                        <h3 className="ms-4 fs-5">Money Back Guarantee</h3>
                                        <h5 className="ms-4 fs-6">100% Secure Payment</h5>
                                    </div>
                                </div>
                                <div className='vr mt-3 ' style={{ height: "50px" }}></div>
                                <div className="  d-flex  p-3  "><Alert variant="warning" className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "60px" }}><img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/themes/Shopeur/images/webi/svg/gift.svg" alt="ygsyus" width="30px" height="30px"></img></Alert>
                                    <div >
                                        <h3 className="ms-4 fs-5">Special Gift Cards</h3>
                                        <h5 className="ms-4 fs-6">Give The Perfect Gift</h5>
                                    </div>
                                </div>
                                <div className='vr mt-3' style={{ height: "50px" }}></div>
                                <div className="  d-flex  p-3  " style={{ marginRight: "12px" }}><Alert variant="warning" className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "60px" }}><img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/themes/Shopeur/images/webi/svg/ship.svg" alt="ygsyus" width="30px" height="30px"></img></Alert>
                                    <div >
                                        <h3 className="ms-4 fs-5">Free Shipping</h3>
                                        <h5 className="ms-4 fs-6">On Order Over $99</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShippingComponent