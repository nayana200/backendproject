import React from 'react'

const Addtocart = () => {
    return (
        <div>
            <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ml-md-4">
                    <h4 className="title">Branded T-Shirts</h4>
                    <h5 className="text-muted">$21.00 <del className="text-danger ml-2">$25.00</del> </h5>
                    <ul className="list-unstyled text-warning h5 mb-0">
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                    </ul>

                    <h5 className="mt-4 py-2">Overview :</h5>
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>

                    <ul className="list-unstyled feature-list text-muted">
                        <li><i data-feather="check-circle" className="fea icon-sm"></i> Digital Marketing Solutions for Tomorrow</li>
                        <li><i data-feather="check-circle" className="fea icon-sm"></i> Our Talented &amp; Experienced Marketing Agency</li>
                        <li><i data-feather="check-circle" className="fea icon-sm"></i> Create your own skin to match your brand</li>
                    </ul>

                    <div className="row mt-4 pt-2">
                        <div className="col-lg-6 col-12">
                            <div className="d-flex align-items-center">
                                <h6 className="mb-0">Your Size:</h6>
                                <ul className="list-unstyled mb-0 ml-3">
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="btn btn-icon btn-soft-primary">S</a></li>
                                    <li className="list-inline-item ml-1"><a href="javascript:void(0)" className="btn btn-icon btn-soft-primary">M</a></li>
                                    <li className="list-inline-item ml-1"><a href="javascript:void(0)" className="btn btn-icon btn-soft-primary">L</a></li>
                                    <li className="list-inline-item ml-1"><a href="javascript:void(0)" className="btn btn-icon btn-soft-primary">XL</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                            <div className="d-flex shop-list align-items-center">
                                <h6 className="mb-0">Quantity:</h6>
                                <div className="ml-3">
                                    <input type="button" value="-" className="minus btn btn-icon btn-soft-primary font-weight-bold" />
                                    <input type="text" step="1" min="1" name="quantity" value="1" title="Qty" className="btn btn-icon btn-soft-primary font-weight-bold" />
                                    <input type="button" value="+" className="plus btn btn-icon btn-soft-primary font-weight-bold" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-2">
                        <a href="javascript:void(0)" className="btn btn-primary">Shop Now</a>
                        <a href="shop-cart.html" className="btn btn-primary ml-2">Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addtocart
