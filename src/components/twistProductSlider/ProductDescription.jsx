import React from 'react';
import ReturnImage from "../../assets/img/ProductDescription/returnImage.webp";
import Shipping from "../../assets/img/ProductDescription/shipping_cart.webp";
import { NavLink } from 'react-router-dom';

const ProductDescription = () => {
 console.log("shipping===>",Shipping)
    return (
        <>
            <div className="main_description_section">
                <div className="description_section">
                    <div className="product_heading">
                        <div className="product_name">
                            <NavLink to="#">
                                <h2 style={{color: "rgb(32, 32, 32)", textTransform: "uppercase", fontSize: "16px", fontWeight: "800"}} className="uppercase brand-name">BROWN SARTO</h2>
                            </NavLink>
                            <h1 style={{color:" rgb(32, 32, 32)", fontSize: "18px", fontWeight: "400"}}className="product-name">WİDE LEG JEAN ESKİTMELİ DENIM KADIN</h1>
                        </div>
                        <span className="add-favorite-basket cursor-pointer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z">
                            </path>
                        </svg>
                        </span>
                    </div>
                    {/* product-detail-page-detail-categories */}
                    <div className="product_detail_page_detail_categories">
                        <div className="categories-detail mt-4"><span style={{color: "rgb(108, 117, 125)"}}>Ürün Kodu:</span><span style={{color: "rgb(108, 117, 125)"}}>brownsarto033</span>
                        </div>
                    </div>
                    {/* product price start here */}
                    <div className="product-detail-page-detail-price-box flex items-center mt-4 mb-4">
                        <div className="price-main relative" style={{fontWeight: "800", fontSize: "18px"}}>
                            <div className="discount-price-main flex flex-row">
                                <div style={{backgroundColor: "rgb(0, 0, 0)", color: "rgb(255, 255, 255)", fontWeight: "900", fontSize: "12px", width: "38px",height: "38px",borderRadius:"0px"}} className="discount-percent">%23
                                </div>
                                <div className="flex discount-price flex-col">
                                    <span style={{fontSize: "16px", color: "rgb(170, 170, 170)"}}>₺ 1,290.00</span>
                                    <span style={{color: "rgb(31, 31, 31)"}}>₺ 990.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* product price end here */}
                    {/* product size start here */}
                    <div className="product_size_section">
                        <div className="varient_type">
                            Beden Ölçü
                        </div>
                        <div className="product_detail_page_variants">
                            <div className="product_size">
                                <span className="variant_size">34</span>
                            </div>
                            <div className="product_size">
                                <span className="variant_size">36</span>
                            </div>
                            <div className="product_size">
                                <span className="variant_size">38</span>
                            </div>
                            <div className="product_size">
                                <span className="variant_size">40</span>
                            </div>
                        </div>
                    </div>
                    {/* product size end here */}
                    {/* product add to cart star t here */}
                    <div className="product_addTocart">
                        <button id="button">SEPETE EKLE</button>
                    </div>
                    {/* product add to cart end here */}

                    {/* shipping and return change start here */}
                    <div className="shipping_return_change">
                        <div className="shipping">
                            <div className="shippingImage">
                                <img src={Shipping} alt="Shipping" />
                            </div>
                            <div className="shippingText">
                                <span>Free shipping over 150 TL</span>
                            </div>
                        </div>
                        <div className="return_change">
                            <div className="returnImage">
                                <img src={ReturnImage} alt="ReturnImage" />
                            </div>
                            <div className="returnText">
                                <span>Return change within 10 days</span>
                            </div>
                        </div>
                    </div>
                    {/* shippign and return change end here */}
                    {/* product Description start here */}
                    <div className="product_description">
                        <div className="product_todo">
                            <span style={{color:"#000",fontSize:"14px"}}class="title">Product Description</span>
                            <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#000" style={{color: "rgb(0, 0, 0)"}} height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 11h14v2H5z"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="tab_content">
                            <p>BROWN SARTO JEAN DENIM MODEL</p>
                            <br />
                            <p>WIDE LEG JEAN OLD DENIM WOMAN</p>
                            <p>LIDE LEG JEAN DENIM WITH ESKİTME PATTERN</p>
                            <p>PRODUCT SIZE: 115CM</p>
                            <p>MANKEN SIZE: 175CM</p>
                        </div>
                    </div>
                    {/* product Description end here */}
                </div>
            </div>
        </>
    )
}

export default ProductDescription