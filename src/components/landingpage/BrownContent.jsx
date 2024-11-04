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
                        <span>&nbsp; &nbsp; En Şık Tasarımlar &nbsp;İle &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Yaz &nbsp;Havasını <br/> Hemen
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Yakalayın!..</span>
                    </h2>
                </div>
            </div>
        </>
    )
};

export default BrownContent;