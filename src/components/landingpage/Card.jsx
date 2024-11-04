import React from 'react';
import cardOne from '../../assets/img/card/cardOne.png';
import cardThree from "../../assets/img/card/cardThree.png";
import cardTwo from "../../assets/img/card/cardTwo.png";
import '../../assets/css/card.css';
import { NavLink } from 'react-router-dom';
const Card = () => {
    return (
        <>
            <div className="main_card">
                <div className="card">
                   <NavLink to="/productcard/productcardone">
                    <div className="card_one">
                        <div className="cardImage">
                            <img src={cardOne} alt="cardImage" />
                        </div>
                        <a href="#">
                            <div className="card_button_heading">
                                <span style={{ color: "rgb(0, 0, 0)", fontWeight: "600", fontSize: "28px" }} className="title">ÖZEL TASARIM</span>
                                <span style={{ color: "rgb(255, 255, 255)", fontWeight: "800" }} className="title">KİMONOLAR</span>
                                <span
                                    style={{ color: "rgb(255, 255, 255)", backgroundColor: "rgb(35, 35, 35)", fontWeight: "700", borderRadius: "0px",fontSize:'1.4rem', }}
                                    className="link category-image-banner-0">ALIŞVERİŞE BAŞLA</span>
                            </div>
                        </a>
                    </div>
                    </NavLink >
                    <NavLink to="/productcard/productcardtwo">
                    <div className="card_two">
                        <div className="cardImage">
                            <img src={cardTwo} alt="cardImage" />
                        </div>
                        <a href="#">
                            <div className="card_button_heading">
                                <span style={{ color: "rgb(5, 5, 5)", fontWeight: "700", fontSize: "28px" }} className="title">ÖZEL DESEN</span>
                                <span style={{ color: "rgb(255, 255, 255)", fontWeight: "800" }} className="title">PAREOLAR</span>
                                <span
                                    style={{ color: "rgb(255, 255, 255)", backgroundColor: "rgb(35, 35, 35)", fontWeight: "700", borderRadius: "0px",fontSize:'1.4rem',}}
                                    className="link category-image-banner-0">ALIŞVERİŞE BAŞLA</span>
                            </div>
                        </a>
                    </div>
                    </NavLink>
                    <NavLink  to="/productcard/productcardthree">
                    <div className="card_three">
                        <div className="cardImage">
                            <img src={cardThree} alt="cardImage" />
                        </div>
                        <a href="#">
                            <div className="card_button_heading">
                                <span style={{ color: "rgb(0, 0, 0)", fontWeight: "700", fontSize: "28px" }} className="title">KÜÇÜK AMA ŞIK</span>
                                <span style={{ color: "rgb(255, 255, 255)", fontWeight: '800' }} className="title">BANDANALAR</span>
                                <span
                                    style={{ color: "rgb(255, 255, 255)", backgroundColor: "rgb(35, 35, 35)", fontWeight: "700", borderRadius: "0px",fontSize:'1.4rem', }}
                                    className="link category-image-banner-0">ALIŞVERİŞE BAŞLA</span>
                            </div>
                        </a>
                    </div>
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default Card;