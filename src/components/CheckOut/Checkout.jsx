import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CheckOut = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const CartDiv = styled.div`
  /* border-bottom: 1px solid #e5e4e9; */
`;
const CheckOut_Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
`;
const Product_Name_Img = styled.div`
  display: flex;
  column-gap: 2rem;
`;
const Product_Main_Price = styled.div`
  display: flex;
  flex-direction: column;
  span:nth-child(1) {
    font-size: 1.4rem;
    color: #8a8b94;
    text-decoration: line-through;
  }
  span:last-child {
    font-size: 1.4rem;
    color: #272727;
  }
`;
const ProductImage = styled.div`
  width: 6.4rem;
  height: 7rem;
  position: relative;
  &::after {
    content: attr(data-quantity);
    position: absolute;
    top: -1rem;
    right: -1.1rem;
    background: #000;
    color: #fff;
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 50%;
    font-size: 1.4rem;
    text-align: center;
    line-height: 2.3rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const ProductName = styled.div`
  span {
    font-size: 1.5rem;
    font-weight: 600;
    color: #272727;
    line-height: 20px;
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media (min-width:330px){
      font-size:1.2rem;
    }
  }
`;
const Product_Price_Discount = styled.div`
  border-bottom: 1px solid #e5e4e9;
  padding: 5rem 0;
`;
const All_Product_Price = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: #8a8b94;
    font-size: 2rem;
    font-weight: 400;
    line-height: 3.5rem;
  }
  span:last-child {
    font-weight: 400;
    font-size: 2rem;
    color: #272727;
  }
`;
const Discounted_Price = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: #8a8b94;
    font-size: 2rem;
    font-weight: 400;
    line-height: 3.5rem;
  }
  span:last-child {
    font-weight: 400;
    font-size: 2rem;
    color: #272727;
  }
`;
const Discount_Code = styled.div`
  padding: 3rem 0;
  border-bottom:1px solid #e5e4e9;
 h1 {
    font-size: 2rem;
    font-weight: 400;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .discount_form {
    display: none;
    .discount_input_field {
      margin-top: 2rem;
      /* background:red; */
      display: flex;
      width: 100%;
      height: 5.5rem;
      border-radius: 1rem;
      /* column-gap: 1rem; */
      input {
        flex: 70%;
        border: none;
        outline: none;
        padding-left: 1rem;
        border-radius: 1rem;
        &::placeholder {
          font-size: 1.6rem;
          color: #8a8b94;
          font-weight: 500;
          letter-spacing: 1px;
        }
      }
      .butn {
        flex: 40%;
        border-radius: 1rem;
        cursor: pointer;
        text-align: center;
        color: #fff;
        line-height: 5.5rem;
        font-size: 1.8rem;
        font-weight: 600;
        background: #000;
      }
    }
  }
`;
const TotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top:2rem;
    span{
        font-size: 2.5rem;
        font-weight: 600;
    }
    span:nth-child(2){
        padding-top:4rem;
        font-weight: 500;
        color:#8a8b94;
        font-size:1.8rem;
        span{
            color:#272727;
            cursor:pointer;
            font-weight:bold;
            font-size:2.5rem;
           &:hover{
            text-decoration:underline;
           }
        }
    }
`
const Checkout = () => {
  const { cart, withOutDiscountPrice, totalPrice } = useSelector(
    (state) => state.allCart
  );
//   console.log(
//     "cart==>",
//     cart,
//     "withOutDiscountPrice==>",
//     withOutDiscountPrice,
//     "totalPrice==>",
//     totalPrice
//   );
  return (
    <>
      <CheckOut className="checkout">
        <CartDiv>
          {cart?.map((items) => {
            return (
              <>
                <CheckOut_Product className="checkout_product">
                  <Product_Name_Img>
                    <ProductImage
                      className="product_img"
                      data-quantity={items.quantity}
                    >
                      <img src={items.img} alt="productImage" />
                    </ProductImage>
                    <ProductName className="product_name">
                      <span>{items.product_name}</span>
                    </ProductName>
                  </Product_Name_Img>
                  <Product_Main_Price>
                    <span>₺ {items.discount_price1 * items.quantity}</span>
                    <span>₺ {items.discount_price2 * items.quantity}</span>
                  </Product_Main_Price>
                </CheckOut_Product>
              </>
            );
          })}
        </CartDiv>

        {/* all product price start here */}
        <Product_Price_Discount>
          <All_Product_Price className="all_product_price">
            <span>In- Of- All</span>
            <span>{withOutDiscountPrice}</span>
          </All_Product_Price>
          <Discounted_Price className="discounted_price">
            <span style={{ textTransform: "uppercase" }}>Basket 49%</span>
            <span>{totalPrice - withOutDiscountPrice}</span>
          </Discounted_Price>
        </Product_Price_Discount>
        {/* add discounted price */}
        <Discount_Code>
          <h1>Add discount code</h1>
          {/* discount input field */}
          <div className="discount_form">
            <form action="#">
              <div className="discount_input_field">
                <input type="text" placeholder="İndirim Kodu" value="" />
                <div className="butn">Apply</div>
              </div>
            </form>
          </div>
        </Discount_Code>

        {/* total price start here */}
        <TotalPrice className="totalPrice">
          <span>Total</span>
          <span>
            powered by  <span>ikas</span> 
           
          </span>
          <span>{totalPrice}</span>
        </TotalPrice>
      </CheckOut>
    </>
  );
};

export default Checkout;
