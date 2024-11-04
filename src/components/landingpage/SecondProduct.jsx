import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageOne from "../../assets/img/productImageTwo/1.webp";
import ImageTwo from "../../assets/img/productImageTwo/2.webp";
import ImageThree from "../../assets/img/productImageTwo/3.webp";
import ImageFour from "../../assets/img/productImageTwo/4.webp";
import ImageFive from "../../assets/img/productImageTwo/5.webp";
import ImageSix from "../../assets/img/productImageTwo/6.webp";
import ImageSeven from "../../assets/img/productImageTwo/7.webp";
import ImageEight from "../../assets/img/productImageTwo/8.webp";
import ImageNine from "../../assets/img/productImageTwo/9.webp";
import ImageTen from "../../assets/img/productImageTwo/10.webp";
import ImageEleven from "../../assets/img/productImageTwo/11.webp";
import ImageTwelve from "../../assets/img/productImageTwo/12.webp";
import ImageThirdTeen from "../../assets/img/productImageTwo/13.webp";
import ImageFourTeen from "../../assets/img/productImageTwo/14.webp";
import ImageFiveTeen from "../../assets/img/productImageTwo/15.webp";
import ImageSixTeen from "../../assets/img/productImageTwo/16.webp";
import ImageSevenTeen from "../../assets/img/productImageTwo/17.webp";
import ImageEightTeen from "../../assets/img/productImageTwo/18.webp";
import ImageNineTeen from "../../assets/img/productImageTwo/19.webp";
import ImageTwenty from "../../assets/img/productImageTwo/20.webp";
import styled from 'styled-components';

const Wrapper = styled.div`
    
    .second_product_main{
        background:#f5f5f5;
        /* background:red; */
        height:max-content;
        padding:3rem;
        margin-top:5rem;
     }
     .second_product_heading{
        width: 90%;
        margin: 0 auto;
     }
     .second_product_heading h2{
        font-size:4rem;
        padding-bottom:3rem;
     }
      h2 {
        width: 10rem;
        white-space: nowrap;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 15px;
      }
      
      .productTwo_heading_image h3 {
        color: rgb(0, 0, 0);
        text-align: unset;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 24rem;
        overflow: hidden;
        padding:0.5rem 0;
      }
      .productTwo_SliderImage {
        width: 90%;
        margin: 0 auto;
        cursor: pointer;
      }
      .productTwo_Image {
        display: grid;
        place-content: center;
        height: 29rem;
        background: #fff;
        width: 100%;
        position:relative;
      }
      .productTwo_Image > img {
        width: 80%;
        height:100%;
        margin: 0 auto;
        object-fit: fill;
        position: absolute;
        inset: 0;
      }
      .shortImage > img{
        height: auto;
        position:absolute;
        inset-inline:0;
        inset-block: 50%;
        transform:translate(0,-50%);
      }
      .productTwo_heading_image {
        margin-left: 1.2rem;
        padding-top:1rem;
      }
      .discountTwo-price-main {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }
      .discountTwo-price {
        display: flex;
        flex-direction: column;
      }
      .discountTwo-price > span {
        font-family: "Poppins", sans-serif;
        font-size: 0.9rem;
        color: #aaa;
        text-decoration: line-through;
      }
      .discountTwo-price > span:nth-child(2) {
        font-weight: 900;
        text-decoration: none;
      }
      .discountTwo-percent {
        background: black;
        color: #fff;
        font-size: 11px;
        font-weight: 900;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Poppins", sans-serif;
      }

      /* arrow start here */
      .nextTwo_arrow,
      .prevTwo_arrow {
        border: 2px solid black;
        width: 40px;
        height: 40px;
        display: grid;
        place-content: center;
        opacity: 0;
        margin-top: 10px;
        transition: all 0.5s ease-in-out;
      }
      .slick-slider:hover .nextTwo_arrow,
       .slick-slider:hover .prevTwo_arrow{
        opacity: 1;
         margin-top:0; 
       }
      .nextTwo_arrow {
        position: absolute;
        right: 0;
        top: 45%;
        transform: translateY(-100%);
        z-index: 999;
      }
      .prevTwo_arrow {
        position: absolute;
        left: 0;
        top: 45%;
        transform: translateY(-100%);
        z-index: 999;
      }
     
      /* arrow end here */

      /* product start here */
    
      .slick-slide{
        div{
        margin:0 10px;
      }
      } 
      .slick-list>.slick-track{
        margin:0 -10px;
      }
 .next_arrow,
 .prev_arrow{
    cursor: pointer;
 }
      /* product end here */
    
      @media(min-width:330px) and (max-width:800px){
        .productTwo_heading_image h3 {
          width:18rem;
        }
      }
`

const PrevArrow = ({ onClick }) => (
    <span className="prev_arrow" onClick={onClick}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ color: 'rgb(0, 0, 0)', marginLeft: '7px' }} height="15" width="15" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
        </svg>
    </span>
);

const NextArrow = ({ onClick }) => (
    <span className="next_arrow" onClick={onClick}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ color: 'rgb(0, 0, 0)', marginLeft: '2px' }} className="product-slider-arrow-right" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
        </svg>
    </span>
);

const SecondProduct = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    nextArrow: false,
                    prevArrow: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    nextArrow: false,
                    prevArrow: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                },
            },
        ],
    };

    return (
        <>
            <Wrapper>
                <div className="second_product_main">
                    <div className="second_product_heading">
                        <h2 className="" style={{ color: "#000058", fontWeight: "900" }}>En Yeniler</h2>
                    </div>
                    <div className="productTwo_SliderImage">
                        <Slider {...settings}>
                            <div className="productTwo">
                                <div className="productTwo_Image shortImage">
                                    <img
                                        src={ImageOne}
                                        width="200"
                                        alt="product Image"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>MAVİ ZEBRA DETAY PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageTwo} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>BORDO KAPLAN DETAY PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageThree} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>PEMBE HAKİ YAPRAK DETAY PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageFour} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>ORANJ KADIN FİGÜR PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageFive} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>MAVİ ZEBRA DETAY PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="productTwo">
                                <div className="productTwo_Image shortImage">
                                    <img
                                        src={ImageSix}
                                        width="200"
                                        alt=""
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>SİYAH DAMA DESEN PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageSeven} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>BEJ LEOPAR DESEN PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageEight} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>TURUNCU BEJ KLASİK DESEN PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageNine} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>MAVİ KAHVE TROPİKAL DESEN PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageTen} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>MAVİ KAHVE DETAY PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image shortImage">
                                    <img
                                        src={ImageEleven}
                                        width="200"
                                        alt=""
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>HAKİ LEOPAR DESEN PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageTwelve} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>PEMBE TABLO DESEN PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageThirdTeen} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>PEMBE KARIŞIK DESEN PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageFourTeen} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>BEJ DÜZ PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageFiveTeen} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>LACİVERT DÜZ PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image shortImage">
                                    <img
                                        src={ImageSixTeen}
                                        width="200"
                                        alt=""
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>SİYAH DÜZ PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageSevenTeen} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>SİYAH ZEBRA DETAY PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageEightTeen} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>DEGRADE ÇİÇEK DETAY PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageNineTeen} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>YEŞİL ÇİÇEK DETAY PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="productTwo">
                                <div className="productTwo_Image">
                                    <img src={ImageTwenty} width="200" alt="" />
                                </div>
                                <div className="productTwo_heading_image">
                                    <h2>BROWN SARTO</h2>
                                    <h3>DİKİŞ DESEN GRİ PAREO+BANDANA</h3>
                                    <div className="discountTwo-price-main flex flex-row">
                                        <div className="discountTwo-percent">%57</div>
                                        <div className="flex discountTwo-price flex-col">
                                            <span>₺ 1,750.00</span>
                                            <span className="" style={{ color: "rgb(43, 43, 43)" }}>₺ 748.98</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default SecondProduct;