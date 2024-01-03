import React from 'react'
import Navbar from '../navbar/navbar'
import SubNav2 from '../navbar/secnavbar'
import MainNav from '../navbar/subnavbar'
import Main from '../navbar/respo'
import SideNav from '../maindata/home'
import YourComponent from '../newdata'
import ShippingComponent from '../shipping'
import TopProducts from '../topcatgioes'
import Products from '../productsdetails/products'
import Themeextimg from '../textimg'
import Lasttestnews from '../lasttestnews'
import ScollDcard from '../scrollimg'
import Footer from '../footer'
import Homepage from '../productsdetails/home'
import CardSlider from '../productsdetails/feturedproducts'
// import CheckoutForm from '../order/checkout'
import CheckoutForm from '../checkout/cehckout'
// import Services from '../order/services'
import Addtocart from '../order/addtocart'
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
            <h3>Latest Products</h3>
            <Homepage />
            <h3>Faetured Products</h3>
            <CardSlider />
            <Themeextimg />
            <h3>Date Of The Day<hr /></h3>
            <h4>Lasttest News <hr /></h4>
            <Lasttestnews />
            <ScollDcard />
            <Footer />
            {/* <CheckoutForm /> */}
        </>
    )
}

export default MainHome
