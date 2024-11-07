import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { SwiperNavButtons } from "../twistProductSlider/SwiperNavButtons";
// import { useParams } from "react-router-dom";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css';



const Grid = styled.div`
  display: flex;
  width: 75%;
  margin: 0 auto;
  background: #fff;
  height: 60rem;
  padding-top: 2.5rem;
  position: relative;
  @media (min-width: 330px) {
    height: max-content;
    flex-direction: column;
    padding-bottom: 2rem;
  }
  @media (min-width: 740px) {
    flex-direction: row;
  }
  @media (min-width:1300px){
    height: 60rem;
  }
`;
const WrapperImage = styled.div`

  position: relative;
  height: 100%;
  display: grid;
  align-items: center;

  /* close add to cart start here */
  .close_addToCart {
    position: absolute;
    background: #000;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 5px;
    top: 5px;
    cursor: pointer;
    svg {
      color: #fff;
    }
  }
  /* close add to cart end here */
  .swiper {
    height: 55rem;
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

  /* cart information start here */

  .product_size {
    .size_list {
      ul {
        display: grid;
        grid-template-columns: repeat(4, max-content);
        column-gap: 0.5rem;

        li {
          /* background: #000; */
          border:1px solid #ececee;
          width: 5rem;
          height: 5rem;
          color: #000;
          line-height: 5rem;
          text-align: center;
          font-size: 1.4rem;
          font-weight: bold;
          cursor: pointer;
        }
        .activeLink{
          background:#000;
          color:#fff;
        }
      }
    }
  }
  /* cart information end here  */
  .eWIbuw {
    position: initial;
    transform: translate(0);
    margin-top: -25rem;
  }
  .cartPop_brand_name {
    color: rgb(0, 0, 0);
    font-size: 1.6rem;
    font-weight: 800;
    padding-bottom: 0.2rem;
  }
  .cartPop_product_name {
    color: rgb(0, 0, 0);
    font-size: 1.8rem;
    font-weight: 400;
  }
  .add_to_cart {
    button {
      background-color: #000;
      display: flex;
      align-items: center;
      color: #fff;
      justify-content: center;
      height: 5rem;
      letter-spacing: 0.05em;
      font-weight: 900;
      cursor: pointer;
      transition: all 0.3s;
      border: none;
      outline: none;
      width: 100%;
    }
  }
  .CartPopSlider {
    flex: 60%;
  }
  .cartPop_detail_section {
    padding-top: 3rem;
    flex: 40%;
    padding-right: 2rem;
  }
  .product_code {
    padding-top: 1.5rem;
    span {
      color: #6c757d;
      font-size: 13px;
      font-weight: 600;
    }
  }
  .cartPop_productPrice {
    padding-top: 3rem;
  }
  .product_size {
    padding-top: 3rem;
    padding-bottom: 4rem;
  }

  @media (min-width: 330px) {
    .CartPopSlider {
      margin-top: 3rem;
    }
    .swiper-nav-btns {
      display: none;
    }
    .cartPop_detail_section {
      padding-left: 2rem;
      padding-top: 3rem;
    }
    .swiper {
      height: 32rem;
      width: 22rem;
      padding: 1rem;
    }
  }

  @media (min-width: 360px) {
    .swiper {
      height: 33rem;
      width: 23rem;
    }
  }

  @media (min-width: 480px) {
    .swiper {
      height: 37rem;
      width: 28rem;
    }
  }
  @media (min-width: 560px) {
    .swiper {
      height: 40rem;
      width: 30rem;
    }
  }
  @media (min-width: 740px) {
    .cartPop_detail_section {
      padding-top: 7rem;
    }
  }
  @media (min-width: 999px) {
    .CartPopSlider {
      margin-top: 0;
    }
  }
  @media (min-width: 1300px) {
    .cartPop_detail_section {
      padding-top: 4rem;
    }
    .swiper {
      height: 55rem;
      width: 40rem;
    }
  }

  .swiper-pagination-bullet-active{
    background:#000 !important;
    width:4rem;
    height:1rem;
    border-radius:2rem;
  }
  .swiper-pagination-bullet {
    background: silver;
    opacity: 1;
  }
`;

const CartPop = ({ cartPopImg, setCartPop_Visible }) => {
  const closeAddCart_Handler = () => {
    setCartPop_Visible(false);
  };

  return (
    <>
      <WrapperImage>
        <Grid className="grid">
          <div className="close_addToCart" onClick={closeAddCart_Handler}>
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
          <div className="CartPopSlider">
            <Swiper
              loop={true}
              spaceBetween={50}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation, Thumbs,Pagination]}
              grabCursor={true}
              className="product_images_slider"
              centeredSlides={true}

              pagination={true}
             
            >
              {cartPopImg.productImage.map((item, index) => {
                return (
                  <>
                    <SwiperSlide key={index}>
                      <div className="ImageItem">
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
          </div>

          {/* cartPop detail start here */}
          <div className="cartPop_detail_section">
            <div className="cartPop_detail">
              <div className="cartPop_brand_name">{cartPopImg.brand_name}</div>

              {/* product name start here */}
              <div className="cartPop_product_name">
                {cartPopImg.product_name}
              </div>
              {/* product name end here */}

              {/* product code start here */}
              <div className="product_code">
                <span>Product Code:</span> <span>brownsarto033</span>
              </div>
              {/* product code end here  */}

              {/* product price start here */}

              <div className="cartPop_productPrice">
                <div className="discount_price_main">
                  <div className="discount_percent ">
                    {" "}
                    {cartPopImg.discount_per}
                  </div>
                  <div className="discount_price">
                    <span> ₺ {cartPopImg.discount_price1}</span>
                    <span className="" style={{ color: "rgb(43, 43, 43)" }}>
                      ₺ {cartPopImg.discount_price2}
                    </span>
                  </div>
                </div>
              </div>

              {/* product price end here */}

              <div className="product_size">
                <div
                  className="product_para"
                  style={{ marginBottom: "0.5rem" }}
                >
                  <span style={{ color: "#818181", fontSize: "14px" }}>
                    Size
                  </span>{" "}
                  <span style={{ color: "#818181", fontSize: "14px" }}>
                    Size
                  </span>
                </div>
                {/* size section start here */}
                <div className="size_list">
                  <ul>
                    <li className="activeLink">34</li>
                    <li>36</li>
                    <li>38</li>
                    <li>40</li>
                  </ul>
                </div>
              </div>

              {/* add to cart button start here */}
              <div className="add_to_cart">
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>
          {/* cartPop detail end here  */}
        </Grid>
      </WrapperImage>
    </>
  );
};

export default CartPop;
