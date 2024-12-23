import React, { useEffect } from "react";
import styled from "styled-components";
import footerLogo from "../../assets/img/footer/image_720.webp";
import Maestro from "../../assets/img/footer/Maestro.svg";
import Mastercard from "../../assets/img/footer/Mastercard.svg";
import Visa from "../../assets/img/footer/Visa.svg";
const Wrapper = styled.div`
  .main_footer {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 5rem;
  }

  li {
    list-style: none;
  }

  .footer_image img {
    width: 18rem;
  }

  .footer_list {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    place-content: space-between;
    padding-top: 5rem;
    /* padding: 0 4%; */
  }

  .footer_list_address .list {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    column-gap: 17rem;
    /* background-color: red; */
  }

  .subList_One .sublist_heading,
  .subList_Two .sublist_heading,
  .subList_Three .sublist_heading {
    font-size: 18px;
    font-weight: 600;
    color: #000;
    padding-bottom: 0.5rem;
  }

  .subList_One li,
  .subList_Two li,
  .subList_Three li {
    font-size: 14px;
    color: rgb(157, 165, 175);
    line-height: 2.5rem;
    font-weight: 600;
    /* background-color: yellow; */
  }

  .footer_address {
    width: 30rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: block;
  }

  .footer_address p {
    text-decoration: underline;
    font-size: 1.5rem;
  }

  .footer_address p:nth-child(2) {
    padding-top: 1rem;
  }

  .second_footer {
    display: grid;
    place-content: space-between;
    grid-template-columns: repeat(2, max-content);
    padding-top: 5rem;
    padding-bottom: 2rem;
  }

  .footer_copyright {
    background: black;
  }

  .footer_copyright p {
    color: #fff;
    font-family: "Poppins", -apple-system, system-ui, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
    padding: 3rem;
    font-size: 1.4rem;
    margin-top: 2rem;
    margin-left: 2rem;
  }

  .active_footerAdress {
    display: none;
  }

  .active_hide_list {
    opacity: 1 !important;
    height: 100% !important;
    visibility: visible !important;
    transition: height 1s ease-in-out;
  }

  @media (min-width: 360px) and (max-width: 540px) {
    .footer_list {
      grid-template-columns: repeat(1, max-content);
    }

    .footer_list_address .list {
      grid-template-columns: repeat(1, max-content);
    }

    .footer_list_address {
      width: 90%;
    }

    .footer_list_address .list {
      grid-template-columns: repeat(1, max-content);
      width: inherit;
    }

    .subList_One,
    .subList_Two,
    .subList_Three {
      width: inherit;
    }

    .subList_One li,
    .subList_Two li,
    .subList_Three li {
      line-height: 3rem;
      width: 100dvw;
    }

    .subList_One .sublist_heading,
    .subList_Two .sublist_heading,
    .subList_Three .sublist_heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      line-height: 3;
      cursor: pointer;
    }

    .footer_copyright p {
      line-height: 3rem;
    }

    .footer_image img {
      width: 20rem;
    }

    .show_hide_list {
      opacity: 0;
      visibility: hidden;
      height: 0;
    }
    .sublist_heading svg {
      display: block;
    }
  }

  @media (min-width: 540px) {
    .footer_list_address .list {
      grid-template-columns: repeat(2, 150px);
    }

    .footer_address {
      width: 21rem;
    }

    .notactive_footeraddress {
      display: none;
    }

    .active_footerAdress {
      display: block;
    }

    .footer_address p {
      font-size: 1.2rem;
    }

    .footer_image img {
      width: 20rem;
    }

    .subList_One li,
    .subList_Two li,
    .subList_Three li {
      line-height: 3rem;
    }

    /* icon css start here */
    .fa-plus {
      display: none;
    }

    /* icon css end here */
    .footer_copyright p {
      line-height: 3rem;
    }
    .sublist_heading svg {
      display: none;
    }
  }

  @media (min-width: 999px) {
    .footer_list_address .list {
      grid-template-columns: repeat(3, max-content);
      column-gap: 10rem;
    }

    .notactive_footeraddress {
      display: block;
    }

    .active_footerAdress {
      display: none;
    }

    .footer_address {
      width: 30rem;
    }

    .footer_address p {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1280px) {
    .footer_list_address .list {
      grid-template-columns: repeat(3, max-content);
      column-gap: 17rem;
    }
  }

  @media (max-width: 360px) {
    .footer_list {
      grid-template-columns: repeat(1, max-content);
    }

    .footer_list_address {
      width: 90%;
    }

    .footer_list_address .list {
      grid-template-columns: repeat(1, max-content);
      width: inherit;
    }

    .subList_One,
    .subList_Two,
    .subList_Three {
      width: inherit;
    }

    .subList_One li,
    .subList_Two li,
    .subList_Three li {
      line-height: 3rem;
      width: 100dvw;
    }

    .subList_One .sublist_heading,
    .subList_Two .sublist_heading,
    .subList_Three .sublist_heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      cursor: pointer;
      line-height: 3;
    }

    .footer_copyright p {
      line-height: 3rem;
    }

    .footer_image img {
      width: 20rem;
    }

    /* show hide list start here */
    .show_hide_list {
      opacity: 0;
      visibility: hidden;
      height: 0;
    }

    /* show hide list end here */

    /* display svg icon of sublist_heading start here */
    .sublist_heading svg {
      display: block;
    }
    /* display svg icon of sublist_heading end here */
  }
`;
const Footer = () => {
  

    // const showlistHandler = (e) => {
    //     const currentEle = e.target;
      
    //     const icon = currentEle.firstElementChild;
    //     const path = icon.firstElementChild;
    //     let currentPath = path.getAttribute("d");  // Use 'let' instead of 'const'
         
    //     const ulList = currentEle.nextElementSibling;
    //     const show_hide_list = document.querySelectorAll(".show_hide_list");
    //     show_hide_list.forEach((item) => item.classList.remove("active_hide_list"));
    //     ulList.classList.add("active_hide_list");
      
    //     if (ulList.classList.contains("active_hide_list")) {
    //       currentPath = "M5 11h14v2H5z";
    //     } else {
    //       currentPath = "M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z";
    //     }
    //     path.setAttribute("d", currentPath);
    //   };
      
    const showlistHandler = (e) => {
        const currentEle = e.target;
        const icon = currentEle.querySelector("svg path"); // Get the path directly inside the clicked element's SVG
        const ulList = currentEle.nextElementSibling;
        console.log(ulList)
        // Find all lists and reset them
        const allLists = document.querySelectorAll(".show_hide_list");
        const allIcons = document.querySelectorAll(".sublist_heading svg path");
      
        allLists.forEach((list, index) => {
          if (list !== ulList) {
            list.classList.remove("active_hide_list");
            allIcons[index].setAttribute("d", "M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"); // Reset other icons
          }
        });
      
        // Toggle the clicked element's list and update its icon
        if (ulList.classList.contains("active_hide_list")) {
          ulList.classList.remove("active_hide_list");
          icon.setAttribute("d", "M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"); // Change to 'plus'
        } else {
          ulList.classList.add("active_hide_list");
          icon.setAttribute("d", "M5 11h14v2H5z"); // Change to 'minus'
        }
      };
      
  return (
    <>
      <Wrapper>
        <div className="main_footer">
          <div className="footer_section">
            <div className="footer_image">
              <img src={footerLogo} alt="footer image" />
            </div>
            <div className="footer_list">
              <div className="footer_list_address">
                <ul className="list">
                  <div className="subList_One">
                    <li className="sublist_heading" onClick={showlistHandler}>
                      Categories
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        color="#1d1d1dff"
                        style={{ color: "rgb(29, 29, 29)" }}
                        height="18"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                      </svg>
                    </li>
                    <ul className="show_hide_list one">
                      <li>KIMONO</li>
                      <li>PARAO</li>
                      <li>BANDANA</li>
                    </ul>
                  </div>
                  <div className="subList_Two">
                    <li className="sublist_heading" onClick={showlistHandler}>
                      My Account
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        color="#1d1d1dff"
                        style={{ color: "rgb(29, 29, 29)" }}
                        height="18"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                      </svg>
                    </li>
                    <ul className="show_hide_list two">
                      <li>My Account Page</li>
                      <li>Register</li>
                    </ul>
                  </div>
                  <div className="subList_Three">
                    <li className="sublist_heading" onClick={showlistHandler}>
                      About Us
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        color="#1d1d1dff"
                        style={{ color: "rgb(29, 29, 29)" }}
                        height="18"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                      </svg>
                    </li>
                    <ul className="show_hide_list three">
                      <li>Contact</li>
                      <li>S.S.S</li>
                      <li>Distance Sales Contract</li>
                      <li>Privacy Policy</li>
                      <li>Return and Cancellation Policy</li>
                    </ul>
                  </div>
                  <div className="footer_address active_footerAdress">
                    <p>
                      SHOWROOM &amp; FACTORY;
                      <br />
                    </p>
                    <p>
                      PUBLIC HEADQUARTED HEAD SHOULD STREET NO:22 &nbsp;
                      <br />
                      KÜÇÜKÇEKMECE / İSTANBUL
                      <br />0 (212) 653 33 26
                    </p>
                  </div>
                </ul>
              </div>
              <div className="footer_address notactive_footeraddress">
                <p>
                  SHOWROOM &amp; FACTORY;
                  <br />
                </p>
                <p>
                  PUBLIC HEADQUARTED HEAD SHOULD STREET NO:22 &nbsp;
                  <br />
                  KÜÇÜKÇEKMECE / İSTANBUL
                  <br />0 (212) 653 33 26
                </p>
              </div>
            </div>
          </div>
          {/* <!-- second footer part start here --> */}
          <div className="second_footer">
            <div className="visible">
              <ul className="flex social-links">
                <li>
                  <a
                    rel="nofollow"
                    target="_blank"
                    href="https://www.instagram.com/brownsarto"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      color="#000000ff"
                      style={{ color: "rgb(0, 0, 0)" }}
                      height="33"
                      width="33"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex">
              <div className="flex items-center payment-cards-main">
                <span className="mr-2 text-primary-color">
                  <img src={Visa} alt="visa" />
                </span>
                <span className="text-primary-color mr-2">
                  <img src={Maestro} alt="maestro" />
                </span>
                <span className="text-primary-color">
                  <img src={Mastercard} alt="mastercard" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* third footer part start here */}
        <div className="footer_copyright">
          <p>
            ©2023 Tüm Hakları Saklıdır - ikas E-Ticaret Altyapısı ile
            Hazırlanmıştır.
          </p>
        </div>
      </Wrapper>
      {/* third footer part end here  */}
    </>
  );
};

export default Footer;
