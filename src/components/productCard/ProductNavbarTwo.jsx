import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ResponsiveWrapper = styled.div`
  .responsive_filter_navbar {
    background: #f4f4f4;
    width: 80%;
    margin: 0 auto;
    border-radius: 1rem;
  }
  .checkbox {
    display: flex;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    border: 1px solid #bdbdbd;
    position: relative;
    cursor: pointer;

    span {
      width: 15px;
      height: 15px;
      top: 2px;
      left: 2px;
    }
    .activeSpan {
      display: flex;
      border-radius: 50%;
      background-color: #000000;
      position: absolute;
    }
  }

  /* css start for check box here */
  .position_Fixed {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: none;
    place-content: center;
    z-index:9999;
  }
  .filter_section {
    background: #fff;
    width: 25rem;
    margin: 0 auto;
    /* padding: 1rem; */
    border-radius: 0.5rem;
    margin-top: 2rem;   
  }

  .sort_close {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 2rem;
      font-weight:600;
      padding-left:1rem;
      padding-right:1rem;
      svg {
        font-size: 1.2rem;
      }
    }
  }
  .mobile-sorting-content {
    span {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      line-height: 4rem;
      align-items: center;
      span {
        font-size: 1.3rem;
      }
    }
  }
 .activeColor{
    padding:0 1rem;
 }
`;

const Flex = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  .responsive_icon {
    flex: 10%;
    border-right: 1px solid #d8d8d8;
  }
  .sort {
    display: flex;
    align-items: center;
    flex: 70%;
    justify-content: center;
    padding-right: 10rem;
    column-gap: 1rem;
    cursor: pointer;
    line-height: 5rem;

    .sort_icon {
      line-height: 5rem;
      display: flex;
      align-items: center;
    }

    .sort_heading {
      font-size: 1.5rem;
    }
    
  }

  @media (max-width: 480px) {
    .sort {
      justify-content: end;
      padding-right: 2rem;
    }
  }
`;
const ProductNavbarTwo = () => {
  const [icon, setIcon] = useState(false);
  const responsiveIconHandler = () => {
    setIcon(!icon);
  };
  useEffect(() => {
    const spanActive = document.querySelectorAll(".checkbox span");
    let previousActiveColor = null;
    spanActive.forEach((item) => {
      item.onclick = function (e) {
        spanActive.forEach((el) => el.classList.remove("activeSpan"));
        const currentSpan = e.currentTarget;
        currentSpan.classList.add("activeSpan");
        const ActiveColor = currentSpan.closest(".activeColor");
        if (ActiveColor) {
          // Check if ActiveColor is not null
          if (previousActiveColor) {
            previousActiveColor.style.background = "";
          }
          ActiveColor.style.background = "rgba(244,244,244)";
          ActiveColor.style.width = "100%";
          previousActiveColor = ActiveColor;
        }
      };
    });

    // Optional: Cleanup function
    return () => {
      spanActive.forEach((item) => {
        item.onclick = null; // Removes the event listeners
      });
    };
  }, []);

  const showFilterHandler = () => {
    const position_Fixed = document.querySelector(".position_Fixed");
    position_Fixed.style.display = 'grid';
  };
  const sortCloseHandler = () => {
    const position_Fixed = document.querySelector(".position_Fixed");
    position_Fixed.style.display = 'none';
  };

  return (
    <>
      <ResponsiveWrapper>
        <div className="responsive_filter_navbar">
          <Flex>
            <div className="responsive_icon" onClick={responsiveIconHandler}>
              {icon ? (
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  color="#484848"
                  style={{ color: "rgb(72, 72, 72)" }}
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style={{
                    color: "rgb(72, 72, 72)",
                    transform: " rotate(90deg)",
                  }}
                  color="#484848"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                </svg>
              )}
            </div>

            <div className="sort" onClick={showFilterHandler}>
              <div className="sort_icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  color="#484848"
                  style={{ color: "#484848" }}
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z"></path>
                </svg>
              </div>
              <div className="sort_heading">
                <span style={{ color: "#484848" }}>Sort</span>
              </div>
            </div>
          </Flex>
        </div>
        {/* filter section start here */}

        <div className="position_Fixed">
          <div className="filter_section">
            <div className="mobile-sorting-content flex flex-col w-full">
              <div className="sort_close">
                <span style={{ color: "rgba(72, 72, 72,1)" }}>Sort</span>
                <span onClick={sortCloseHandler}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    color="#484848"
                    style={{ color: "rgb(72, 72, 72)" }}
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </span>
              </div>

              <div>
                <span className="activeColor">
                  <span>Price rising</span>
                  <div className="checkbox ">
                    <span></span>
                  </div>
                </span>
                <span className="activeColor">
                  <span>Price decreasing</span>
                  <div className="checkbox">
                    <span></span>
                  </div>
                </span>
                <span className="activeColor">
                  <span>Discount rate increased </span>
                  <div className="checkbox">
                    <span></span>
                  </div>
                </span>
                <span className="activeColor">
                  <span>Discount rate decreased</span>
                  <div className="checkbox">
                    <span></span>
                  </div>
                </span>
                <span className="activeColor">
                  <span>First added</span>
                  <div className="checkbox">
                    <span></span>
                  </div>
                </span>
                <span className="activeColor">
                  <span>Last added</span>
                  <div className="checkbox">
                    <span></span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* filter section end here  */}
      </ResponsiveWrapper>
    </>
  );
};

export default ProductNavbarTwo;
