import React from 'react';
import ImageOne from "../../assets/img/features/image_1.webp";
import ImageTwo from "../../assets/img/features/image_2.webp";
import ImageThree from "../../assets/img/features/image_3.webp";
import styled from 'styled-components';
const Wrapper = styled.div`
    .second_features{
    display: grid;
    grid-template-columns: repeat(3,300px);
    place-content: center;
    column-gap: 2rem;
    place-items: center;
    margin-top:4rem;
    margin-bottom:3rem;
}
.features_image{
    width: 3.5rem;
    height: 3.5rem;
    margin: 1rem auto;
}
.features_image img{
 width: 100%;
 height: 100%;
}
.features_para span{
    font-size:1.5rem;
}
@media(min-width:330px) and (max-width:640px){
    .second_features{
        grid-template-columns: repeat(1,max-content);
        row-gap: 1rem;
    }
}
`
const MainFeatures = () => {
    return (
        <>
            <Wrapper>
                <div className="main_features">
                    <div className="second_features">
                        <div className="features_one">``
                            <div className="features_image">
                                <img src={ImageOne} alt="features Image" />
                            </div>
                            <div className="features_para">
                                <span style={{color:"#000"}}>256 Bit SSL ile güvende alışveriş</span>
                            </div>
                        </div>
                        <div className="features_one">
                            <div className="features_image">
                                <img src={ImageTwo} alt="features Image" />
                            </div>
                            <div className="features_para">
                                <span style={{color:"#000"}}>TÜM SİPARİŞLERDE KARGO ÜCRETSİZ</span>
                            </div>
                        </div>
                        <div className="features_one">
                            <div className="features_image">
                                <img src={ImageThree} alt="features Image" />
                            </div>
                            <div className="features_para">
                                <span style={{color:"#000"}}>10 iş günü içerisinde iade</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default MainFeatures