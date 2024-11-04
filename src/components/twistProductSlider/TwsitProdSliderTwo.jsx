import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Wrapper = styled.div`
    .twistProdSlider{
        background-color: rgb(255, 0, 0);
        width:100%;
        height: 50%;
        /* slick-slide start here */
        .slick-slide{
         transform: translate(${(props)=>props.trans*-100}%);
         transition:transform 0.5s ease-in-out;
        }
        /* slick-slide end  here */
        div{
            width: 100%;
            height: 50%;
            img{
                width: 100%;
                height: 50%;
            }
        }
    }
`;
const PrevArrow = ({ onClick }) => (
  <span className="prev_arrow" onClick={onClick} style={{left:"-8rem"}}>
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ color: 'rgb(0, 0, 0)', marginLeft: '7px' }} height="15" width="15" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
    </svg>
  </span>
);

const NextArrow = ({ onClick }) => (
  <span className="next_arrow" onClick={onClick} style={{right:"-8rem"}}>
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ color: 'rgb(0, 0, 0)', marginLeft: '2px' }} className="product-slider-arrow-right" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
    </svg>
  </span>
);
function TwsitProdSliderTwo({ selectedImage, images }) {
   var settings = {
      dots: false,
      infinite: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   return (
      <Wrapper trans={selectedImage}>
         <div className="twistProdSlider">
            <Slider {...settings}>
               
               <div>
                  <img src={images.twistProdImgOne} alt="imageOne" />
               </div>
               <div>
                  <img src={images.twistProdImgTwo} alt="imageTwo" />
               </div>
               <div>
                  <img src={images.twistProdImgThree} alt="imageThree" />
               </div>
               <div>
                  <img src={images.twistProdImgFour} alt="imageFour" />
               </div>
               <div>
                  <img src={images.twistProdImgFive} alt="imageFive" />
               </div>
               <div>
                  <img src={images.twistProdImgSix} alt="imageSix" />
               </div>

            </Slider>
         </div>
      </Wrapper>
   );
}

export default TwsitProdSliderTwo;
