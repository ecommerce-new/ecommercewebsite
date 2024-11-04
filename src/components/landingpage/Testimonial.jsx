import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../assets/css/styles.css";

const Wrapper = styled.div`
.swiper{
    height: 100%;
}
  .swiper-slide {
    background-color: transparent;
  }
  .main_testimonial {
    background-color: #f5f5f5;
    width: 100%;
    margin: 2rem 0;
  }
  .testimonial {
    width: 100%;
    height: 100%;
  }
  .testimonial-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 4rem 0;
  }
  .testimonial_para_heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .testimonial_para {
    width: 74%;
    margin: 0 auto;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    font-weight: 600;
    font-size: 1.7rem;
    line-height: 2.5rem;
    font-family: 'Poppins', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  .testimonial_writter {
    font-style: italic;
    font-size:1.65rem;
  }
`;

const Testimonial = () => {
  return (
    <>
      <Wrapper>
        <div className="main_testimonial">
          <div className="testimonial">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="testimonial-slide">
                  <div className="testimonial_one">
                    <span className="star_icon">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <div className="testimonial_para_heading">
                      <span className="testimonial_para">
                        Brown Sarto, kadınlara özel desenli kimono, pareo ve bandana koleksiyonları sunan seçkin bir markadır. Ürünlerimiz, yüksek kaliteli malzemeler ve benzersiz tasarımlarla özenle üretilmektedir. Tarzınıza zarafet ve özgünlük katacak seçeneklerimizle her ortamda şıklığı yakalayabilirsiniz. Moda ve estetiği bir araya getiren Brown Sarto, sizlere unutulmaz bir giyim deneyimi vaat ediyor. Kendinizi her daim özel hissetmeniz için buradayız.
                      </span>
                      <span className="testimonial_writter">BROWN SARTO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-slide">
                  <div className="testimonial_one">
                    <span className="star_icon">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <div className="testimonial_para_heading">
                      <span className="testimonial_para">
                        Brown Sarto, kadınlara özel desenli kimono, pareo ve bandana koleksiyonları sunan seçkin bir markadır. Ürünlerimiz, yüksek kaliteli malzemeler ve benzersiz tasarımlarla özenle üretilmektedir. Tarzınıza zarafet ve özgünlük katacak seçeneklerimizle her ortamda şıklığı yakalayabilirsiniz. Moda ve estetiği bir araya getiren Brown Sarto, sizlere unutulmaz bir giyim deneyimi vaat ediyor. Kendinizi her daim özel hissetmeniz için buradayız.
                      </span>
                      <span className="testimonial_writter">BROWN SARTO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-slide">
                  <div className="testimonial_one">
                    <span className="star_icon">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <div className="testimonial_para_heading">
                      <span className="testimonial_para">
                        Brown Sarto, kadınlara özel desenli kimono, pareo ve bandana koleksiyonları sunan seçkin bir markadır. Ürünlerimiz, yüksek kaliteli malzemeler ve benzersiz tasarımlarla özenle üretilmektedir. Tarzınıza zarafet ve özgünlük katacak seçeneklerimizle her ortamda şıklığı yakalayabilirsiniz. Moda ve estetiği bir araya getiren Brown Sarto, sizlere unutulmaz bir giyim deneyimi vaat ediyor. Kendinizi her daim özel hissetmeniz için buradayız.
                      </span>
                      <span className="testimonial_writter">BROWN SARTO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Testimonial;
