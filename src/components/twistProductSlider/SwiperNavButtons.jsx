import React from 'react';
import styled from 'styled-components';
import { useSwiper } from 'swiper/react';
const Wrapper = styled.div`
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
.swiper-nav-btns{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 680px;

    .swiper-button-prev,
    .swiper-button-next{
     position: unset !important;
     top:unset !important;
     left:10px !important;
     bottom:unset !important;
     width:auto !important;
     right:0 !important;
    
    }

    @media(min-width:330px){
        display:none;
    }
    @media(min-width:1200px){
        display:flex;
    }
}
`
export const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <Wrapper>
            <div className="swiper-nav-btns">
                <div onClick={() => swiper.slidePrev()} className='swiper-button-prev'></div>
                <div onClick={() => swiper.slideNext()} className='swiper-button-next' ></div>
            </div>
        </Wrapper>
    );
};




