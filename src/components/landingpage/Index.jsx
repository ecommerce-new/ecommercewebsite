import React from 'react';
import BannerSlider from './BannerSlider';
import BrownContent from './BrownContent';
import Card from './Card';
import CardSlider from './CardSlider';
import ProductSlider from './ProductSlider';
import Collections from './Collections';
import Gallery from './Gallery';
import Testimonial from './Testimonial';
import MainFeatures from './MainFeatures';
import SecondProduct from './SecondProduct';
import EmailSection from './EmailSection';
const Index = () => {
  return (
    <>
    {/* Banner slider start here */}
    <BannerSlider/>
    {/* Banner slider end here  */}
    {/* BrownContent start here */}
    <BrownContent/>
    {/* BrownContent end here */}
    {/* card start here */}
    <Card/>
    {/* card end here */}
    {/* cardSlider start here */}
    <CardSlider/>
    {/* cardSlider end here  */}
    {/* productSlider start here */}
    <ProductSlider/>
    {/* productSlider end here  */}
    {/* collection start here */}
    <Collections/>
    {/* collection end here  */}
    {/* gallery start here */}
    <Gallery/>
    {/* gallery end here */}
    {/* testimonial start here */}
    <Testimonial/>
    {/* testimonial end here */}
    {/* MainFeatures start  here */}
    <MainFeatures/>
    {/* MainFeatures end here  */}
    {/* Latest product slider start here */}
      <SecondProduct/>
    {/* Latest product slider end here */}
    {/* email section start here */}
    <EmailSection/>
    {/* email section end here */}
    {/* footer start here */}
   
    {/* footer end here */}
    </>
  )
}

export default Index;