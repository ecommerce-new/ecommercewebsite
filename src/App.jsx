import React from "react";
import Navbar from "./components/landingpage/Navbar.jsx";
import NavRouters from "./components/Routs/NavRouters.jsx";
import Footer from "./components/landingpage/Footer.jsx";
// import CartPop from "./components/CartPop/CartPop.jsx";
// import Searching from "./components/landingpage/Searching.jsx";
import ProductNavbarTwo from "./components/productCard/ProductNavbarTwo.jsx";
// import Searching from './components/landingpage/Searching.jsx';
// import CartPop from './components/CartPop/CartPop.jsx';
// import TwistProductSlider from './components/twistProductSlider/TwistProductSlider.jsx';
// import TwsitProdSliderTwo from './components/twistProductSlider/TwsitProdSliderTwo.jsx';

function App() {
  return (
    <>
      <Navbar />
      <NavRouters />
      <Footer />
      {/* <Searching/> */}
      {/* <CartPop/> */}
{/* 
      <ProductNavbarTwo/> */}
    </>
  );
}

export default App;
