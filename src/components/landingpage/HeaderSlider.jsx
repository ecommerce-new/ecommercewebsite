import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../assets/css/styles.css";
import { Autoplay } from 'swiper/modules';
import styled from "styled-components";
const Wrapper = styled.div`
    .swiper{
        height: 4rem;
    }
`
const HeaderSlider = () => {
    return (
        <>
            <Wrapper>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <p>SEPETTE EK %10 İNDİRİM</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <p>TÜM SİPARİŞLERDE KARGO ÜCRETSİZ</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <p>Yeni sezon ürünler</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <p>SEPETTE EK %10 İNDİRİM</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <p>TÜM SİPARİŞLERDE KARGO ÜCRETSİZ</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Wrapper>
        </>
    )
}

export default HeaderSlider