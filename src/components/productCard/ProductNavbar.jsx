import React, { useEffect } from "react";
import styled from "styled-components";

const ProductSectionName = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  width: 86%;
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 1rem;
`;
const ProductName = styled.div`
  font-size: 3rem;
  color: rgb(35, 35, 35);
  font-weight: 400;
`;
const TotalProduct = styled.div`
  font-size: 1.2rem;
  color: rgba(113, 113, 122, 1);
  margin-top: 1rem;
  font-weight: 400;
`;

const Product_search_navbar = styled.div`
  display: flex;
  /* background: blue; */
  padding: 0 10rem;
  column-gap: 3rem;
`;
const Search = styled.input`
  width: 100%;
  border: 1px solid #f4f4f4 !important;
  padding: 8px 50px 8px 8px;
  font-size: 14px;
  color: #545454;
  outline: 2px solid transparent;
  outline-offset: 2px;
  flex: 30%;
`;
const Flex = styled.div`
  display: flex;
  height: 10rem;
  align-items: center;
  column-gap: 2rem;
  flex: 80%;
  background-color: #f7f6f9;
  width: calc(100% - 16rem);
  margin: 0 16px;
  padding: 0 1rem;
`;
const Product_Navbar = styled.div`
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    line-height: 3rem;
    li {
      color: #232323;
      padding: 10px 15px;
      cursor: pointer;
      font-weight: 600;
      font-size: 15px;
      transition: all 0.3s;
      border-bottom: 2px solid transparent;
      &:hover {
        color: #232323;
        background-color: #f2f2f2;
        border-bottom: 2px solid #232323;
      }
    }
    .active {
    color: #232323;
    background-color: #f2f2f2;
    border-bottom: 2px solid #232323;
  }
  }
`;

const GridTemplate = styled.div`
  display: flex;

  .grid-template-choise-one {
    height: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid #c9c9c9;
    border-right: unset;
    border-radius: 2px 0 0 2px;
    width: 33px;
    padding-left: 6px;

    i {
      font-size: 2rem;
      padding-left: 0.1rem;
      color: #484848;
      margin-top: -0.1rem;
    }
  }
  .grid-template-choise-two {
    border: 1px solid #c9c9c9;
    border-radius: 0 2px 2px 0;
    width: 35px;
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      display: block;
      vertical-align: middle;
    }
  }
`;

const ProductNavbar = () => {

  useEffect(() => {
    const List = document.querySelectorAll(" li"); 
    List.forEach((item) => {
      item.onclick = function (e) {
        List.forEach((el) => el.classList.remove("active")); 
        item.classList.add("active"); 
      };
    });
  }, []);
 
  return (
    <>
    
        <div className="Product_navbar_section">
          <ProductSectionName className="proudct__section_name">
            <div className="product_name">
              <ProductName>KIMONO</ProductName>
            </div>
            <div className="total_product">
              <TotalProduct>24products</TotalProduct>
            </div>
          </ProductSectionName>

          {/* searching and navbar section start here */}
          <Product_search_navbar className="product_search_navbar">
            {/* product search start here */}
            <div className="search">
              <Search type="text" placeholder="What were you looking" />
            </div>
            {/* product search end here  */}
            <Flex>
              <Product_Navbar className="product_navbar">
                <ul id="pro">
                  <li className="active">Price rising</li>
                  <li>Price decreasing</li>
                  <li>Discount rate Increasing</li>
                  <li>Discount rate decreasing</li>
                  <li>First added</li>
                  <li>Last added</li>
                </ul>
              </Product_Navbar>
              <GridTemplate>
                <div class="relative  grid-template-choise-one">
                  <i class="fa-sharp fa-light fa-grid-horizontal"></i>
                </div>
                <div class="flex grid-template-choise-two active">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    color=""
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  <span class="grid-template-two">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      color=""
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </span>
                </div>
              </GridTemplate>
            </Flex>
          </Product_search_navbar>

          {/* searching and navbar section end here */}
        </div>
      
    </>
  );
};

export default ProductNavbar;
