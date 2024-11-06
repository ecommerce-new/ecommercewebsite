import React from 'react';
import Index from '../landingpage/Index';
import { Route, Routes } from 'react-router-dom';
import ProductCardOne from '../productCard/ProductCardOne';
import ProductCardTwo from '../productCard/ProductCardTwo';
import ProductCardThree from '../productCard/ProductCardThree';
import TwistProductSlider from "../twistProductSlider/TwistProductSlider.jsx";
import SignupForm from '../signupForm/SignupForm.jsx';
import ShopNow from '../shopNow/ShopNow.jsx';
import PaymentForm from '../CheckOut/PaymentForm.jsx';
import Searching from '../landingpage/Searching.jsx';
import CartPop from '../CartPop/CartPop.jsx';
import Signup_LoginForm from '../signupForm/Signup_LoginForm.jsx';
import ForgotPasswordForm from '../signupForm/ForgotPasswordForm.jsx';
const NavRouters = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/productcard/:productcardName" element={<ProductCardOne/>} />
      {/* <Route path="/productcard/productcardtwo" element={<ProductCardTwo/>} />
      <Route path="/productcard/productcardthree" element={<ProductCardThree/>} /> */}
      <Route path="/product/:productCard/:product_name/:id" element={<TwistProductSlider/>}/>
      <Route path="/sign-up" element={<SignupForm/>}/>
      <Route path='/shop-now' element={<ShopNow/>}/>
      <Route path="/login" element={<Signup_LoginForm/>}/>
      <Route path="/forgot-password" element={<ForgotPasswordForm/>}/>
      <Route path="/check-out" element={<PaymentForm/>}/>
      <Route path="/search" element={<Searching/>}/>
      <Route path="/search/:product_name/:id" element={<CartPop/>}/>
     </Routes>
    </>
  )
}

export default NavRouters;