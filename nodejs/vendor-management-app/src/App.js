import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SideNav from './components/maindata/home'

import Cart from './components/cart/cart';
import { UserProvider } from './components/signinsignup/useContext';

import Login from './components/signinsignup/signin'
import Register from './components/signinsignup/signup'
import ResetPassword from './components/signinsignup/resetpassword'
import SingleProduct from './components/productsdetails/singleproduct'
import CheckoutForm from './components/order/checkout';

import Aboutus from './components/aboutus/aboutus';
import FAQ from './components/Faq/Faq';
import Features from './components/features/features'
import Service from './components/servies/servies'
import Contact from './components/contact/contact'
import Lasttestnews from './components/lasttestnews';

import Pageerror from './components/errorpage/Pageerror';
import MainHome from './components/main/Main';
const App = () => {
  return (

    <BrowserRouter>
      <UserProvider>


        <Routes>



          <Route path="/data" element={<SideNav />} />

          <Route path="/signin" element={<Login />} />

          <Route path='/signup' element={<Register />} />
          <Route path='/reset/:token' element={<ResetPassword />} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/' element={<Homepage />} /> */}
          <Route path='/' element={<MainHome />} />
          <Route path='/products/:productId' element={<SingleProduct />} />
          <Route path='/Faq' element={<FAQ />} />

          <Route path='/Pageerror' element={<Pageerror />} />
          <Route path='/servies' element={<Service />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/features' element={<Features />} />

          <Route path='/cehckout' element={<CheckoutForm />} />
          <Route path='/lasttestnews' element={<Lasttestnews />} />
        </Routes>



      </UserProvider>
    </BrowserRouter>

  );
};

export default App;
