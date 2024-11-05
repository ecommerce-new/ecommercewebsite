import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageOne from '../../assets/img/productImage/ImageOne.webp';
import ImageTwo from '../../assets/img/productImage/ImageTwo.webp';
import ImageThree from '../../assets/img/productImage/ImageThree.webp';
import ImageFour from '../../assets/img/productImage/ImageFour.webp';
import ImageFive from '../../assets/img/productImage/ImageFive.webp';
import ImageSix from '../../assets/img/productImage/ImageSix.webp';
import ImageSeven from '../../assets/img/productImage/ImageSeven.webp';
import ImageEight from '../../assets/img/productImage/ImageEight.webp';
import ImageNine from '../../assets/img/productImage/ImageNine.webp';
import ImageTen from '../../assets/img/productImage/ImageTen.webp';
import ImageEleven from '../../assets/img/productImage/ImageEleven.webp';
import ImageTwelve from '../../assets/img/productImage/ImageTwelve.webp';
import ImageThirdTeen from '../../assets/img/productImage/ImageThirdTeen.webp';
import ImageFourTeen from '../../assets/img/productImage/ImageFourTeen.webp';
import ImageFiveTeen from '../../assets/img/productImage/ImageFiveTeen.webp';
import ImageSixTeen from '../../assets/img/productImage/ImageSixteen.webp';
import ImageSevenTeen from '../../assets/img/productImage/ImageSevenTeen.webp';
import ImageEightTeen from '../../assets/img/productImage/ImageEightTeen.webp';
import ImageNineTeen from '../../assets/img/productImage/ImageNineTeen.webp';
import ImageTwenty from '../../assets/img/productImage/ImageTwenty.webp';
import '../../assets/css/productSliderOne.css'

const PrevArrow = ({ onClick }) => (
  <span className="prev_arrow" onClick={onClick}  >
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ color: 'rgb(0, 0, 0)', marginLeft: '7px' }} height="15" width="15" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
    </svg>
  </span>
);

const NextArrow = ({ onClick }) => (
  <span className="next_arrow" onClick={onClick} >
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ color: 'rgb(0, 0, 0)', marginLeft: '2px' }} className="product-slider-arrow-right" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
    </svg>
  </span>
);

const ProductSlider = () => {
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
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: false,
          prevArrow: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: false,
          prevArrow: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        }
      }
    ]
  };

 return(
  <>
  <div className="productOne">
    <div className="productOne_heading">
      <h2>Products of the Week</h2>
    </div>
    
    <div className="product_SliderImage">
    <Slider {...settings}>
      <div className="product">
        <div className="product_Image">
          <img src={ImageOne} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>MAVİ ZEBRA DETAY PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageTwo} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>BORDO KAPLAN DETAY PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageThree} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>PEMBE HAKİ YAPRAK DETAY PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageFour} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>ORANJ KADIN FİGÜR PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>

        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageFive} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>MAVİ ZEBRA DETAY PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product">
        <div className="product_Image">
          <img src={ImageSix} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>SİYAH DAMA DESEN PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageSeven} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>BEJ LEOPAR DESEN PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageEight} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>TURUNCU BEJ KLASİK DESEN PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageNine} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>MAVİ KAHVE TROPİKAL DESEN PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageTen} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>MAVİ KAHVE DETAY PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageEleven} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>HAKİ LEOPAR DESEN PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageTwelve} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>PEMBE TABLO DESEN PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageThirdTeen} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>PEMBE KARIŞIK DESEN PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageFourTeen} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>BEJ DÜZ PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageFiveTeen} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>LACİVERT DÜZ PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageSixTeen} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>SİYAH DÜZ PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageSevenTeen} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>SİYAH ZEBRA DETAY PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageEightTeen} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>DEGRADE ÇİÇEK DETAY PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageNineTeen} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>YEŞİL ÇİÇEK DETAY PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_Image">
          <img src={ImageTwenty} width="200" alt=""/>
        </div>
        <div className="product_heading_image">
          <h2>BROWN SARTO</h2>
          <h3>DİKİŞ DESEN GRİ PAREO+BANDANA</h3>
          <div className="discount-price-main flex flex-row">
            <div className="discount-percent ">%57</div>
            <div className="flex discount-price flex-col">
              <span>₺ 1,750.00</span>
              <span className="" style={{color: "rgb(43, 43, 43)"}}>₺ 748.98</span>
            </div>
          </div>
        </div>
      </div>
      </Slider>
    </div>
    
  </div>
</>
 )
}

export default ProductSlider;