
import React from 'react';
import Navbar from "./components/navbar";
// import Homepage from './components/home';
import Main from './components/main';
// import Content from './components/Content';
import YourComponent from './components/newdata';
import ShippingComponent from './components/shipping'

// import Annocument from './components/Annocument'
import Products from './components/products';

// import productServices from './components/products'
import NewArrivals from './components/newarrivals/NewArrivals';
import SubNavbar from './components/subnavbar'
import Footer from './components/footer'

import Themeextimg from './components/textimg'
// import TopProducts from './components/topcatgioes'
// import Dcard from './components/discount/Dcard'
import Scrollimg from './components/scrollimg'
import Lasttestnews from './components/lasttestnews';
// import FlashCard from './components/flashDeals/FlashCard'
import ProductData from './components/products/pro';
const App = () => {
  return (
    <div className='body-div'>

      <Main />
      <Navbar />
      <SubNavbar />
      {/* <Content /> */}

      {/* <Categioes /> */}
      <YourComponent />
      <ShippingComponent />
      {/* <Imges />
      <Products /> */}
      {/* <TopProducts /> */}
      {/* <productServices /> */}

      {/* <Homepage /> */}
      <Products />
      {/* <Annocument /> */}
      <NewArrivals />
      <ProductData />
      <Themeextimg />

      <Lasttestnews />
      <Scrollimg />
      <Footer />
    </div>
  );
};

export default App;
