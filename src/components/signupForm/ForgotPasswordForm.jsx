import React from "react";
import { useFormik } from "formik";
import { forgotSchema } from "../../schemas";
import { NavLink } from "react-router-dom";
import { showHide_LoginForm } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { removeClassActive } from "../features/cartSlice";
import styled from "styled-components";
const Wrapper = styled.div`
.forgot_para {
  p{
    font-size:1.5rem;
    font-weight:500;
  }
}
.forgot_form{
  padding-top:4rem;
}
.forgot_heading{
  padding-bottom:2rem;
  h1{
    font-size:1.8rem;
    font-weight:700;
  }
}
.login_text{
  h1{
    font-weight:400;
    font-size:1.5rem;
    cursor:pointer;
  }
}
`;
const initialValues = {
  email: "",
};
const ForgotPasswordForm = ({ sendLoginFormHandler }) => {
  const dispatch = useDispatch();
  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: forgotSchema,
      onSubmit: (values, action) => {
        console.log("forgotForm==>", values);
        action.resetForm;
      },
    });

  return (
    <>
      <Wrapper>
        <div className="main_forgot_form_section">
          <div className="forgotForm_section">
            <div className="forgot_heading">
              <h1>Forgot Password?</h1>
            </div>
            <div className="forgot_para">
              <p>Please enter your email address when you</p>
              <p>are a member. Your password will be sent</p>
              <p>to your email address.</p>
            </div>
            {/* forgot form section start here */}
            <div className="forgot_form">
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
                <button type="submit" className="submit_btn">
                  <span>
                    <NavLink to="#">Send</NavLink>
                  </span>
                </button>
              </form>
            </div>
            {/* forgot form section end here  */}

            {/* login text start here */}
            <div
              className="login_text"
              onClick={() => {
                dispatch(showHide_LoginForm(true));
                sendLoginFormHandler();
                dispatch(removeClassActive(true));
              }}
            >
              <h1>Login</h1>
            </div>
            {/* login text end here  */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ForgotPasswordForm;
