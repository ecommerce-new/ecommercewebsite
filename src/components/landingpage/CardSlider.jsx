import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../assets/css/styles.css';

import '../../assets/css/cardSlider.css';
import cardOne from "../../assets/img/card/cardOne.png";
import cardTwo from "../../assets/img/card/cardTwo.png";
import cardThree from "../../assets/img/card/cardThree.png";

const CardSlider = () => {
  return (
    <>
      {/* <div className="cardSlider"> */}
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className=" cardSlider mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <div className="cardSlider_one">
                <div className="cardSliderImage">
                  <img src={cardOne} alt="cardImage" />
                </div>
                <a href="#">
                  <div className="cardSlider_button_heading">
                    <span style={{ color: "rgb(0, 0, 0)", fontWeight: "600", fontSize: '28px' }} className="title">ÖZEL TASARIM</span>
                    <span style={{ color: "rgb(255, 255, 255)", fontWeight: "800" }} className="title">KİMONOLAR</span>
                    <span
                      style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(35, 35, 35)', fontWeight: '600', borderRadius: '0px' }}
                      className="link category-image-banner-0">ALIŞVERİŞE BAŞLA</span>
                  </div>
                </a>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="item">
            <div className="cardSlider_two">
              <div className="cardSliderImage">
                <img src={cardTwo} alt="cardImage" />
              </div>
              <a href="#">
                <div className="cardSlider_button_heading">
                  <span style={{ color: 'rgb(5, 5, 5)', fontWeight: '700', fontSize: "28px" }} className="title">ÖZEL DESEN</span>
                  <span style={{ color: 'rgb(255, 255, 255)', fontWeight: '800' }} className="title">PAREOLAR</span>
                  <span
                    style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(35, 35, 35)', fontWeight: '600', borderRadius: '0px' }}
                    className="link category-image-banner-0">ALIŞVERİŞE BAŞLA</span>
                </div>
              </a>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="item">
            <div className="cardSlider_three">
              <div className="cardSliderImage">
                <img src={cardThree} alt="cardImage" />
              </div>
              <a href="#">
                <div className="cardSlider_button_heading">
                  <span style={{ color: 'rgb(0, 0, 0)', fontWeight: '700', fontSize: '28px' }} className="title">KÜÇÜK AMA ŞIK</span>
                  <span style={{ color: 'rgb(255, 255, 255)', fontWeight: '800' }} className="title">BANDANALAR</span>
                  <span
                    style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(35, 35, 35)', fontWeight: '600', borderRadius: '0px' }}
                    className="link category-image-banner-0">ALIŞVERİŞE BAŞLA</span>
                </div>
              </a>
            </div>
          </div>
          </SwiperSlide>

        </Swiper>
      {/* </div> */}
    </>
  )
}

export default CardSlider;