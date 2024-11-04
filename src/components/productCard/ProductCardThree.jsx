import React, { useState } from "react";
import styled from "styled-components";
import allProductData from "../products/AllProducts";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../features/cartSlice";
import { NavLink } from "react-router-dom";
import ProductNavbar from "./ProductNavbar";
const Wrapper = styled.div`
  .productImageCard {
    display: grid;
    place-content: center;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 4rem;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 330px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    @media (min-width: 480px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    @media (min-width: 780px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .card_image {
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0px;
    margin: 0px;
    padding: 0px;
    position: relative;
    span {
      box-sizing: border-box;
      display: block;
      width: initial;
      height: initial;
      background: none;
      opacity: 1;
      border: 0px;
      margin: 0px;
      padding: 100% 0px 0px;
      img {
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        padding: 0px;
        border: medium;
        margin: auto;
        display: block;
        width: 0px;
        height: 0px;
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }
  .details {
    margin-top: 1rem;
  }
  .brand_name {
    h3 {
      font-size: 1.5rem;
    }
  }

  .discount_price_main {
    display: flex;
    align-items: center;
  }
  .discount_percent {
    width: 3.8rem;
    height: 3.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;
    font-size: 1.2rem;
    margin-right: 1rem;
    font-weight: 900;
  }
  .discount_price {
    display: flex;
    flex-direction: column;
    span {
      color: rgb(16, 16, 16);
      line-height: 15px;
      font-weight: 900;
      font-size: 1.6rem;
    }
    span:nth-of-type(1) {
      text-decoration: line-through;
      color: rgb(170, 170, 170);
      font-size: 1.6rem;
      font-weight: 400 !important;
    }
  }

  .addCart_btn {
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
  }
  .hoverAdd_Cart:hover > .addCart_btn {
    opacity: 1;
    visibility: visible;
    transform: translateY(-55px);
    transition: transform 0.3s ease-in-out;
  }
  @media (min-width: 480px) {
    .product-name {
      font-size: 12px !important;
    }
  }
  @media (min-width: 1200px) {
    .product-name {
      font-size: 14px !important;
    }
  }
`;

const Button = styled.button`
  border: 1px solid #000;
  background-color: #fff;
  color: #232323;
  width: 100%;
  font-size: 14px;
  letter-spacing: 0.05em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  height: 44px;
  transition: all 0.3s;
  cursor: pointer;
`;
const ProductCardThree = () => {
  const { ProductThree } = useSelector((state) => state.allCart.item);
  const dispatch = useDispatch();
  // console.log("ProductThree===>",ProductThree)
  return (
    <>
      <ProductNavbar />
      <Wrapper>
        <div className="productImageCard" style={{ marginTop: "5rem" }}>
          {ProductThree.map((items) => {
            return (
              <>
                <div
                  className="main_card_section"
                  style={{ display: "grid", placeContent: "center" }}
                  key={items.id}
                  onClick={() => dispatch(addTocart(items))}
                >
                  <div className="card_section">
                    <div className="hoverAdd_Cart">
                      <div className="card_image">
                        <span>
                          <img src={items.img} alt="card" />
                        </span>
                      </div>

                      {/* button start here */}
                      <div className="addCart_btn">
                        <NavLink
                          to={`/product/productcardthree/${items.product_name}/${items.id}`}
                        >
                          <Button>ADD CART</Button>
                        </NavLink>
                      </div>
                      {/* button end here  */}
                    </div>

                    <div className="card_details">
                      <div className="details">
                        <div className="brand_name">
                          <h3
                            class="brand-name"
                            style={{
                              color: "rgb(16, 16, 16)",
                              textTransform: "none",
                              textAlign: "unset",
                              fontWeight: "700",
                            }}
                          >
                            {items.brand_name}
                          </h3>
                          <h2
                            class="product-name"
                            style={{
                              color: "rgb(16, 16, 16)",
                              textAlign: "unset",
                              fontSize: "14px",
                              fontWeight: "400",
                              margin: "0.5rem 0",
                            }}
                          >
                            {items.product_name}
                          </h2>
                        </div>
                        <div className="discount_price_main">
                          <div className="discount_percent ">
                            {items.discount_per}
                          </div>
                          <div className="discount_price">
                            <span>₺ {items.discount_price1}</span>
                            <span
                              className=""
                              style={{ color: "rgb(43, 43, 43)" }}
                            >
                              ₺ {items.discount_price2}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default ProductCardThree;
