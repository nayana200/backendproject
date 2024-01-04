import React from 'react'
import Navbar from '../navbar/navbar'
import SubNav2 from '../navbar/secnavbar'
import MainNav from '../navbar/subnavbar'
import Main from '../navbar/respo'
import SideNav from '../maindata/home'
import YourComponent from '../newdata'
import ShippingComponent from '../shipping'

import Products from '../productsdetails/products'
import Themeextimg from '../textimg'
import Lasttestnews from '../lasttestnews'
import ScollDcard from '../scrollimg'
import Footer from '../footer'
import Homepage from '../productsdetails/home'
import CardSlider from '../productsdetails/feturedproducts'

const MainHome = () => {
    return (
        <>
            <Main />
            <SubNav2 />
            <Navbar />

            <MainNav />

            <SideNav />
            <YourComponent />
            <ShippingComponent />
            <Products />
            <h3 style={{ marginTop: "10px" }}>Latest Products</h3>
            <Homepage />
            <h3 style={{ marginTop: "10px" }}>Faetured Products</h3>
            <CardSlider />
            <Themeextimg />
            <h3>Date Of The Day<hr /></h3>
            <h4>Lasttest News <hr /></h4>
            <Lasttestnews />
            <ScollDcard />
            <Footer />

            {/* <Aboutus /> */}
            {/* <CheckoutForm /> */}
        </>
    )
}

export default MainHome
