import React, { useEffect, useRef, useState } from "react";
import paymentHeader from "../../assets/img/navbar/payment_header.webp";
import styled from "styled-components";
import styles from "../../assets/css/paymentForm.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import { paymentFormSchema } from "../../schemas";
import { useSelector } from "react-redux";
import Checkout from "./Checkout";
// import PaymentCardForm from "./PaymentCardForm";
import DeliveryAddressForm from "./DeliveryAddressForm";
import { NavLink } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  @media(min-width:330px){
    flex-direction:column;
  }
  @media(min-width:1024px){
    flex-direction:row;
  }
  .pay_headerImage {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(min-width:330px){
     flex-direction:column;
     row-gap: 2rem;
    }

    @media(min-width:1024px){
      flex-direction:row;
    }
    .headerImg {
      font-size: 1.5rem;
    }
    span {
      color: #8a8b94;
      font-size: 1.5rem;
    }
  }
  .payment_section {
    /* background: blue; */
    /* display: flex; */
    /* justify-content: center; */
    flex: 50%;
    padding-left: 3rem;
    padding-right: 7rem;
    padding-top: 2rem;

    @media(min-width:330px){
      flex:100%;
      padding-right:5rem;
    }
  }
  .padding_left {
    padding-left: 2rem;
  }
  .main_CheckOut_section {
    background: #f7f7f9;
    flex: 50%;

    @media(min-width:330px){
      flex:100%;
    }
  }
  .style-module_FormItemTooltipContainer__Het-k {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    color: white;
    background-color: var(--checkout-secondary-text-color);
    position: absolute;
    top: 20px;
    right: 16px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px !important;
    line-height: 16px !important;
    cursor: pointer;
  }
  .paymentSubmit_btn {
    cursor: pointer;
    user-select: none;
    border: 1px transparent solid;
    border-radius: 8px;
    font-weight: 600 !important;
    text-align: center;
    position: relative;
    transition: all 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    padding: 0 24px;
    background-color: #272727;
    color: #fff;
    width: 100%;
    margin-top: 32px;
  }
  .react-tel-input {
    margin-top: 2rem;
    .form-control {
      height: 5.6rem;
      width: 52rem;
      border-color: #e5e4e9;


      @media(min-width:330px){
        width:100% !important;
      }
    }
  }
  .errors {
    font-size: 1.2rem;
    color: red;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  label[for="keepInform"] {
    font-size: 1.5rem;
    color: #8a8b94;
    padding-left: 3.5rem;
  }
  #emailInput {
    width: 52rem;

    @media(min-width:330px){
        width:100%;
      }
  }
  #addressInput {
    width: 52rem;

    @media(min-width:330px){
        width:100%;
      }
  }
  .flex {
    display: flex;
    column-gap: 2rem;

    @media(min-width:330px){
      flex-direction:column;
    }
    @media(min-width:1024px){
      flex-direction:row;
    }
  }
  .paymentSubmit_btn {
    width: 52rem;

    @media(min-width:330px){
        width:100%;
      }
  }
  .checkBox {
    padding: 1rem 0;
  }

  @media (max-width: 640px) {
    .flex {
      flex-direction: column;
    }
    #emailInput {
      width: 100%;
    }
    #addressInput {
      width: 100%;
    }
    .react-tel-input {
      .form-control {
        width: 100%;
      }
    }
  }
  .headerImg {
    width: 20rem;
    height: 6.4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  /* heading active class start here */
  .heading {
    display: flex;
    column-gap: 1rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    span {
      font-size: 2.2rem;
      font-weight: 600;
    }
    div {
      background: #fff;
      border-radius: 50%;
      border: 1px solid black;
      color: #000;
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 1.5rem;
      }
    }
  }
  .active {
    display: flex;
    column-gap: 1rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    span {
      font-size: 2.2rem;
      font-weight: 600;
    }
    div {
      background: #272727 !important;
      border-radius: 50%;
      color: #fff;
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 1.5rem;
      }
    }
  }
  .paymentForm {
    .secondHeading {
      padding-top: 3rem;
      .heading:nth-child(1) {
        border-top: 1px solid #e5e4e9;
      }
      .heading:nth-child(2) {
        border-top: 1px solid #e5e4e9;
        /* border-bottom: 1px solid #e5e4e9; */
      }
    }
  }

  /* heading active class end here */
  label[for="billing_address"] {
    font-size: 1.5rem;
    color: #8a8b94;
    padding-left: 3.5rem;
  }

  .checkOut_section {
    position: sticky;
    top: 0px;
  }

  /* delivery form start here */
  .delivery_address_form_section {
    display: grid;
    place-content: center;
    
    @media(min-width:330px){
      display: initial;
    }
  }
  /* delivery form end here  */
`;
const initialValues = {
  payment_email: "",
  keep_inform: "",
  payment_firstname: "",
  payment_lastname: "",
  payment_address: "",
  payment_apartment: "",
  postalCode: "",
  province: "",
  district: "",
  phone: "",
};
const PaymentForm = () => {
  const [isFilled, setIsFilled] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const headingSecRef = useRef(null);
  const validate = (values) => {
    const allFieldsFilled = Object.values(values).every(
      (value) =>
        value != null &&
        (typeof value === "string" ? value.trim() !== "" : value !== "")
    );
    const hasValidationErrors = Object.values(errors).some(
      (error) => error !== undefined
    );
    setIsFilled(allFieldsFilled && !hasValidationErrors);
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: paymentFormSchema,
    validate,
    onSubmit: (values, actions) => {
      // console.log("loginForm==>", values);
      if (checkField(values)) {
        actions.resetForm();
        setIsFilled(true);
      } else {
        console.log("All fields are not filled");
        setIsFilled(false);
      }
    },
  });

  const checkField = (values) => {
    const allFieldsFilled = Object.values(values).every(
      (value) =>
        value != null &&
        (typeof value === "string" ? value.trim() !== "" : value !== "")
    );
    const hasValidationErrors = Object.values(errors).some(
      (error) => error !== undefined
    );
    return allFieldsFilled && !hasValidationErrors;
  };

  // console.log("===>", isFilled);
  const submitHandler = () => {
    if (isFilled) {
      setFormSubmit(!formSubmit);
    }
  };

  // console.log("formSubmit ===>",formSubmit ,"isFilled==>",isFilled)
  // console.log("billingAddress==>", billingAddress);
  return (
    <>
      <Wrapper>
        <div className="payment_section">
          {/* form section start here */}
          <div className="PaymentForm_header">
            <header>
              <div className="pay_headerImage">
                <div className="headerImg">
                  <NavLink to="/">
                  <img src={paymentHeader} alt="payment" />
                  </NavLink>
                </div>
                <span>
                  Already have an account?{" "}
                  <span style={{ color: "#272727" }}>Log in</span>
                </span>
              </div>
            </header>
            <div className="paymentForm">
              <div className="heading active">
                <div>
                  <span>1</span>
                </div>
                <span>Address</span>
              </div>
              {/* input form */}

              <div className="padding_left">
                <form action="#" onSubmit={handleSubmit} noValidate>
                  <h2>Contact Information</h2>
                  <div id="emailInput" className={styles.wrapper}>
                    <div className={styles.inputData}>
                      <input
                        id="email"
                        type="email"
                        name="payment_email"
                        value={values.payment_email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder=" "
                        autoComplete="off"
                      />
                      <label htmlFor="email">Mail</label>
                      <div
                        className="style-module_FormItemTooltipContainer__Het-k"
                        data-tip="Sipariş bilgileri bu e-posta adresine gönderilecektir"
                        data-event="touchstart focus mouseover"
                        data-event-off="mouseout"
                        currentitem="true"
                      >
                        Is it?
                      </div>
                    </div>
                    {errors.payment_email && touched.payment_email ? (
                      <p className="errors">{errors.payment_email}</p>
                    ) : null}
                  </div>

                  <div>
                    <div className={styles.checkBox}>
                      <input
                        type="checkbox"
                        id="keepInform"
                        name="keep_inform"
                        value="keep me informed about news and special offers"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="keepInform">
                        Keep me informed about news and special offers
                      </label>
                    </div>
                  </div>

                  <h2>Delivery Address</h2>

                  <div className="flex">
                    <div className={styles.wrapper}>
                      <div className={styles.inputData}>
                        <input
                          type="text"
                          id="name"
                          name="payment_firstname"
                          value={values.payment_firstname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=""
                          autoComplete="off"
                        />
                        <label htmlFor="name">Name</label>
                      </div>
                      {errors.payment_firstname && touched.payment_firstname ? (
                        <p className="errors">{errors.payment_firstname}</p>
                      ) : null}
                    </div>

                    <div className={styles.wrapper}>
                      <div className={styles.inputData}>
                        <input
                          type="text"
                          id="lastname"
                          name="payment_lastname"
                          value={values.payment_lastname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=""
                          autoComplete="off"
                        />
                        <label htmlFor="lastname">Last name</label>
                      </div>
                      {errors.payment_lastname && touched.payment_lastname ? (
                        <p className="errors">{errors.payment_lastname}</p>
                      ) : null}
                    </div>
                  </div>

                  <div id="addressInput" className={styles.wrapper}>
                    <div className={styles.inputData}>
                      <input
                        type="text"
                        id="address"
                        name="payment_address"
                        value={values.payment_address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder=""
                        autoComplete="off"
                      />
                      <label htmlFor="address">Address</label>
                    </div>
                    {errors.payment_address && touched.payment_address ? (
                      <p className="errors">{errors.payment_address}</p>
                    ) : null}
                  </div>

                  <div className="flex">
                    <div className={styles.wrapper}>
                      <div className={styles.inputData}>
                        <input
                          type="text"
                          id="apartment"
                          name="payment_apartment"
                          value={values.payment_apartment}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=""
                          autoComplete="off"
                        />
                        <label htmlFor="apartment">
                          Apartment, apartment, etc.
                        </label>
                      </div>
                      {errors.payment_apartment && touched.payment_apartment ? (
                        <p className="errors">
                          Please enter your apartment address
                        </p>
                      ) : null}
                    </div>

                    <div className={styles.wrapper}>
                      <div className={styles.inputData}>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={values.postalCode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=""
                          autoComplete="off"
                        />
                        <label htmlFor="postalCode">Postal Code</label>
                      </div>
                      {errors.postalCode && touched.postalCode ? (
                        <p className="errors">{errors.postalCode}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex">
                    <div className={styles.wrapper}>
                      <div className={styles.inputData}>
                        <select
                          id="province"
                          name="province"
                          autoComplete="off"
                          value={values.province}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        >
                          <option disabled=""></option>
                          <option value="İstanbul">Istanbul</option>
                          <option value="Ankara">Ankara</option>
                          <option value="İzmir">Izmir</option>
                          <option value="Bursa">Bursa</option>
                          <option value="Adana">Adana</option>
                          <option value="Adıyaman">Adiyaman</option>
                          <option value="Afyonkarahisar">Afyonkara</option>
                          <option value="Ağrı">Pain</option>
                          <option value="Aksaray">A.S.</option>
                          <option value="Amasya">Amasya</option>
                          <option value="Antalya">Antalya Hotels</option>
                          <option value="Ardahan">Ardahan</option>
                          <option value="Artvin">Artvin</option>
                          <option value="Aydın">Aydin</option>
                          <option value="Balıkesir">Balıkesir</option>
                          <option value="Bartın">Bartin</option>
                          <option value="Batman">Batman</option>
                          <option value="Bayburt">Bayburt</option>
                          <option value="Bilecik">Bilecik</option>
                          <option value="Bingöl">Bingöl</option>
                          <option value="Bitlis">Bitlis</option>
                          <option value="Bolu">Bolu</option>
                          <option value="Burdur">Burdur</option>
                          <option value="Çanakkale">Canakkale</option>
                          <option value="Çankırı">Çankırı</option>
                          <option value="Çorum">Corum</option>
                          <option value="Denizli">Denizli</option>
                          <option value="Diyarbakır">Diyarbakir</option>
                          <option value="Düzce">Duzce</option>
                          <option value="Edirne">Istanbul</option>
                          <option value="Elazığ">Elazığ</option>
                          <option value="Erzincan">Ischia Island</option>
                          <option value="Erzurum">Erzurum</option>
                          <option value="Eskişehir">Eskişehir</option>
                          <option value="Gaziantep">Istanbul</option>
                          <option value="Giresun">Giresun</option>
                          <option value="Gümüşhane">Silverhouse</option>
                          <option value="Hakkari">Hakkari</option>
                          <option value="Hatay">Hatay</option>
                          <option value="Iğdır">Iğdır</option>
                          <option value="Isparta">Isparta</option>
                          <option value="Kahramanmaraş">Isfas Isfa</option>
                          <option value="Karabük">Karabuk</option>
                          <option value="Karaman">Karaman</option>
                          <option value="Kars">Kars</option>
                          <option value="Kastamonu">Kastamonu</option>
                          <option value="Kayseri">Kayseri</option>
                          <option value="Kilis">Kilis</option>
                          <option value="Kırıkkale">Kirikkale</option>
                          <option value="Kırklareli">Fortylareli</option>
                          <option value="Kırşehir">City</option>
                          <option value="Kocaeli">Kocaeli</option>
                          <option value="Konya">Antalya</option>
                          <option value="Kütahya">Kutahya</option>
                          <option value="Malatya">Malatya</option>
                          <option value="Manisa">Manisa</option>
                          <option value="Mardin">Mardin</option>
                          <option value="Mersin">Mersin</option>
                          <option value="Muğla">City</option>
                          <option value="Muş">Muş</option>
                          <option value="Nevşehir">Nevsehir</option>
                          <option value="Niğde">Niğde</option>
                          <option value="Ordu">Army</option>
                          <option value="Osmaniye">Oleksandr Sch</option>
                          <option value="Rize">Rize</option>
                          <option value="Sakarya">Sakarya</option>
                          <option value="Samsun">Samsun</option>
                          <option value="Şanlıurfa">Sanliurfa</option>
                          <option value="Siirt">Siirt</option>
                          <option value="Sinop">Sinop</option>
                          <option value="Sivas">Sivas</option>
                          <option value="Şırnak">Snail</option>
                          <option value="Tekirdağ">Tekirdağ</option>
                          <option value="Tokat">Slap</option>
                          <option value="Trabzon">Trabzon</option>
                          <option value="Tunceli">Tunceli</option>
                          <option value="Uşak">Butler</option>
                          <option value="Van">Van</option>
                          <option value="Yalova">Yalova</option>
                          <option value="Yozgat">Yozgat</option>
                          <option value="Zonguldak">Zonguldak</option>
                        </select>
                        <label htmlFor="province">Province</label>
                      </div>
                      {errors.province && touched.province ? (
                        <p className="errors">{errors.province}</p>
                      ) : null}
                    </div>

                    <div className={styles.wrapper}>
                      <div className={styles.inputData}>
                        <select
                          name="district"
                          id="district"
                          autoComplete="off"
                          value={values.district}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        >
                          <option disabled></option>
                          <option value="Adaklı">Adaklı</option>
                          <option value="Genç">Young</option>
                          <option value="Karlıova">Alyssova</option>
                          <option value="Kiğı">Kiğı</option>
                          <option value="Merkez">Headquarters</option>
                          <option value="Solhan">Sole</option>
                          <option value="Yayladere">Yayladere</option>
                          <option value="Yedisu">Sevens</option>
                        </select>
                        <label htmlFor="district">District</label>
                      </div>
                      {errors.district && touched.district ? (
                        <p className="errors">{errors.district}</p>
                      ) : null}
                    </div>
                  </div>

                  <PhoneInput
                    country={"us"}
                    name="phone"
                    value={values.phone}
                    onChange={(phone) => setFieldValue("phone", phone)}
                    onBlur={handleBlur}
                    inputProps={{
                      required: true,
                    }}
                  />
                  {errors.phone && touched.phone ? (
                    <p className="errors">{errors.phone}</p>
                  ) : null}
                  <button
                    type="submit"
                    className="paymentSubmit_btn"
                    onClick={submitHandler}
                  >
                    Continue with Cargo
                  </button>
                </form>
              </div>

              <div className="secondHeading">
                {/* second heading start here */}
                <div className="heading">
                  <div>
                    <span>2</span>
                  </div>
                  <span>Cargo</span>
                </div>
                {/* second heading end here */}

                {/* third heading start here */}

                <div className="heading" ref={headingSecRef}>
                  <div>
                    <span>3</span>
                  </div>
                  <span>Payment</span>
                </div>

                {/* <div className="PaymentCardForm_section">
                  <PaymentCardForm
                    isFilled={isFilled}
                    formSubmit={formSubmit}
                  />
                </div> */}
                {/* third heading end here  */}
              </div>
            </div>
          </div>
          {/* product information section start here */}
          {formSubmit ? (
            <div className="delivery_address_form_section">
              <DeliveryAddressForm
                isFilled={isFilled}
                formSubmit={formSubmit}
              />
            </div>
          ) : null}
          {/* product information section end here  */}
        </div>

        {/* checkout start here */}
        <div className="main_CheckOut_section">
          <div className="checkOut_section">
            <Checkout />
          </div>
        </div>
        {/* checkout end here  */}
      </Wrapper>
    </>
  );
};

export default PaymentForm;
