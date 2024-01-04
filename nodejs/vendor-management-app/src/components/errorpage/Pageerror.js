import React from 'react'
import Navbar from '../navbar/navbar'
import SubNav2 from '../navbar/secnavbar'
import Main from '../navbar/respo'
import MainNav from '../navbar/subnavbar'
import Footer from '../footer'
const Pageerror = () => {
    return (
        <div>
            <Navbar />
            <SubNav2 />
            <Main />
            <MainNav />
            <section className="bg-home d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 text-center">
                            <img src="http://127.0.0.1:5500/images/404.png" className="img-fluid" alt="" />
                            <div className="text-uppercase mt-4 display-3">Oh ! no</div>
                            <div className="text-capitalize text-dark mb-4 error-page">Page Not Found</div>
                            <p className="text-muted para-desc mx-auto">Start working with  that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="index.html" className="btn btn-outline-primary mt-4">Go Back</a>
                            <a href="index.html" className="btn btn-primary mt-4 ml-2">Go To Home</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Pageerror
