import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ImageTwo from "../../assets/img/productImage/ImageTwo.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  getCartTotal,
  removeItem,
} from "../features/cartSlice";
const Wrapper = styled.div`
  .main_addtocart_sec {
    background: white;
    width: 40rem;
    height: 100dvh;
    position: relative;
    z-index: 9999;
    .addtocart_bodycontent {
      padding: 2rem;
    }
  }
  span {
    font-size: 1.4rem;
    font-weight: 600;
  }
  svg {
    font-size: 2rem;
  }
  .heading_close_section {
    display: flex;
    justify-content: space-between;
  }

  .addTocart_content {
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid #cab7b787;
    width: 100%;
    z-index: 9999;

    .body_content {
      display: flex;
      justify-content: space-between;
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
  .addTocart_img {
    max-width: 3rem;
    min-width: 4rem;
    max-height: 5rem;
    min-height: 6rem;
    flex: 20%;
    align-self: center;
    a {
      text-decoration: none;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .products {
    width: 80%;
    .product_name {
      display: flex;
      justify-content: space-between;
      h3 {
        font-size: 1.4rem;
        text-overflow: initial;
        width: 100%;
      }
    }
    .product_price {
      display: flex;
      column-gap: 1rem;
    }
    .product_color_size {
      display: flex;
      column-gap: 1rem;
    }
    .quantity-box {
      display: flex;
      justify-content: space-between;
    }
    .totalPrice {
      div {
        font-size: 1.4rem;
      }
    }
  }
  .quantity-box {
    div:nth-of-type(1) {
      display: flex;
    }
  }
  .gray-price-line {
    font-size: 1.2rem;
    color: #8a8b94;
    text-decoration-line: line-through;
  }
  .price-main-cart {
    font-size: 1.2rem;
  }
  /* addtocart footer section start here */
  .addTocart_footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    .Payment {
      display: flex;
      align-items: center;
      justify-content: center;
      --tw-bg-opacity: 1;
      background-color: rgba(244, 244, 245, var(--tw-bg-opacity));
      height: 53px;
      a {
        display: flex;
        align-items: center;
        column-gap: 2rem;
      }
    }
    .basket-total-price {
      background: black;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 17px 20px 19px 24px;
      .total_payment {
        display: flex;
        flex-direction: column;
      }
      .Basket {
        span {
          display: flex;
        }
      }
    }
  }
  /* addtocart footer section end here */

`;
const AddToCart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();
  const closeHandler = () => {
    const addToCart = document.querySelector(".Product_cart");
    addToCart.classList.remove("activeProduct_cart");
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <>
      <Wrapper>
        <div className="main_addtocart_sec">
          <div className="addtocart_bodycontent">
            <div className="addtocart_sec">
              {/* heading close section start here */}
              <div className="heading_close_section">
                <div className="myCart_heading">
                  <span style={{ color: "rgb(0, 0, 0)" }} className="title">
                    My Cart ({totalQuantity})
                  </span>
                </div>
                <div
                  className="close_icon"
                  onClick={closeHandler}
                  style={{ cursor: "pointer" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    color="#000"
                    className="w-8 h-8 p-1 cursor-pointer"
                    style={{ color: "rgb(0, 0, 0)" }}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                  </svg>
                </div>
              </div>
              {/* heading close section end here */}
              {/* add to cart body content start here */}
              <div className="cartContent">
                {cart?.map((items) => {
                  return (
                    <>
                      <div className="addTocart_content">
                        <div className="body_content">
                          <div className="addTocart_img">
                            <NavLink to="#">
                              <img src={items.img} alt="addToCart" />
                            </NavLink>
                          </div>

                          {/* product name price and qunatiy start here */}
                          <div className="products">
                            <div className="product_name">
                              <h3>
                                <NavLink to="#">{items.product_name}</NavLink>
                              </h3>
                              <div
                                className="trash"
                                style={{ cursor: "pointer" }}
                                onClick={() => dispatch(removeItem(items.id))}
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  color="#000"
                                  style={{ color: "rgb(0, 0, 0)" }}
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z"></path>
                                </svg>
                              </div>
                            </div>
                            <div className="product_price">
                              <span className="variant-type">Price:</span>
                              <span
                                style={{ color: "rgb(0, 0, 0)" }}
                                class="variant-name"
                              >
                                {items.discount_price2}
                              </span>
                            </div>
                            <div className="product_color_size">
                              <span className="variant-type">Color:</span>
                              <span
                                style={{ color: "rgb(0, 0, 0)" }}
                                className="variant-name"
                              >
                                Light Pink
                              </span>
                              {/* <span className="variant-type">Size:</span>
                                            <span style={{ color: "rgb(0, 0, 0)" }} className="variant-name">S</span> */}
                            </div>
                            <div
                              style={{ color: "rgb(0, 0, 0)" }}
                              className="quantity-box"
                            >
                              <div>
                                <span>Piece</span>
                                <span
                                  className="cursor-pointer"
                                  onClick={() =>
                                    dispatch(decreaseItemQuantity(items.id))
                                  }
                                  style={{ cursor: "pointer" }}
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
                                <span className="font-semibold cursor-pointer">
                                  {items.quantity}
                                </span>
                                <span
                                  className="cursor-pointer"
                                  onClick={() =>
                                    dispatch(increaseItemQuantity(items.id))
                                  }
                                  style={{ cursor: "pointer" }}
                                >
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                                  </svg>
                                </span>
                              </div>
                              <div className="totalPrice">
                                <div className="gray-price-line text-xs">
                                  ₺{" "}
                                  {parseInt(items.discount_price1) *
                                    items.quantity}
                                  .00
                                </div>
                                <div
                                  style={{ color: "rgb(0, 0, 0)" }}
                                  className="price-main-cart"
                                >
                                  ₺{" "}
                                  {parseInt(items.discount_price2) *
                                    items.quantity}
                                  .00
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* product name price and qunatiy end here */}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              {/* add to cart body content end here */}
            </div>
          </div>
          {/* add to cart footer start section */}
          <div className="addTocart_footer">
            <div className="Payment">
              <NavLink to="#">
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
                    <path d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"></path>
                  </svg>
                </span>
                <span class="Payment_step">GO TO PAYMENT STEP</span>
              </NavLink>
            </div>
            <div className="basket-total-price">
              <div className="total_payment">
                <span>Total</span>
                <span>₺ {totalPrice}</span>
              </div>
              <div class="Basket">
                <span class="basket-link tracking-wider">
                  <div style={{ marginTop: "0.2rem" }} onClick={closeHandler}>
                    <NavLink to="/shop-now" style={{ color: "#fff" }}>
                      GO TO BASKET
                    </NavLink>
                  </div>
                  <span>
                    <svg
                      stroke="currentColor"
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
              </div>
            </div>
          </div>
          {/* add to cart footer end section  */}
        </div>
      </Wrapper>
    </>
  );
};

export default AddToCart;
