import React, { useEffect, useState } from "react";
import HeaderSlider from "./HeaderSlider";
import "../../assets/css/navbar.css";
import HeaderLogo from "../../assets/img/navbar/logo.webp";
import HeaderMarkque from "./HeaderMarkque";
import { NavLink, useLocation } from "react-router-dom";
import AddToCart from "./AddToCart";
import Searching from "./Searching";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Wrapper = styled.div`
  .heading {
    margin-left: 0.5rem;
    h4 {
      display: flex;
      column-gap: 1rem;
      font-size: 1.4rem;
      font-weight: 900;
    }
  }
 
`;
const MainSearchingSection= styled.div`
  background: white;
  position: fixed;
  inset: 0;
  z-index: 999;
`
const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.allCart);
  const location = useLocation();
  const [searching, setSearching] = useState(false);
  const navbarHandler = () => {
    const headerOptionList = document.querySelector(".header_option_list");
    headerOptionList.classList.add("active");
  };
  const hideHandler = () => {
    const headerOptionList = document.querySelector(".header_option_list");
    headerOptionList.classList.remove("active");
  };
  const showaddTocart_Handler = () => {
    const addToCart = document.querySelector(".Product_cart");
    addToCart.classList.add("activeProduct_cart");
  };

  const isLocationMatch = location.pathname.includes(
    "LAC%C4%B0VERT%20ZEBRA%20DETAIL%20KIMONO"
  );
  const isSignUpForm = location.pathname.includes("sign-up");
  const isShopNow = location.pathname.includes("shop-now");
  const isCheckOut = location.pathname.includes("check-out");
  const isProductOne = location.pathname.includes("productcard/productcardone");
  const isProductTwo = location.pathname.includes("productcard/productcardtwo");
  const isProductThree = location.pathname.includes(
    "productcard/productcardthree"
  );
  const isLogin = location.pathname.includes('login')
  const isSearch = location.pathname.includes("search");
  const isForgotPassword = location.pathname.includes("forgot-password");
  // console.log("isCheckOut===>", isProductOne, isProductTwo, isProductThree);

  useEffect(() => {
    const markquee = document.querySelector(".headerMarkquee");
    const header = document.querySelector(".navbar");
    // const headerSlider = document.querySelector(".headerSlider");

    if (
      isLocationMatch ||
      isSignUpForm ||
      isShopNow ||
      isProductOne ||
      isProductTwo ||
      isProductThree || 
      isLogin ||
      isForgotPassword
    ) {
      if (markquee) markquee.style.display = "none";
      if (header) header.style.boxShadow = "0 5px 5px -7px #989898";
    } else {
      if (markquee) markquee.style.display = "block";
      if (header) header.style.boxShadow = "none";
    }
  }, [
    isLocationMatch,
    isSignUpForm,
    isShopNow,
    isProductOne,
    isProductTwo,
    isProductThree,
    isLogin,
    isForgotPassword
  ]);

  const searchHandler = () => {
    setSearching(true);
  };

  // const mySwiper = document.querySelector(".mySwiper");
  // console.log("===>",mySwiper)
  // const observer = new IntersectionObserver((entries)=>{
  // const stickyHeader = document.querySelector('.sticky_header');
  // entries.forEach((entry)=>{
  //  if(entry.isIntersecting === false){
  //     stickyHeader.style.position = 'fixed';
  //     stickyHeader.style.boxShadow = `  0 5px 5px -7px #989898`;
  //  }else{
  //     stickyHeader.style.position = '';
  //     stickyHeader.style.boxShadow = '';
  //  }
  // })
  // },{threshold:1})
  
  // observer.observe(mySwiper)
  return (
    <>
      {isCheckOut || isSearch ? null : (
        <Wrapper>
          <div className="headerSlider">
            <HeaderSlider />
          </div>

          {/* navbar start here */}
          <div className="sticky_header">
            <nav className="navbar">
              <div className="header">
                <div className="logo_bar">
                  <div className="hamburger_icon" onClick={navbarHandler}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.1"
                      viewBox="0 0 17 17"
                      color="#031c37ff"
                      style={{ color: "#031c37ff" }}
                      height="23"
                      width="23"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g></g>
                      <path d="M16 3v2h-15v-2h15zM1 10h15v-2h-15v2zM1 15h15v-2h-15v2z"></path>
                    </svg>
                  </div>
                  <div className="header_logo">
                    <div className="logo">
                      <NavLink to="/">
                        <img src={HeaderLogo} alt="site_logo" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* other icon start here */}
                <div className="header_main_icons">
                  <ul className="icon_list">
                    <li className="icon_sublist" onClick={searchHandler}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        color="#031c37ff"
                        style={{ color: "#031c37ff" }}
                        height="25"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                      </svg>
                    </li>
                    <li className="icon_sublist">
                    <NavLink style={{color:"black",marginLeft:"0.5rem"}} to="/login">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          color="#031c37ff"
                          style={{ color: "#031c37ff" }}
                          height="25"
                          width="25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
                        </svg>
                        </NavLink>
                    </li>
                    <li
                      className="icon_sublist add_to_cart_box"
                      onClick={showaddTocart_Handler}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        color="#031c37ff"
                        style={{ color: "#031c37ff" }}
                        height="25"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"></path>
                      </svg>
                      <span>{totalQuantity}</span>
                    </li>
                  </ul>
                </div>
                {/* other icon end here */}
              </div>

              {/* navbar option list start here  */}
              <div className="header_option_list">
                <div className="sub_header">
                  <div className="cross_heading">
                    <div className="cross" onClick={hideHandler}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="25"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                      </svg>
                    </div>
                    <div className="heading">
                      <h4>
                        <a href="#">MEMBER LOGIN</a>
                        <span style={{ fontWeight: 600 }}>|</span>
                        <a href="#">REGISTER</a>
                      </h4>
                    </div>
                  </div>
                  <div className="basket_bag add_to_cart_box">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      color="#031c37ff"
                      style={{ color: "rgb(3, 28, 55)" }}
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"></path>
                    </svg>
                    <span>{totalQuantity}</span>
                  </div>
                </div>

                <ul className="option_list">
                  <li className="option_sublist">KIMONO</li>
                  <li className="option_sublist">PARAO</li>
                  <li className="option_sublist">BANDANA</li>
                  <li className="option_sublist">KIMONO+BANDANA</li>
                  <li className="option_sublist">PAREO+BANDANA</li>
                  <li className="option_sublist">SHIRT</li>
                  <li className="option_sublist">DRESS</li>
                </ul>
              </div>
              {/* navbar option list end here  */}

              {/* Add to cart data start here */}
              <div className="Product_cart">
                <AddToCart />
              </div>
              {/* Add to cart data end here */}
            </nav>
          </div>
          {/* navbar end here */}

          {/* headermarque start here */}
          <div className="headerMarkquee">
            <HeaderMarkque />
          </div>

          {/* headermarque end here */}
        </Wrapper>
      )}

      {/* searching section start here */}
      {searching && (
        <MainSearchingSection className="main_searching_section">
          <Searching setSearching={setSearching}/>
        </MainSearchingSection>
      )}

      {/* searching section end here  */}
    </>
  );
};

export default Navbar;
