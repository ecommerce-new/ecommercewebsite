import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import { signUpSchema } from "../../schemas";
import { NavLink } from "react-router-dom";
const Wrapper = styled.div`
  .login_form_section{
    position:fixed;
    inset: 0;
    background:rgba(255,255,255,0.9);
    z-index:10000;
    display: none;
    .form_section{
      position:absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      width: 500px;
      background: #fff;
      box-shadow: 0 20px 75px rgba(0,0,0,.23);
      color: #000;
    }
    form{
      padding: 60px 30px;
    }
  }
  .closeForm{
    display: none !important;
  }
  .login_heading {
    color: rgba(63, 63, 70, 1);
    font-size: 1.5rem;
    line-height: 1.25rem;
    font-weight: 500;
   
  }
  .login_para{
      text-align: center;
      padding-top: 2rem;
      padding-bottom: 2rem;
      span{
        font-weight: 700;
        font-size: 25px;
        text-align: center;
      }
    }
  .login_email,.login_password{
    div{
      color: rgba(113,113,122,1);
      font-weight:600;
      font-size:1.5rem;
      span{
        color:red;
        opacity:0.6;
      }
    }
  }
 
 .email_input,.password_input{
  input{
    outline:none;
    border:none;
    width: 100%;
    border-bottom: 1px solid #9da5af80;
    border-radius: 0 !important;
  }
 }
 .password_input{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .password_svg{
    cursor: pointer;
  }
 }
 .form-error{
  font-size: 1.4rem;
  color: red;
  padding-top: 1rem;
  padding-bottom: 1rem;
 }
 .submit_btn{
  border: none;
  background: black;
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  width: 100%;
  padding: 1.2rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  cursor: pointer;
 }
 .login_footer{
  display:flex;
  flex-direction:column;
  .create_account{
    font-size: 1.45rem;
    font-weight: bold;
    padding-top:1rem;
    padding-bottom:1rem;
    span{
      font-weight: 600;
    }
    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .password_forgot{
    font-size: 1.45rem;
    font-weight: 600;
    &:hover{
      text-decoration:underline;
    }
  }
 }
 .form_close{
  position: absolute;
  right: 0;
  background: rgb(0, 0, 0);
  color: white;
  margin: 0.5rem;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
 }
`;
const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const { values, touched, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log("values==>", values);
      action.resetForm()
    },
  });
  const closeformHandler = () =>{
    const loginFormSection = document.querySelector(".login_form_section");
    loginFormSection.style.display="none";
  }
  //   console.log("errors=>",errors)
  return (
    <Wrapper>
      <div className="login_form_section">
        <div className="form_section">
        <span class="form_close" onClick={closeformHandler}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></span>
        <form onSubmit={handleSubmit}>
        
        <div className="login-main">
          <span className="login_heading">
            Bu ürünü favorilerine eklemek için giriş yapmalısın.
          </span>
          <div className="login_para">
            <span>Üye Girişi</span>
          </div>

          <div className="login_email">
            <div>
              <span>*</span> Email
            </div>
            <div className="email_input">
              <input
                type="email"
                name="email"
                // placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>
            {errors.email && touched.email ? <p className="form-error">{errors.email}</p> : ""}
          </div>

          <div className="login_password">
            <div>
              <span>*</span> Şifre
            </div>
            <div className="password_input">
              <input
                type="password"
                name="password"
                // placeholder="Şifre"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
              <span
                className="password_svg"
                style={{ transform: "translateY(-50%)" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  color="#cfcfcf"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"></path>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"></path>
                </svg>
              </span>
            </div>
            {
              errors.password && touched.password ? <p className="form-error">{errors.password}</p> : ""}
          </div>

          <button type="submit" className="submit_btn">
            <span>
              Üye Girişi
              </span>
          </button>

          <div className="login_footer">
            <span className="create_account">
              <span>Hesabınız yok mu?</span> 
             <NavLink style={{color:"black",marginLeft:"0.5rem"}} to="/sign-up">
                Üye Ol
             </NavLink>
            </span>
            <span className="password_forgot">Parolamı Unuttum</span>
          </div>
        </div>
      </form>
        </div>
     
      </div>
    </Wrapper>
  );
};

export default LoginForm;
