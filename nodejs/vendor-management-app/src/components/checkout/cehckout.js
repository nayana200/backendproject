import React from 'react'
import { Link } from 'react-router-dom'
const CheckoutForm = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6">
                        <div className="rounded shadow-lg p-4">
                            <h5 className="mb-0">Billing Details :</h5>

                            <form className="mt-4">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group position-relative">
                                            <label>Your Name <span className="text-danger">*</span></label>
                                            <input name="name" id="firstname" type="text" className="form-control" placeholder="First Name :" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group position-relative">
                                            <label>Last Name <span className="text-danger">*</span></label>
                                            <input name="name" id="lastname" type="text" className="form-control" placeholder="Last Name :" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group position-relative">
                                            <label>Company Name <span className="text-muted">(Optional)</span></label>
                                            <input name="name" id="companyname" type="text" className="form-control" placeholder="Company Name :" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group position-relative">
                                            <label>Street address <span className="text-danger">*</span></label>
                                            <input type="text" name="address1" id="address1" className="form-control" placeholder="House number and street name :" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group position-relative">
                                            <label>Apartment, suite, unit etc. <span className="text-muted">(Optional)</span></label>
                                            <input type="text" name="address2" id="address2" className="form-control" placeholder="Apartment, suite, unit etc. :" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group position-relative">
                                            <label>Town / City <span className="text-danger">*</span></label>
                                            <input type="text" name="city" id="city" className="form-control" placeholder="City Name :" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group position-relative">
                                            <label>Postal Code <span className="text-danger">*</span></label>
                                            <input type="text" name="postcode" id="postcode" className="form-control" placeholder="Zip :" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group position-relative">
                                            <label>State <span className="text-danger">*</span></label>
                                            <input type="text" name="state" id="state" className="form-control" placeholder="State Name :" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group position-relative">
                                            <label>Country <span className="text-danger">*</span></label>
                                            <select className="form-control custom-select">
                                                <option selected="">India</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AX">&Aring;land Islands</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AS">American Samoa</option>
                                                <option value="AD">Andorra</option>
                                                <option value="AO">Angola</option>
                                                <option value="AI">Anguilla</option>
                                                <option value="AQ">Antarctica</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group position-relative">
                                            <label>Phone <span className="text-danger">*</span></label>
                                            <input type="text" name="phone" id="phone" className="form-control" placeholder="State Name :" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group position-relative">
                                            <label>Your Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="form-check form-check-inline my-4">
                            <div className="form-group mb-0">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="newaccount" />
                                    <label className="custom-control-label" for="newaccount">Create an account ?</label>
                                </div>
                            </div>
                        </div>

                        <div className="rounded shadow-lg p-4">
                            <div className="form-check form-check-inline">
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="addnewaddress" />
                                        <label className="custom-control-label" for="addnewaddress">Ship to a different address ?</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group position-relative">
                                <label>Comments</label>
                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Notes about your order :"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="rounded shadow-lg p-4">
                            <div className="d-flex mb-4 justify-content-between">
                                <h5>4 Items</h5>
                                <a href="shop-cart.html" className="text-muted h6">Show Details</a>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-center table-padding mb-0">
                                    <tbody>
                                        <tr>
                                            <td className="h6 border-0">Subtotal</td>
                                            <td className="text-center font-weight-bold border-0">$ 2409</td>
                                        </tr>
                                        <tr>
                                            <td className="h6">Shipping Charge</td>
                                            <td className="text-center font-weight-bold">$ 0.00</td>
                                        </tr>
                                        <tr className="bg-light">
                                            <td className="h5 font-weight-bold">Total</td>
                                            <td className="text-center text-primary h4 font-weight-bold">$ 2409</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <ul className="list-unstyled mt-4 mb-0">
                                    <li>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-group mb-0">
                                                <input type="radio" id="banktransfer" checked="checked" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" for="banktransfer">Bank Transfer</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="mt-3">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-group mb-0">
                                                <input type="radio" id="chaquepayment" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" for="chaquepayment">Cheque Payment</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="mt-3">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-group mb-0">
                                                <input type="radio" id="cashpayment" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" for="cashpayment">Cash on Delivery</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="mt-3">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-group mb-0">
                                                <input type="radio" id="paypal" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" for="paypal">Paypal <a href="hjghd" target="_blank" className="ml-2 text-primary">What is paypal?</a></label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="mt-4 pt-2">
                                    <Link to='./'><a href="shop-checkouts.html" className="btn btn-block btn-primary">Place Order</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckoutForm

