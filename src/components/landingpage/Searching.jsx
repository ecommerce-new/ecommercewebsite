import React, { useState } from "react";
import logo from "../../assets/img/navbar/logo.webp";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addTocart } from "../features/cartSlice";
import CartPop from "../CartPop/CartPop";

const WrapperSearching = styled.div`
  .searching_section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 4rem;
    padding-right: 4rem;
    /* background: green; */
    column-gap: 23rem;
  }
  .logo {
    max-width: 20rem;
    min-width: 10rem;
    /* flex: 20%; */
    img {
      width: 100%;
      height: 100%;
    }
  }
  .searching_input {
    display: flex;
    flex: 80%;
    height: 5rem;
    justify-content: center;
    align-items: center;
    border: 1px solid #b1b1b1;
    input {
      outline: none;
      flex: 70%;
      height: 100%;
      padding-left: 1rem;
      border: none;
    }
    .search_icon {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  @media (max-width: 999px) {
    .logo {
      display: none;
    }
    .searching_section {
      padding-left: 20px;
      padding-right: 20px;
      /* background: green; */
      column-gap: 1rem;
      margin-top: 2rem;
    }
  }

  /* search card css start here */
  .searching_card {
    display: grid;
    grid-template-columns: repeat(5, max-content);
    place-content: center;
    column-gap: 1.5rem;
    margin-top: 4rem;
    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, max-content);
      row-gap: 5rem;
    }
    @media (max-width: 999px) {
      grid-template-columns: repeat(2, max-content);
    }
    @media (max-width: 640px) {
      grid-template-columns: repeat(1, max-content);
    }
  }

  .productImageCard {
    display: grid;
    place-content: center;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 4rem;
    width: 90%;
    margin: 0 auto;
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
    transform: translateY(10px);
    margin-bottom: 2rem;
  }

  /* close searching section start here */
  @media (max-width: 999px) {
    .close_searching {
      background-color: #f5f5f5;
      height: 5rem;
      display: grid;
      place-content: center;
      padding-left: 1rem;
      padding-right: 1rem;
      cursor: pointer;
      &:hover{
        background:#ededed;
      }
    }
  }
  /* close searching sectino end here  */
`;

// button start here
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
//button end here

// Cart pop start here

const Cartpop_div = styled.div`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  @media (min-width: 330px) {
    overflow-y: scroll;
    z-index: 999;
  }
`;
const Searching = ({ setSearching }) => {
  const { searching } = useSelector((state) => state.allCart.item);
  const [cartPop_visible, setCartPop_Visible] = useState(false);
  const [cartPopImg, setCartPopImg] = useState(null);
  // console.log("item==>", searching);
  const dispatch = useDispatch();
  const addCart_butnHandler = (e) => {
    const CurrentId = parseInt(e.target.id);
    const filterImg = searching.find((item) => CurrentId === item.id);
    if (filterImg) {
      console.log(filterImg);
      setCartPopImg(filterImg);
    }
    setCartPop_Visible(true);
  };
  // console.log("CartPopImg==>", cartPop_visible);

  const closeSearchList_Handler = () => {
    setSearching(false);
  };
  return (
    <>
      <WrapperSearching>
        {/* cartPop start here */}
        {cartPop_visible && (
          <Cartpop_div className="CartPop">
            <CartPop
              cartPopImg={cartPopImg}
              setCartPop_Visible={setCartPop_Visible}
            />
          </Cartpop_div>
        )}

        {/* cartPop end here  */}
        <div className="searching_section">
          <div className="logo" style={{ cursor: "pointer" }}>
            <img src={logo} alt="logo" />
          </div>
          {/* searching section */}
          <div className="searching_input">
            <div className="search_icon" style={{ cursor: "pointer" }}>
              <span class="overlay-search-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                </svg>
              </span>
            </div>
            <input type="text" placeholder="What were you looking for?" />
          </div>
          {/* close box */}
          <div className="close_searching" onClick={closeSearchList_Handler}>
            <span
              class="overlay-close-icon cornered"
              style={{ cursor: "pointer" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </span>
          </div>
        </div>

        {/* search card start here */}
        <div className="searching_card">
          {searching?.map((items, index) => {
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
                        <Button onClick={addCart_butnHandler} id={items.id}>
                          ADD CART
                        </Button>
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
                            <span>{items.discount_price1}</span>
                            <span
                              className=""
                              style={{ color: "rgb(43, 43, 43)" }}
                            >
                              {items.discount_price2}
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

        {/* search card end here  */}
      </WrapperSearching>
    </>
  );
};

export default Searching;
