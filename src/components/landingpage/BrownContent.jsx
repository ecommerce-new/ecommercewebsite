import React from 'react';
import brownImage from "../../assets/img/content/brownImage.webp";
import '../../assets/css/brownContent.css';
const BrownContent = () => {
    return (
        <>
            <div class="brown_content">
                <div class="content_img">
                    <img src={brownImage} alt="content image" />
                </div>
                <div class="content_heading">
                    <h2 class="heading">
                        <span>&nbsp; &nbsp; Catch Summer Air With The Stylishest&nbsp; <br/>
                            &nbsp; &nbsp;  Designs!...</span>
                    </h2>
                </div>
            </div>
        </>
    )
};

export default BrownContent;