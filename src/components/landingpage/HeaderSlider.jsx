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
                            <p>ADD 10% DISCOUNT IN BASKET</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <p>CARGO FREE IN ALL ORDERS</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <p>New season products</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <p>ADD 10% DISCOUNT IN BASKET</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <p>CARGO FREE IN ALL ORDERS</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Wrapper>
        </>
    )
}

export default HeaderSlider