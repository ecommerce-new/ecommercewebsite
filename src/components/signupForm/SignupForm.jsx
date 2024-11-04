import React, { useRef } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import Signup_LoginForm from "./Signup_LoginForm";
import { signUpLoginSchema } from "../../schemas";
import signupImage from "../../assets/img/signupform/signupImage.webp";
import { useSelector } from "react-redux";
export const Signup_Form = styled.div`
  .mainform_image_section {
    display: flex;
    justify-content: space-between;
  }
  .sign_form {
    width: 70%;
    margin: 0 auto;
  }
  .sign_form_section {
    flex: 30%;
    padding-top: 8rem;
    /* background: red; */

    @media(min-width:640px){
        flex: 40%;
    }
  }
  .signForm_Image {
    background-image: url(${signupImage});
    background-size: cover !important;
    background-position: 50% !important;
    height: calc(100vh - 80px) !important;
    overflow: hidden !important;
    position: sticky !important;
    flex: 60%;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 38, 138, 0.2);
    }
     
    /* media query start here */

    @media (min-width:330px){
      display:none;
    }

    @media (min-width:640px){
      flex:40%;
      display:block;
    }

  }
  .loginForm {
    display: none;
  }
  form {
    input {
      border: none;
      outline: none;
      width: 100%;
      padding-top: 1rem;
      font-size: 2rem;
    }
  }
  .form-error {
    font-size: 1.4rem;
    color: red;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .submit_btn {
    border: none;
    background: black;
    color: white;
    font-size: 1.8rem;
    font-weight: 700;
    width: 100%;
    padding: 1.2rem;
    margin: 0 auto;
    margin-top: 4rem;
    margin-bottom: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
  .first_name,
  .last_name,
  .signup_email,
  .signup_password {
    div {
      color: rgba(113, 113, 122, 1);
      font-weight: 600;
      font-size: 1.5rem;
      /* margin-top:2rem; */
      span {
        color: red;
        opacity: 0.6;
      }
    }
  }
  .signUppassword_input {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .password_svg {
      cursor: pointer;
    }
  }
  .heading {
    padding-bottom: 4rem;
    h1 {
      a {
        margin-right: 50px;
        color: #000;
        font-size: 25px;
        font-weight: 400;
      }
    }
  }
  .active {
    a {
      margin-right: 50px;
      color: #000;
      font-size: 25px;
      font-weight: 800 !important;
    }
  }
  .last_name,
  .signup_email,
  .signup_password {
    padding-top: 2.3rem;
  }
  .firstname_input,
  .lastname_input,
  .signUpEmail_input,
  .signUppassword_input {
    border-bottom: 1px solid #9da5af80;
  }
`;
const initialValues = {
  first_name: "",
  last_name: "",
  signup_email: "",
  signup_password: "",
};

const SignupForm = () => {
  const { hideLoginForm, removeActiveClass } = useSelector(
    (state) => state.allCart
  );
  const eyeIconRef = useRef(null)
  const passwordInputRef = useRef(null);
  console.log("removeActiveClass==>",removeActiveClass)
  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpLoginSchema,
      onSubmit: (values, action) => {
        console.log("sigupform==>", values);
        action.resetForm();
      },
    });
   
  const loginFormHandler = () => {
    const loginForm = document.querySelector(".loginForm");
    const signupForm = document.querySelector(".SignupForm");
    const loginHeading = document.querySelector(".login_heading");
    const signUpHeading = document.querySelector(".signup_heading");
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    signUpHeading.classList.remove("active");
    loginHeading.classList.add("active");
  };
  const signFormHandler = () => {
    const loginForm = document.querySelector(".loginForm");
    const signupForm = document.querySelector(".SignupForm");
    const loginHeading = document.querySelector(".login_heading");
    const signUpHeading = document.querySelector(".signup_heading");
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    signUpHeading.classList.add("active");
    loginHeading.classList.remove("active");
  };
  let toggleIcon = false;
  const showPasswordHandler = () =>{
    toggleIcon = !toggleIcon;
    // console.log("==>",passwordInputRef.current.setAttribute("type","text"))
    if(toggleIcon){
      eyeIconRef.current.classList.replace("fa-eye","fa-eye-slash")
      passwordInputRef.current.setAttribute("type","text")
    }else{
      eyeIconRef.current.classList.replace("fa-eye-slash","fa-eye")
      passwordInputRef.current.setAttribute("type","password")
    }
  }
  return (
    <>
      <Signup_Form>
        <div className="container-fluid">
          <div className="mainform_image_section">
            {/* form section start here */}
            <div className="sign_form_section">
              <div className="sign_form">
                {hideLoginForm ? (
                  <div className="heading">
                    <h1 
                    className={`login_heading ${removeActiveClass ? 'active' : null}`} 
                    onClick={loginFormHandler}> 
                      <a href="#">Login</a>
                    </h1>
                    <h1
                      className={`signup_heading ${!removeActiveClass ? 'active': null}`}
                      onClick={signFormHandler}
                    >
                      <a href="#">Become a member</a>
                    </h1>
                  </div>
                ) : null}

                {/* form start here */}
                {/* login form start here */}
                <div className="loginForm">
                  <Signup_LoginForm />
                </div>
                {/* login form end here */}
                {/* signup form start here */}
                <div className="SignupForm">
                  <form action="#" onSubmit={handleSubmit}>
                    <div className="first_name">
                      <div>
                        <span>*</span> Name
                      </div>
                      <div className="firstname_input">
                        <input
                          type="text"
                          name="first_name"
                          value={values.first_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="off"
                        />
                      </div>
                      {errors.first_name && touched.first_name ? (
                        <p className="form-error">{errors.first_name}</p>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* last name start here */}
                    <div className="last_name">
                      <div>
                        <span>*</span> Last name
                      </div>
                      <div className="lastname_input">
                        <input
                          type="text"
                          name="last_name"
                          value={values.last_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="off"
                        />
                      </div>
                      {errors.last_name && touched.last_name ? (
                        <p className="form-error">{errors.last_name}</p>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* last name end here  */}

                    {/* email start here */}
                    <div className="signup_email">
                      <div>
                        <span>*</span> Email
                      </div>
                      <div className="signUpEmail_input">
                        <input
                          type="email"
                          name="signup_email"
                          value={values.signup_email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="off"
                        />
                      </div>
                      {errors.signup_email && touched.signup_email ? (
                        <p className="form-error">{errors.signup_email}</p>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* email end here */}

                    {/* password start here */}
                    <div className="signup_password">
                      <div>
                        <span>*</span> Password
                      </div>
                      <div className="signUppassword_input">
                        <input
                          type="password"
                          name="signup_password"
                          value={values.signup_password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          ref={passwordInputRef}
                          autoComplete="off"
                        />
                        <span className="password_svg">
                          <i
                            class="fa-solid fa-eye"
                            style={{ color: "#cfcfcf" }}
                            ref={eyeIconRef}
                            onClick={showPasswordHandler}
                          ></i>
                        </span>
                      </div>
                      {errors.signup_password && touched.signup_password ? (
                        <p className="form-error">{errors.signup_password}</p>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* password end here  */}
                    {/* create account button start here */}
                    <button type="submit" className="createAcount submit_btn">
                      <span>Create Account</span>
                    </button>
                    {/* create account button end here  */}
                  </form>
                </div>
                {/* signup form end here  */}
                {/* form end here  */}
              </div>
            </div>
            {/* form section end here  */}

            {/* image section start here */}
            <div className="signForm_Image"></div>
            {/* image section end here  */}
          </div>
        </div>
      </Signup_Form>
    </>
  );
};

export default SignupForm;
