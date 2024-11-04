import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../features/cartSlice";
import { NavLink } from "react-router-dom";
const Wrapper = styled.div`
  .flex_basket {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width: 85%;
    margin: 0 auto;
    column-gap: 4rem;
    /* background: #e4d3d33a; */

    /* media query start here */
    @media (min-width: 330px) {
      flex-direction: column;
    }
    @media (min-width:780px){
      flex-direction:row;
    }
  }
  .basket_brand_img {
    max-width: 5rem;
    min-width: 4rem;
    max-height: 8rem;
    min-height: 6rem;
    margin-top: 1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .shop_cart_heading {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }
  .shop_cart_main_section {
    /* background: red; */
  }
  .main_orderSummary_section {
    /* background: yellow; */
  }
  .cart_detail_section {
    display: flex;
    column-gap: 20rem;
    column-gap: 4rem;
    padding: 4rem;
    padding-bottom: 2rem;
    padding-top: 2rem;
    padding-left: 0;
    padding-right: 0;
    align-items: center;
    border-bottom: 1px solid #e4e4e7;
    .basket_price_info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
  span {
    color: #9da5af;
    margin-right: 5px;
    font-size: 13px;
  }
  .totalPrice {
    div {
      font-size: 1.4rem;
    }
  }
  .quantity {
    line-height: 2rem;
    @media(min-width:330px){
      width:8rem;
    }
  }
  .piece_quantity {
    display: flex;
    justify-content: space-between;
    width: 6rem;
    /* background: yellow; */
    align-items: center;
    height: 3rem;
  }
  .brand_piece {
    div {
      display: flex;
      align-items: center;
    }
  }
  /* order_summary start here  */
  .orderSummary_flex {
    flex: 2 1 22%;
    background: rgb(247, 247, 249);
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
    border: 1px solid #ededed;
    margin-top: 6rem;
  }
  .order_summary_heading {
    h3 {
      font-weight: 700;
      padding: 18px 0;
      font-size: 18px;
    }
  }
  .order_price_summary {
    .all_product_price,
    .discounted_price,
    .totalPrice,
    .cargo_section {
      display: flex;
      justify-content: space-between;
      span {
        color: #636363;
        font-size: 14px;
        font-weight: 500;
        line-height: 3.5rem;
      }
      span:last-child {
        font-weight: 700;
        font-size: 14px;
        color: #8a8b94;
      }
    }
    .cargo_section {
      span:last-child {
        width: 5rem;
        line-height: 2.5rem;
        font-size: 1.6rem;
        margin-right: 4rem;
      }
    }
  }
  .footer_btn {
    margin-top: 6rem;
    a {
      span {
        height: 48px;
        display: flex;
        background-color: #000;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
        cursor: pointer;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        display: flex;
        align-items: center;
        column-gap: 2rem;
      }
    }
    span {
      height: 48px;
      display: flex;
      background-color: #000;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      cursor: pointer;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      display: flex;
      align-items: center;
      column-gap: 2rem;
    }
  }
  .shiping {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    .basket_features {
      display: flex;
      justify-content: center;
      column-gap: 1rem;
    }
  }
  .total_price {
    .gray-price-line {
      color: #8a8b94;
      text-decoration: line-through;
    }
  }
  /* order-summary end here  */
`;
const ShopNow = () => {
  const dispatch = useDispatch();
  const { withOutDiscountPrice, cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  // console.log("==>", cart, totalQuantity, totalPrice);
  return (
    <>
      <Wrapper>
        <div className="container-fluid">
          <div className="row flex_basket">
            {/* my cart start here */}
            <div
              className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
              style={{ flex: "60%", marginTop: "3rem" }}
            >
              <div className="shop_cart_main_section">
                <div className="shop_cart">
                  <h1 className="shop_cart_heading">
                    My Cart ({totalQuantity})
                  </h1>
                </div>

                {/* cart detail start here */}

                {cart?.map((item) => {
                  return (
                    <>
                      <div key={item.id}>
                        <div className="cart_detail_section">
                          {/* brand image start here  */}
                          <div className="basket_brand_img">
                            <img src={item.img} alt="" />
                          </div>

                          <div className="basket_price_info">
                            {/* quantity start here */}
                            <div className="quantity">
                              {/* brand name start here */}
                              <div className="basket_brand_name">
                                <h3 className="brand_name">
                                  {item.product_name}
                                </h3>
                              </div>

                              {/* price start here */}
                              <div className="basket_brand_price">
                                <span>Price:</span>
                                <span style={{ color: "rgba(0,0,0,1)" }}>
                                  {item.discount_price2}
                                </span>
                              </div>

                              {/* product code start here */}
                              <div className="product_code">
                                <span>Product Code:</span>
                                <span
                                  style={{
                                    textTransform: "uppercase",
                                    color: "#000",
                                  }}
                                >
                                  {" "}
                                  brownsarto{item.id}
                                </span>
                              </div>

                              {/* brand piece start here */}
                              <div className="brand_piece">
                                <div>
                                  <span>Piece</span>
                                  <div className="piece_quantity">
                                    <span
                                      className="cursor-pointer"
                                      onClick={() =>
                                        dispatch(decreaseItemQuantity(item.id))
                                      }
                                      style={{
                                        cursor: "pointer",
                                        marginTop: "0.5rem",
                                      }}
                                    >
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        color="#d4d4d4"
                                        style={{ color: "rgb(0, 0, 0)" }}
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M5 11h14v2H5z"></path>
                                      </svg>
                                    </span>
                                    <span
                                      className="font-semibold cursor-pointer"
                                      style={{
                                        color: "#000",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {item.quantity}
                                    </span>
                                    <span
                                      className="cursor-pointer"
                                      onClick={() =>
                                        dispatch(increaseItemQuantity(item.id))
                                      }
                                      style={{
                                        cursor: "pointer",
                                        color: "#000",
                                        marginTop: "0.5rem",
                                      }}
                                    >
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ color: "rgb(0, 0, 0)" }}
                                      >
                                        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* delete total price */}
                            <div className="total_price">
                              {/* trash start here */}
                              <div
                                className="trash"
                                style={{ cursor: "pointer", textAlign: "end" }}
                                onClick={() => {
                                  dispatch(removeItem(item.id)),
                                    console.log("shopId", item.id);
                                }}
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  color="#000"
                                  style={{
                                    color: "rgb(0, 0, 0)",
                                    fontSize: "1.5rem",
                                  }}
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z"></path>
                                </svg>
                              </div>
                              {/* total quantity price */}
                              <div className="totalPrice">
                                <div className="gray-price-line text-xs">
                                  ₺{" "}
                                  {parseInt(item.discount_price1) *
                                    item.quantity}
                                  .00
                                </div>
                                <div
                                  style={{ color: "rgb(0, 0, 0)" }}
                                  className="price-main-cart"
                                >
                                  ₺{" "}
                                  {parseInt(item.discount_price2) *
                                    item.quantity}
                                  .00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

                {/* cart detail end here  */}
              </div>
            </div>
            {/* my cart end here */}

            {/* order summary start here */}
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 orderSummary_flex">
              <div className="main_orderSummary_section">
                <div className="order_summary">
                  <div className="order_summary_heading">
                    <h3>Order Summary</h3>
                  </div>
                  <div className="order_price_summary">
                    <div className="all_product_price">
                      <span>In- Of- All</span>
                      <span>{withOutDiscountPrice}</span>
                    </div>
                    <div className="discounted_price">
                      <span style={{ textTransform: "uppercase" }}>
                        Basket 49%
                      </span>
                      <span style={{ color: "rgb(74, 165, 123)" }}>
                        {totalPrice - withOutDiscountPrice}
                      </span>
                    </div>
                    <div className="cargo_section">
                      <span>Cargo</span>
                      <span style={{ color: "rgb(74, 165, 123)" }}>
                        Shipping Free
                      </span>
                    </div>
                    <div className="totalPrice">
                      <span style={{ color: "#000" }}>Total</span>
                      <span>{totalPrice}</span>
                    </div>
                  </div>
                </div>
                {/* <div className="footer_para">
                  <span>The cargo will be calculated in the next step.</span>
                </div> */}

                <div className="footer_btn">
                  {totalQuantity > 0 ? (
                    <NavLink to="/check-out">
                      <span>
                        SHOPS
                        <span>
                          <svg
                            stroke="currentColor"
                            style={{ color: "#fff" }}
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="25"
                            width="25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                          </svg>
                        </span>
                      </span>
                    </NavLink>
                  ) : (
                    <span>
                      SHOPS
                      <span>
                        <svg
                          stroke="currentColor"
                          style={{ color: "#fff" }}
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="25"
                          width="25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                        </svg>
                      </span>
                    </span>
                  )}
                </div>
                <div className="shiping">
                  <div className="basket_features">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM16.4524 8.22183L17.8666 9.63604L11.5026 16L7.25999 11.7574L8.67421 10.3431L11.5019 13.1709L16.4524 8.22183Z"></path>
                      </svg>
                    </span>
                    <span>Secure shopping with 256 Bit SSL</span>
                  </div>
                  <div className="basket_features">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                      </svg>
                    </span>
                    <span>Free shipping over 150 TL</span>
                  </div>
                </div>
              </div>
            </div>
            {/* orde summary end here  */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ShopNow;
