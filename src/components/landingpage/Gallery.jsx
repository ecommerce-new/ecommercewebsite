import React from 'react';
import galleryOne from "../../assets/img/gallery/2.webp";
import galleryTwo from "../../assets/img/gallery/3.webp";
import galleryThree from "../../assets/img/gallery/4.webp";
import galleryFour from "../../assets/img/gallery/5.webp";
import styled from 'styled-components';
const Gallery = () => {
    const Wrapped = styled.div`
        
/* html,
body {
    font-size: 62.5%;
} */
.gallery{
  width: 90%;
  margin: 0 auto;
  padding-top:3.5rem;
}
.second_gallery {
    display: flex;
    justify-content: center;
    column-gap: 1rem;
    row-gap: 1rem;
}

.galler_one_image {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
}
.gallery_two_image{
    width: 100%;
}
.image_one,
.image_two,
.image_three {
    overflow: hidden;
}
.image_one{
    height: 32rem;
    width: inherit;
}
.image_one img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    transform: scale(1);
}

.image_one:hover img,
.image_three:hover img {
    transform: scale(1.1);
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
}


/* image_two_one start here */
.image_two {
    display: flex;
    column-gap: 1rem;
    height: 33rem;
    width: 100%;
}

.image_two img {
    /* width: 24rem; */
    width: 100%;
    height: 100%;
    transform: scale(1);
}
.image_two_one,
.image_two_two {
    overflow: hidden;
}

.image_two_one:hover img,
.image_two_two:hover img {
    transform: scale(1.1);
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
}
/* image_two_one end here */
.image_three{
    height: 66rem;
    width: 100%;
}
.image_three img {
    height: 100%;
    overflow: hidden;
    width: 100%;
}

.responsive_gallery {
    display: none;
}


    .gallery_item_one,
    .gallery_item_two,
    .gallery_item_three,
    .gallery_item_four{
        overflow: hidden;

    }
    .gallery_item_one:hover img,
    .gallery_item_two:hover img,
    .gallery_item_three:hover img,
    .gallery_item_four:hover img{
        transform:scale(1.1);
        overflow: hidden;
        transition: transform 0.5s ease-in-out;
    }
@media(max-width:999px) {
    .image_one{
        height: 28rem;
    }
    .image_two{
        height: 27rem;
    }
    .image_three{
        height:56rem;
    }
}

@media(max-width:860px) {
    .image_one{
        height: 26rem;
    }
    .image_two{
        height: 26rem;
    }
    .image_three{
        height:53rem;
    }
}

@media(max-width:780px) {
    .image_one{
        height: 20rem;
    }
    .image_two{
        height: 23rem;
    }
    .image_three{
        height:44rem;
    }
}

@media(min-width:580px) and (max-width:640px) {
    .active_gallery {
        display: none;
    }

    .responsive_gallery {
        display: block;
    }

    .gallery_image {
        display: grid;
        grid-template-columns: repeat(2, max-content);
        place-content: center;
        gap: 1rem;
    }

    .gallery_image img {
        /* width: 30dvw; */
        height: auto;
        object-fit: cover;
        object-position: center center;
    }
    
}

@media(max-width:640px) {
    .active_gallery {
        display: none;
    }

    .responsive_gallery {
        display: block;
    }

    .gallery_image {
        display: grid;
        grid-template-columns: repeat(2, max-content);
        place-content: center;
        gap: 1rem;
    }

    .gallery_image img {
        width: 44.1dvw;
        height: auto;
    }
 
}

    `
    return (
        <>
            <Wrapped>
                <div class="gallery">
                    <div class="second_gallery active_gallery">
                        <div class="galler_one_image">
                            <div class="image_one">
                                <img src={galleryOne} width="600" alt="gallery Image" />
                            </div>
                            <div class="image_two">
                                <div class="image_two_one">
                                    <img src={galleryTwo} alt="gallery Image" />
                                </div>
                                <div class="image_two_two">
                                    <img src={galleryThree} alt="gallery Image" />
                                </div>
                            </div>
                        </div>
                        <div class="gallery_two_image">
                            <div class="image_three">
                                <img src={galleryFour} width="400" alt="gallery Image" />
                            </div>
                        </div>
                    </div>

                    <div class="responsive_gallery">
                        <div class="gallery_image">
                            <div class="gallery_item_one">
                                <img src={galleryOne} alt="gallery Image" />
                            </div>
                            <div class="gallery_item_two">
                                <img src={galleryTwo} alt="gallery Image" />
                            </div>
                            <div class="gallery_item_three">
                                <img src={galleryThree} alt="gallery Image" />
                            </div>
                            <div class="gallery_item_four">
                                <img src={galleryFour} alt="gallery Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapped>
        </>
    )
}

export default Gallery;