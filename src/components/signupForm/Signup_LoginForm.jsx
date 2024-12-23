import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import ForgotPasswordForm from "./ForgotPasswordForm";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showHide_LoginForm } from "../features/cartSlice";
import { Signup_Form } from "./SignupForm";
import HeadingOfLogin from "./HeadingOfLogin";

export const SignupLoginForm = styled.div`
  .flexLogin {
    ${(props) =>
    props.path &&
    `
    display: flex;
    column-gap: 4rem;
   
  `}
  }

  .flexImage {
    flex: 40%;
    padding: 0 8rem;
    padding-top:5rem;

    @media(max-width:640px){
      padding:0 5rem;
      padding-top:5rem;
    }
  }
  .forgot_pass_form {
    display: none;
  }
  .login_password,
  .login_email {
    div {
      color: rgba(113, 113, 122, 1);
      font-weight: 600;
      font-size: 1.6rem;
      /* margin-top:2rem; */
      span {
        color: red;
        opacity: 0.6;
      }
    }
  }
  .password_input,
  .email_input {
    border-bottom: 1px solid #9da5af80;
  }
  .password_input {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .password_svg {
      cursor: pointer;
    }
  }
  .submit_btn {
    span {
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .login_password {
    padding-top: 2.3rem;
  }
`;
const initialValues = {
  email: "",
  password: "",
};

const Signup_LoginForm = () => {
  const dispatch = useDispatch();
  const eyeIconRef = useRef(null);
  const passwordInputRef = useRef(null);
  const location = useLocation();
  const path = location.pathname.includes("login");

  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log("loginForm==>", values);
        action.resetForm();
      },
    });

  const forgotPasswordHandler = () => {
    const forgotPasswordForm = document.querySelector(".forgot_pass_form");
    const signUp_LoginForm = document.querySelector(".signUp_LoginForm");

    forgotPasswordForm.style.display = "block";
    signUp_LoginForm.style.display = "none";

    dispatch(showHide_LoginForm(false));
  };

  const loginFormHandler = () => {
    const forgotPasswordForm = document.querySelector(".forgot_pass_form");
    const signUp_LoginForm = document.querySelector(".signUp_LoginForm");

    forgotPasswordForm.style.display = "none";
    signUp_LoginForm.style.display = "block";
  };

  let toggleIcon = false;
  const showPasswordHandler = () => {
    toggleIcon = !toggleIcon;
    // console.log("==>",passwordInputRef.current.setAttribute("type","text"))
    if (toggleIcon) {
      eyeIconRef.current.classList.replace("fa-eye", "fa-eye-slash");
      passwordInputRef.current.setAttribute("type", "text");
    } else {
      eyeIconRef.current.classList.replace("fa-eye-slash", "fa-eye");
      passwordInputRef.current.setAttribute("type", "password");
    }
  };


  return (
    <>
      <Signup_Form>
        <SignupLoginForm path={path}>
          <div className="flexLogin">
            <div className={path ? "flexImage" : null}>
              <HeadingOfLogin />
              <div className="signUp_LoginForm">
                <form action="#" onSubmit={handleSubmit}>
                  <div className="login_email">
                    <div>
                      <span>*</span> Email
                    </div>
                    <div className="email_input">
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                      />
                    </div>
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="login_password">
                    <div>
                      <span>*</span> Password
                    </div>
                    <div className="password_input">
                      <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                        ref={passwordInputRef}
                      />
                      <span className="password_svg">
                        <i
                          class="fa-solid fa-eye"
                          ref={eyeIconRef}
                          style={{ color: "#cfcfcf" }}
                          onClick={showPasswordHandler}
                        ></i>
                      </span>
                    </div>
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* login Btn start here */}
                  <button type="submit" className="submit_btn">
                    <span>
                      <NavLink href="#">Login</NavLink>
                    </span>
                  </button>
                  {/* login Btn end here  */}
                  {/* forgot password text start here */}
                  <div className="forgot_password">
                    <h3 onClick={forgotPasswordHandler}>
                      <NavLink
                        to='/forgot-password'
                        style={{
                          color: "#000",
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
                      >
                        Forgot Password
                      </NavLink>
                    </h3>
                  </div>
                </form>
              </div>
              {/* forgot password text end here  */}

            </div>
            {path ? (
              <div className="signForm_Image" style={{ flex: "60%" }}></div>
            ) : null}
          </div>
        </SignupLoginForm>
      </Signup_Form>
    </>
  );
};

export default Signup_LoginForm;
