import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { updateActiveButton } from "../features/cartSlice";

const HeadingOfLoginWrapper = styled.div`
  .active {
    a {
      margin-right: 50px;
      color: #000;
      font-size: 25px;
      font-weight: 800 !important;
    }
  }
`;

const HeadingOfLogin = () => {
  const dispatch = useDispatch();
  const { activeButton} = useSelector((state) => state.allCart);

  const loginFormHandler = () => {
    dispatch(updateActiveButton("login"));
  };

  const signFormHandler = () => {
    dispatch(updateActiveButton("signUp"));
  };

  return (
    <HeadingOfLoginWrapper>
     
        <div className="heading">
          <h1
            className={`login_heading ${
              activeButton === "login" ? "active" : ""
            }`}
            onClick={loginFormHandler}
          >
            <NavLink to="/login">Login</NavLink>
          </h1>

          <h1
            className={`signup_heading ${
              activeButton === "signUp" ? "active" : ""
            }`}
            onClick={signFormHandler}
          >
            <NavLink to="/sign-up">Become a member</NavLink>
          </h1>
        </div>
    </HeadingOfLoginWrapper>
  );
};

export default HeadingOfLogin;
