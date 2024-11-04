import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
// import ProductDescription from "./ProductDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { SwiperNavButtons } from "./SwiperNavButtons";
import { useSwiper } from "swiper/react";
import featureOne from "../../assets/img/features/image_2.webp";
import featureTwo from "../../assets/img/features/image_3.webp";
import LoginForm from "../loginForm/LoginForm";
import { useParams } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 5rem;
  column-gap: 14rem;
  margin-top: 5.5rem;
  .TwsitProductSlider {
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    column-gap: 15rem;
  }
  .productSlider_dots {
    /* transform:rotateZ(-180deg) */
  }
  .product_images_slider {
    .swiper-slide {
      padding-top: 100%;
      overflow: hidden;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .swiper {
      height: 10rem !important;
    }
  }
  .add-to-cart {
    background-color: #000;
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: center;
    height: 3rem;
    letter-spacing: 0.05em;
    font-weight: 900;
    cursor: pointer;
    transition: all 0.3s;
    outline: none;
    border: none;
  }
  .add_to_cart_flex {
    display: flex;
    flex-direction: column;
  }
  .add_to_cart_flex > button {
    flex: 1 1 0%;
    padding: 1.5rem;
  }

  .easy-refund {
    span {
      font-size: 1.5rem;
    }
    .easy-refund-image {
      img {
        width: 3.5rem;
        height: 3.5rem;
        margin: 1rem auto;
      }
    }
  }
  .add_favorite_basket {
    display: flex;
    column-gap: 8rem;
  }
  .shipping_features {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    column-gap: 3rem;
    .easy-refund {
      display: flex;
      align-items: center;
      width: 15rem;
      column-gap: 2rem;
    }
  }
  .main_product_description {
    background: #f8f8f8;
    padding: 1rem 0.5rem;
    margin-top:1rem;
    .product_description_heading {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }
    .tab-content {
      display: none;
      p:first-child {
        font-size: 1.2rem;
        padding-top:1.5rem;
      }
    }
    .tabContentActive {
      display: block;
    }
  }
  .categories-detail {
    font-size: 1.2rem;
    display: flex;
    column-gap: 1rem;
    padding: 2rem 0;
  }
  .add_cart {
    width: 40rem;
  }
  .discount-price-main{
  padding-top: 0.5rem;
  padding-bottom: 4rem;
  display: flex;
  column-gap: 1rem;
  }
`;
const WrapperDot = styled.div`
  position: relative;
  top: -70px;
  .swiper {
    height: 40rem;
    width: 10rem;
    margin-left: 10rem;
  }
  .dotImage {
    width: 8rem;
    height: 13rem;
    cursor: pointer;
  }
  .swiper-vertical {
    .swiper-wrapper {
      row-gap: 0rem;
    }
  }
  .swiper-slide {
    background-color: transparent;
  }
  .swiper-btns {
    margin-left: 5rem;
    width: 100%;
    display: grid;
    place-items: center;
  }
  .swiper-prev {
    position: absolute;
    top: -3rem;
    cursor: pointer;
  }
  .swiper-next {
    position: absolute;
    bottom: -3rem;
    cursor: pointer;
  }
  .swiper-next,
  .swiper-prev {
    transform: rotateZ(90deg);
  }
  .swiper-next::after,
  .swiper-prev::after {
    border: none;
  }
`;
const WrapperImage = styled.div`
  position: relative;

  .swiper {
    height: 60rem;
    width: 40rem;
  }

  #imageBig {
    position: relative;
    width: var(--width);
    height: var(--height);
    display: none;
  }

  #imageBig::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 549px;
    width: 200%;
    height: 200%;
    background-color: white;
    background-image: var(--url);
    background-repeat: no-repeat;
    background-size: 200%;
    background-position: var(--zoom-x) var(--zoom-y);
    border: 1px solid #c9c9ce;
  }
  .ImageItem > img {
    cursor: crosshair;
  }
  .product_images_slider {
    float: left;
  }
`;
const TwistProductSlider = () => {
  const { anotherCart } = useSelector((state) => state.allCart);
  const [isToggled, setIsToggled] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const cardId = parseInt(id);
  const findData = anotherCart.find((ele) => ele.id === cardId);
  const swiper = useSwiper();
  const mouseMoveHandler = (e) => {
    const imgElement = e.currentTarget.firstElementChild;
    const rect = imgElement.getBoundingClientRect();
    // const productImage = document.querySelector("#productImage");
    // Get mouse position relative to the image
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // console.clear()
    // console.log("rect.left=>", rect.left)
    // console.log("rect.top=>", rect.top)
    // console.log("e.clientX=>", e.clientX)
    // console.log("e.clientY=>", e.clientY)
    // Calculate percentage positions
    const pointer = {
      x: (x * 100) / rect.width,
      y: (y * 100) / rect.height,
    };

    const bigImage = document.querySelector("#imageBig");
    const img_Src = imgElement.src; // Get the source of the image
    const img_url = `url(${img_Src})`;

    // console.log("Pointer Position:", pointer);
    // console.log("Image Source:", img_Src);

    // Update the big image styles
    bigImage.style.setProperty("--zoom-x", pointer.x + "%");
    bigImage.style.setProperty("--zoom-y", pointer.y + "%");
    bigImage.style.setProperty("--width", "200px");
    bigImage.style.setProperty("--height", "200px");
    bigImage.style.setProperty("--url", img_url);
    bigImage.style.display = "block";
  };
  const mouseLeaveHandler = () => {
    const bigImage = document.querySelector("#imageBig");
    bigImage.style.setProperty("--url", "");
    bigImage.style.display = "none";
  };
  const productShowHide_Handler = () => {
    setIsToggled((prevState) => !prevState); // Toggle state
  };

  useEffect(() => {
    const productHeading = document.querySelector(
      ".product_description_heading > span > svg > path"
    );
    const productDescription = document.querySelector(
      ".main_product_description .tab-content"
    );

    if (isToggled) {
      productHeading.setAttribute("d", "M5 11h14v2H5z");
      productDescription.classList.add("tabContentActive");
    } else {
      productHeading.setAttribute("d", "M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z");
      productDescription.classList.remove("tabContentActive");
    }
  }, [isToggled]);
  const openFormHandler = () =>{
    const loginFormSection = document.querySelector(".login_form_section");
    loginFormSection.style.display = "block";
  }
  return (
    <>
    <Wrapper>
      <div className="TwsitProductSlider">
        {/* small vertical slider start here */}
        <WrapperDot>
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            direction={"vertical"}
            modules={[Navigation, Thumbs]}
            onSwiper={setThumbsSwiper}
            className="product-images-slider-thumbs"
            watchSlidesProgress
            navigation={{
              nextEl: ".swiper-prev",
              prevEl: ".swiper-next",
            }}
          >
            {findData?.productImage.map((item, index) => {
              // console.log("item===>", item)
              return (
                <>
                  <SwiperSlide key={index}>
                    <div className="ImageDiv">
                      <img
                        src={item}
                        alt="product images"
                        className="dotImage"
                      />
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
          <div className="swiper-btns">
            <div onClick={() => swiper.slidePrev()} className="swiper-prev">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                style={{ color: "rgb(0, 0, 0)", marginLeft: "7px" }}
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
              </svg>
            </div>
            <div onClick={() => swiper.slideNext()} className="swiper-next">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                style={{ color: "rgb(0, 0, 0)", marginLeft: "2px" }}
                className="product-slider-arrow-right"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
              </svg>
            </div>
          </div>
        </WrapperDot>
        {/* big horizontal image slider start here  */}
        <WrapperImage>
          <Swiper
            loop={true}
            spaceBetween={50}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="product_images_slider"
            centeredSlides={true}
          >
            {findData.productImage.map((item, index) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <div
                      className="ImageItem"
                      onMouseMove={mouseMoveHandler}
                      onMouseLeave={mouseLeaveHandler}
                    >
                      <img
                        src={item}
                        alt="product images"
                        className="productImage"
                        id="productImage"
                      />
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>

          <SwiperNavButtons />
          <div id="imageBig"></div>
        </WrapperImage>
      </div>
      {/* add to cart start here */}
      <div className="add_cart">
        <div className="heading_add_cart">
          <h2
            style={{
              color: " rgb(32, 32, 32)",
              textTransform: " uppercase",
              fontSize: "16px",
              fontWeight: "800",
            }}
            className="uppercase brand-name"
          >
            BROWN SARTO
          </h2>
        </div>
        <div className="add_favorite_basket">
          <h1
            style={{
              color: "rgb(32, 32, 32)",
              fontSize: "18px",
              fontWeight: "400",
            }}
            className="product-name"
          >
            LACİVERT ZEBRA DETAIL KIMONO
          </h1>
          <span className="add-favorite-basket" style={{cursor:"pointer"}} onClick={openFormHandler}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
            </svg>
          </span>
        </div>
        <div className="categories-detail">
          <span style={{ color: "rgb(108, 117, 125)", fontWeight: "700" }}>
            Ürün Kodu :
          </span>
          <span style={{ color: "rgb(108, 117, 125)", fontWeight: "700" }}>
            BROWNSARTO24
          </span>
        </div>
        {/* price start here */}
        <div
          className="price-main"
          style={{ fontWeight: "800", fontSize: "18px" }}
        >
          <div className="discount-price-main">
            <div
              style={{
                backgroundColor: "rgb(0, 0, 0)",
                color: "rgb(255, 255, 255)",
                fontWeight: "900",
                fontSize: "12px",
                width: "38px",
                height: "38px",
                borderRadius: "0px",
              }}
              class="discount-percent"
            >
              60%
            </div>
            <div className="discount-price">
              <span style={{ fontSize: "16px", color: "rgb(170, 170, 170)",fontWeight:"400"}}>
              ₺ 2,500.00
              </span>
              <span style={{ color: "rgb(31, 31, 31)",fontSize:"16px" }}>₺ 999.90</span>
            </div>
          </div>
        </div>
        {/* price end here  */}
        {/* add to cart button start here */}
        <div className="add_to_cart_flex">
          <button
            style={{ borderRadius: "0px", fontWeight: "900" }}
            className="add-to-cart flex-1   stock"
          >
            ADD CART
          </button>
        </div>
        {/* add to cart button end here  */}
        {/* free shipping start here */}
        <div className="shipping_features">
          <div className="easy-refund">
            <span className="easy-refund-image">
              <img alt="the" src={featureOne} />
            </span>
            <span>Free shipping over 150 TL</span>
          </div>
          <div className="easy-refund">
            <span className="easy-refund-image">
              <img src={featureTwo} alt="ruppess" />
            </span>
            <span>Return change within 10 days</span>
          </div>
        </div>
        {/* free shipping end here  */}

        {/* product description start here */}
        <div className="main_product_description">
          <div
            className="product_description_heading"
            onClick={productShowHide_Handler}
          >
            <span
              style={{ color: "#000", fontSize: "14px", fontWeight: "700" }}
              className="title"
            >
              Ürün Açıklaması
            </span>
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                color="#000"
                style={{ color: "rgb(0, 0, 0)" }}
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
              </svg>
            </span>
          </div>
          <div className="tab-content">
            <p>
              LACİVERT ZEBRA DETAY KİMONO. İNCE VE YÜKSEK KALİTELİ DOKUMA
              KUMAŞIYLA ŞIKLIK VE RAHATLIĞI BİR ARADA SUNAN ÖZEL SERİ KİMONOLAR
              STANDART ÖLÇÜLERİYLE HER BEDENE RAHATLIKLA UYUM SAĞLAR. HEM
              GÜNDELİK HEMDE PLAJ KULLANIMI İÇİN UYGUNDUR.
            </p>
            <p>
              <br />
            </p>
            <ul style={{ fontSize: "14px",marginLeft:"3rem" }}>
              <li style={{ listStyle: "initial" }}>
                <span style={{ fontSize: "14px" }}>BOY ÖLÇÜSÜ 135cm</span>
              </li>
              <li style={{ listStyle: "initial" }}>
                <span style={{ fontSize: "14px" }}>KOL ÖLÇÜSÜ 52cm</span>
              </li>
            </ul>
          </div>
        </div>
        {/* product description end here  */}
      </div>
      {/* add to cart end here  */}
    </Wrapper>
    <div className="main_login_form">
      <LoginForm/>
    </div>
    </>
  );
};

export default TwistProductSlider;
