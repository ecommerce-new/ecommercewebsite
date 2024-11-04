import React from 'react';
import styled from 'styled-components';
import bannerImageOne from "../../assets/img/banner/banner_imgOne.webp";
import bannerImageTwo from "../../assets/img/banner/banner_imgTwo.webp";
import '../../assets/css/banner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../assets/css/styles.css';
const Wrapper = styled.div`
     .home-slider-main{
        .slider-content {
            a.slider-0{
                &:hover{
                    background-color: #090909ff !important;
                    color: #eee4daff !important
                }
            }
        }
     }
     
`
const BannerSlider = () => {
  return (
    <>
      <Wrapper>
        <div class="bannerSlider">
          <Swiper

            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >

            <SwiperSlide>
              <div class="slider-content center v-center ">
                <div class="slider_heading_button">
                  <h1 style={{ color: "rgb(238, 228, 218)" }}>PAREO</h1>
                  <p style={{ color: "rgb(238, 228, 218)" }}>BANDANA</p>
                  <div class="slider_button">

                    <a class="slider-0"
                      style={{ color: "rgb(35, 35, 35)", backgroundColor: "rgb(255, 255, 255)", padding: "13px", borderRadius: "6px", fontSize: "15px", fontWeight: "700" }}
                      href="/kimono">ALIŞVERİŞE BAŞLA</a>
                  </div>
                </div>
              </div>
              <div class="banner_image">
                <img src={bannerImageOne}
                  sizes="(max-width: 320px) 320px, (max-width: 450px) 450px, (max-width: 768px) 768px, (max-width: 1440px) 1440px, 2560px "
                  alt="banner slider img" />

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slider-content center v-center">
                <div class="slider_heading_button">
                  <h1 style={{ color: "rgb(238, 228, 218)" }}>KİMONO TUNİK</h1>
                  <p style={{ color: "rgb(238, 228, 218)" }}></p>
                  <div class="slider_button">

                    <a class="slider-0"
                      style={{ color: "rgb(35, 35, 35)", backgroundColor: "rgb(255, 255, 255)", padding: "13px", borderRadius: "6px", fontSize: "15px", fontWeight: "700" }}
                      href="/kimono">ALIŞVERİŞE BAŞLA</a>
                  </div>
                </div>
              </div>
              <div class="banner_image">
                <img src={bannerImageTwo}
                  sizes="(max-width: 320px) 320px, (max-width: 450px) 450px, (max-width: 768px) 768px, (max-width: 1440px) 1440px, 2560px "
                  alt="banner slider img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slider-content center v-center ">
                <div class="slider_heading_button">
                  <h1 style={{ color: "rgb(238, 228, 218)" }}>PAREO</h1>
                  <p style={{ color: "rgb(238, 228, 218)" }}>BANDANA</p>
                  <div class="slider_button">
                    <a class="slider-0  "
                      style={{ color: "rgb(35, 35, 35)", backgroundColor: "rgb(255, 255, 255)", padding: "13px", borderRadius: "6px", fontSize: "15px", fontWeight: "700" }}
                      href="/kimono">ALIŞVERİŞE BAŞLA</a>
                  </div>
                </div>
              </div>
              <div class="banner_image">
                <img src={bannerImageOne}
                  sizes="(max-width: 320px) 320px, (max-width: 450px) 450px, (max-width: 768px) 768px, (max-width: 1440px) 1440px, 2560px "
                  alt="banner slider img" />
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div class="slider-content center v-center ">
                <div class="slider_heading_button">
                  <h1 style={{ color: "rgb(238, 228, 218)" }}>KİMONO TUNİK</h1>
                  <p style={{ color: "rgb(238, 228, 218)" }}></p>
                  <div class="slider_button">
                    <a class="slider-0  "
                      style={{ color: "rgb(35, 35, 35)", backgroundColor: "rgb(255, 255, 255)", padding: "13px", borderRadius: "6px", fontSize: "15px", fontWeight: "700" }}
                      href="/kimono">ALIŞVERİŞE BAŞLA</a>
                  </div>
                </div>
              </div>
              <div class="banner_image">
                <img src={bannerImageTwo}
                  sizes="(max-width: 320px) 320px, (max-width: 450px) 450px, (max-width: 768px) 768px, (max-width: 1440px) 1440px, 2560px "
                  alt="banner slider img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slider-content center v-center ">
                <div class="slider_heading_button">
                  <h1 style={{ color: "rgb(238, 228, 218)" }}>PAREO</h1>
                  <p style={{ color: "rgb(238, 228, 218)" }}>BANDANA</p>
                  <div class="slider_button">
                    <a class="slider-0  "
                      style={{ color: "rgb(35, 35, 35)", backgroundColor: " rgb(255, 255, 255)", padding: " 13px", borderRadius: "6px", fontSize: "15px", fontWeight: "700" }}
                      href="/kimono">ALIŞVERİŞE BAŞLA</a>
                  </div>
                </div>
              </div>
              <div class="banner_image">
                <img src={bannerImageOne}
                  sizes="(max-width: 320px) 320px, (max-width: 450px) 450px, (max-width: 768px) 768px, (max-width: 1440px) 1440px, 2560px "
                  alt="banner slider img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slider-content center v-center ">
                <div class="slider_heading_button">
                  <h1 style={{ color: "rgb(238, 228, 218)" }}>KİMONO TUNİK</h1>
                  <p style={{ color: "rgb(238, 228, 218)" }}></p>
                  <div class="slider_button">
                    <a class="slider-0  "
                      style={{ color: "rgb(35, 35, 35)", backgroundColor: "rgb(255, 255, 255)", padding: "13px", borderRadius: "6px", fontSize: "15px", fontWeight: "700" }}
                      href="/kimono">ALIŞVERİŞE BAŞLA</a>
                  </div>
                </div>
              </div>
              <div class="banner_image">
                <img src={bannerImageTwo}
                  sizes="(max-width: 320px) 320px, (max-width: 450px) 450px, (max-width: 768px) 768px, (max-width: 1440px) 1440px, 2560px "
                  alt="banner slider img" />
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </Wrapper>
    </>
  )
}

export default BannerSlider;


