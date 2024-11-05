import React from 'react';
import styled from 'styled-components';
import collectionImage from "../../assets/img/belowContent/1.webp";
const Wrapper = styled.div`
    .main_below_content{
    padding-top:2.5rem;
  }
  .below_content {
    background-image: linear-gradient(to top, #fff 20%, #ffe8e8ff 20%);
    width: 100%;
    height: 80%;
    position: relative;
   
  }

  .below_content_image {
    width: 90%;
    margin: 0 auto;
    padding-top: 16rem;

  }

  .below_image {
    background: url(${(props)=>props.collectionImage});
    
    background-size: cover;
    width: 100%;
    height: 70rem;
    background-position: 0 80%;
    background-repeat: no-repeat;
    position: relative;
  }

  .below_heading {
    width: 90%;
    margin: 0 auto;
    position: absolute;
    inset: 0;
    top: 0px;
    top: 5rem;
  }

  .below_heading h2 {
    color: #72472cff;
    font-weight: 900;
    font-size: 4rem;
  }

  .below_image_heading {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -48%);
    /* line-height: 2rem; */
  }

  .below_image_heading h3 {
    color: #ffffffff;
    font-weight: 900;
    font-size: 5rem;
    white-space: nowrap;
  }

  .below_image_button {
    width: 100%;
    display: grid;
    place-content: center;
    place-items: center;
    padding-top: 1.5rem;
  }

  .below_image_button a {
    padding: 11px;
    border-radius: 0;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    font-size: 1.8rem;
    background: #fff;
  }

  @media(min-width:340px) {
    .below_image {
      background-position: center center;
      height: 30rem;
    }

    .below_content_image {
      padding-top: 12rem;
    }

    .below_heading h2 {
      font-size: 2rem;
    }

    .below_image_heading h3 {
      font-size: 1.8rem;
    }

    .below_image_button a {
      font-size: 1.5rem;
    }
   
  }

  @media(min-width:475px) {
    .below_image {
      background-position: center center;
      height: 50rem;
    }

  }

  @media(min-width:640px) {
    .below_image {
      background-position: center center;
      height: 55rem;
    }
    .below_heading h2 {
      font-size: 3rem;
    }

    .below_content_image {
      padding-top: 13rem;
    }
    
    .below_image_heading h3 {
      font-size: 3rem;
    }

    .below_image_button a {
      font-size: 1.7rem;
    }
  }

  @media(min-width:768px) {
    .below_image {
      background-position: center center;
      height: 60rem;
    }
    .below_heading h2 {
      font-size: 3.5rem;
    }
    .below_content_image {
      padding-top: 14rem;
    }
    .below_image_heading h3 {
      font-size: 4rem;
    }

    .below_image_button a {
      font-size: 1.7rem;
    }
  }

  @media(min-width:1024px) {
    .below_image {
      background-position: 0 50%;
      height: 65rem;

    }
    .below_heading h2 {
      font-size: 4rem;
    }
    .below_content_image {
      padding-top: 15rem;
    }
  }

  @media(min-width:1280px) {
    .below_image {
      background-position: 0 50%;
      height: 70rem;
    }

    .below_content_image {
      padding-top: 16rem;
    }

    .below_heading h2 {
      font-size: 4rem;
    }
    .below_image_heading h3 {
      font-size: 5rem;
    }
  }

  @media(min-width:1536px) {
    .below_image {
      height: 80rem;
    }
  }

`

const Collections = () => {
    return (
        <>
            <Wrapper  collectionImage={collectionImage}>
                <div className="main_below_content">
                    <div className="below_content">
                        <div className="below_heading">
                            <h2>COLLECTIONS</h2>
                        </div>
                        <div className="below_content_image">
                            <div className="below_image">
                                <div className="below_image_heading">
                                    <h3 style={{color:'#ffffffff',fontWeight:'900',width:'100%'}}>DISCOVER COLLECTIONS</h3>
                                    <div className="below_image_button">
                                        <a className="" style={{padding:'11px',borderRadius:0,fontWeight:'700'}} href="/kimono">SHOPPING START</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Collections;