import React, { useState } from "react";
import styles from "../../assets/css/paymentForm.module.css";
import PhoneInput from "react-phone-input-2";
import classNames from "classnames";
import styled from "styled-components";
import { useFormik } from "formik";
import { deliveryAddressForm } from "../../schemas";
const Wrapper_DevliveryAddress = styled.div`
  .react-tel-input {
    margin-top: 2rem;
    .form-control {
      height: 5.6rem;
      width: 50rem !important;
      border-color: #e5e4e9;
    }
  }
  .flex {
    display: flex;
    width: 50rem;
    column-gap: 2rem;
    
    /* media query start here */
    @media(min-width:330px){
      width:100%;
    }
  }
  .deliveryAddress_heading {
    font-size: 2rem;
    color: #272727;
  }
  form {
    padding-left: 0 !important;
  }
  label[for="Corporate_invoice"] {
    font-size: 1.5rem;
    color: #8a8b94;
    padding-left: 3.5rem;
  }
  .complete_order {
    width: 50rem !important;

    @media(min-width:330px){
      width:100% !important;
    }
  }
`;
const Label = styled.label`
  font-size: 1.5rem;
  color: #8a8b94;
`;
const Span = styled.span`
  font-size: 1.5rem;
  color: #000;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;
// const Button = styled.button`
//  width: 50rem;
//   background: #272727;
//   border: none;
//   outline: none;
//   padding: 2rem;
//   border-radius: 8px;
//   color: #fff;
//   font-size: 12px;
//   font-weight: 600;
//   margin: 3.2rem 0;
// `;

const initialValues = {
  country_name: "",
  first_name: "",
  last_name: "",
  address: "",
  apartment: "",
  postal_code: "",
  province: "",
  phone: "",
  company_name: "",
  tax_number: "",

  card_number: "",
  card_name: "",
  cc_exp: "",
  cvc: "",
};
const DeliveryAddressForm = ({formSubmit, isFilled}) => {
  const [corporateInvoice, setCorporateInvoice] = useState(false);
  const [billingAddress, setBillingAddress] = useState(false);
  const {
    touched,
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: deliveryAddressForm,
    onSubmit: (values, actions) => {
      console.log("deliveryForm==>", values);
      actions.resetForm();
    },
  });
  const corporateHandler = () => {
    setCorporateInvoice(!corporateInvoice);
  };
  const billingHandler = () => {
    setBillingAddress(!billingAddress);
  };
  return (
    <>
      {/* {!billingAddress && ( */}
      <Wrapper_DevliveryAddress>
        {!billingAddress && (
          <div className="deliveryAddress_heading">Invoice Address</div>
        )}
        {/* form start here  */}
        <form action="#" onSubmit={handleSubmit} noValidate>
          {formSubmit && isFilled && (
            <div>
              {/* Card Number start here */}
              <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
                <div className={classNames(styles.inputData, styles.inputDataTwo)}>
                  <input
                    type="text"
                    id="apartment"
                    name="card_number"
                    placeholder=""
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.card_number}
                  />
                  <label htmlFor="apartment">Card Number</label>
                </div>
                {
                  errors.country_name && touched.country_name ? (<p className="errors">{errors.country_name}</p>) : null
                }
              </div>
              {/* Name on Card  */}
              <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
                <div
                  className={classNames(styles.inputData, styles.inputDataTwo)}
                >
                  <input
                    type="text"
                    id="card_name"
                    name="card_name"
                    placeholder=""
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.card_name}
                  />
                  <label htmlFor="card_name">Name on Card</label>
                </div>
                {errors.card_name && touched.card_name ? (<p className="errors">{errors.card_name}</p>) : null}
              </div>

              {/* month and year */}
              <div className={styles.flex}>
                <div className={styles.wrapper}>
                  <div
                    className={classNames(
                      styles.inputData,
                      styles.inputDataTwo
                    )}
                  >
                    <input
                      type="text"
                      id="cc-exp"
                      name="cc_exp"
                      autocomplete="cc-exp"
                      inputmode="numeric"
                      maxlength="7"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cc_exp}
                    />
                    <label htmlFor="cc-exp">MM / YY</label>
                  </div>
                  {errors.cc_exp && touched.cc_exp ? (<p className="errors">
                    {errors.cc_exp}
                  </p>) : null}
                </div>

                {/* CVC start here */}

                <div className={styles.wrapper}>
                  <div
                    className={classNames(
                      styles.inputData,
                      styles.inputDataTwo
                    )}
                  >
                    <input
                      type="text"
                      name="cvc"
                      autocomplete="off"
                      inputmode="numeric"
                      class="style-module_WithTooltip__vErQH"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cvc}
                    />
                    <label htmlFor="apartment">CVC</label>
                    <div
                      class="style-module_FormItemTooltipContainer__Het-k"
                      data-tip="Kartınızın arkasındaki 3 haneli güvenlik kodu"
                      data-event="touchstart focus mouseover"
                      data-event-off="mouseout"
                      currentitem="false"
                    >
                      Is it?
                    </div>
                  </div>
                  {errors.cvc && touched.cvc ? (<p className="errors">{errors.cvc}</p>) : null}
                </div>
              </div>

              {/* paymentCard end here  */}
            </div>
          )}

          <div className={styles.checkBox}>
            <input
              type="checkbox"
              id="billing_address"
              onClick={billingHandler}
            />
            <label htmlFor="billing_address">
              My billing address is the same as my delivery address
            </label>
          </div>

          {!billingAddress && (
            <div>
              <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
                <div className={styles.inputData}>
                  <select
                    className="style-module_Bottom__Syp-M"
                    autocomplete="country-name"
                    name="country_name"
                    id="country"
                    autoComplete="off"
                    value={values.country_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  >
                    <option disabled=""></option>
                    <option value="Åland Adaları">Island Islands</option>
                    <option value="ABD Küçük Harici Adaları">
                      US Small External Islands
                    </option>
                    <option value="ABD Virjin Adaları">
                      U.S. Virgin Islands
                    </option>
                    <option value="Afganistan">Afghanistan</option>
                    <option value="Alderney">Alderney</option>
                    <option value="Almanya">Germany</option>
                    <option value="Amerika Birleşik Devletleri">
                      United States
                    </option>
                    <option value="Amerikan Samoası">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarktika">Antarctica</option>
                    <option value="Antigua ve Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Arjantin">Argentina</option>
                    <option value="Arnavutluk">Albania</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Avustralya">Australia</option>
                    <option value="Avusturya">Austria</option>
                    <option value="Azerbaycan">Azerbaijan</option>
                    <option value="Bahamalar">Bahamas</option>
                    <option value="Bahreyn">Bahrain</option>
                    <option value="Bangladeş">Bangladeshi</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Batı Sahara">West Sahara</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belçika">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Birleşik Arap Emirlikleri">
                      United Arab Emirates
                    </option>
                    <option value="Birleşik Krallık">United Kingdom</option>
                    <option value="Bolivya">Bolivia</option>
                    <option value="Bosna Hersek">Bosnia and Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Adası">Bouvet Island</option>
                    <option value="Brezilya">Brazil</option>
                    <option value="Britanya Hint Okyanusu Toprakları">
                      British Indian Ocean Territories
                    </option>
                    <option value="Britanya Virjin Adaları">
                      British Virgin Islands
                    </option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaristan">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Butan">Bun</option>
                    <option value="Cayman Adaları">Cayman Islands</option>
                    <option value="Cebelitarık">Gibraltar</option>
                    <option value="Cezayir">Algeria</option>
                    <option value="Christmas Adası">Christmas Island</option>
                    <option value="Cibuti">Djibouti</option>
                    <option value="Cocos (Keeling) Adaları">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Cook Adaları">Cook Islands</option>
                    <option value="Curaçao">Curaçao</option>
                    <option value="Çad">Chad</option>
                    <option value="Çek Cumhuriyeti">Czech Republic</option>
                    <option value="Çin">China</option>
                    <option value="Danimarka">Denmark</option>
                    <option value="Demokratik Kongo Cumhuriyeti">
                      Democratic Republic of the Congo
                    </option>
                    <option value="Demokratik Kongo Cumhuriyeti">
                      Democratic Republic of the Congo
                    </option>
                    <option value="Doğu Timor">East Timor</option>
                    <option value="Dominik Cumhuriyeti">
                      Dominican Republic
                    </option>
                    <option value="Dominika">Dominica</option>
                    <option value="Ekvador">Ecuador</option>
                    <option value="Ekvator Ginesi">Equatorial Guinea</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Endonezya">Indonesian</option>
                    <option value="Eritre">Eritrea</option>
                    <option value="Ermenistan">Armenia</option>
                    <option value="Estonya">Estonia</option>
                    <option value="Etiyopya">Ethiopia</option>
                    <option value="Falkland Adaları">Falkland Islands</option>
                    <option value="Faroe Adaları">Faroe Islands</option>
                    <option value="Fas">Morocco</option>
                    <option value="Fiji Adaları">Fiji Islands</option>
                    <option value="Fildişi Sahili">Ivory Coast</option>
                    <option value="Filipinler">Philippines</option>
                    <option value="Filistin Toprakları">
                      Palestinian Territory
                    </option>
                    <option value="Finlandiya">Finland</option>
                    <option value="Fransa">France</option>
                    <option value="Fransız Guyanası">French Guiana</option>
                    <option value="Fransız Güney Toprakları">
                      French Southern Territory
                    </option>
                    <option value="Fransız Polinezyası">
                      French Polynesia
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambiya">Gambia</option>
                    <option value="Gana">Ghana</option>
                    <option value="Gine">Guinea</option>
                    <option value="Gine-Bissau">Guinea-Bissau</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Grönland">Greenland</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Güney Afrika">South Africa</option>
                    <option value="Güney Georgia">South Georgia</option>
                    <option value="Güney Kore">South Korea</option>
                    <option value="Güney Sudan">South Sudan</option>
                    <option value="Gürcistan">Georgia</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Adası ve McDonald Adaları">
                      Heard Island and McDonald Islands
                    </option>
                    <option value="Hindistan">India</option>
                    <option value="Hırvatistan">Croatia</option>
                    <option value="Hollanda">Netherlands</option>
                    <option value="Hollanda Antilleri">
                      Netherlands Antialler
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Irak">Iraq</option>
                    <option value="İran">Iran</option>
                    <option value="İrlanda">Ireland</option>
                    <option value="İspanya">Spain</option>
                    <option value="İsrail">Israel</option>
                    <option value="İsveç">Sweden</option>
                    <option value="İsviçre">Switzerland</option>
                    <option value="İtalya">Italy</option>
                    <option value="İzlanda">Iceland</option>
                    <option value="Jamaika">Jamaica</option>
                    <option value="Japonya">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Kamboçya">Cambodia</option>
                    <option value="Kamerun">Cameroon</option>
                    <option value="Kanada">Canada</option>
                    <option value="Karadağ">Montenegro</option>
                    <option value="Katar">Qatar</option>
                    <option value="Kazakistan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kıbrıs">Cyprus</option>
                    <option value="Kırgızistan">Kyrgyzstan</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="KKTC">TRNC</option>
                    <option value="Kolombiya">Colombia</option>
                    <option value="Komorlar">Comoros</option>
                    <option value="Kosova">Kosovo</option>
                    <option value="Kosta Rika">Costa Rica</option>
                    <option value="Kuveyt">Kuwaiti</option>
                    <option value="Kuzey Kore">North Korea</option>
                    <option value="Kuzey Mariana Adaları">
                      Northern Mariana Islands
                    </option>
                    <option value="Küba">Cuban</option>
                    <option value="Laos">Laos</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Letonya">Latvian</option>
                    <option value="Liberya">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Litvanya">Lithuania</option>
                    <option value="Lübnan">Lebanon</option>
                    <option value="Lüksemburg">Luxembourg</option>
                    <option value="Macaristan">Hungary</option>
                    <option value="Madagaskar">Madagascar</option>
                    <option value="Makao">Macao</option>
                    <option value="Makedonya">Macedonia</option>
                    <option value="Malavi">Malawi</option>
                    <option value="Maldivler">Maldives</option>
                    <option value="Malezya">Malaysia</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Man Adası">Isle of Man</option>
                    <option value="Marshall Adaları">Marshall Islands</option>
                    <option value="Martinik">Martini</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayot</option>
                    <option value="Meksika">Mexico</option>
                    <option value="Mikronezya">Micronesia</option>
                    <option value="Mısır">Egypt</option>
                    <option value="Moğolistan">Mongolia</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monako">Monako</option>
                    <option value="Montserrat">Montss</option>
                    <option value="Moritanya">Mauritania</option>
                    <option value="Mozambik">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibya">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Nijer">Nizh</option>
                    <option value="Nijerya">Nigeria</option>
                    <option value="Nikaragua">Nicaragua</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Adası">Norfolk Island</option>
                    <option value="Norveç">Norway</option>
                    <option value="Orta Afrika Cumhuriyeti">
                      Central African Republic
                    </option>
                    <option value="Özbekistan">Uzbekistan</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua Yeni Gine">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Pitcairn Adaları">Pitcairn Islands</option>
                    <option value="Polonya">Poland</option>
                    <option value="Portekiz">Portugal</option>
                    <option value="Porto Riko">Puerto Rico</option>
                    <option value="Réunion">Réunion</option>
                    <option value="Romanya">Romania</option>
                    <option value="Ruanda">Rwanda</option>
                    <option value="Rusya">Russia</option>
                    <option value="Saint Barthélemy">Saint Barthélemy</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts ve Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Martin">Saint Martin</option>
                    <option value="Saint Pierre ve Miquelon">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent ve Grenadinler">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome ve Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seyşeller">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapur">Singapore</option>
                    <option value="Sırbistan">Serbia</option>
                    <option value="Slovakya">Slovakia</option>
                    <option value="Slovenya">Slovenia</option>
                    <option value="Solomon Adaları">Solomon Islands</option>
                    <option value="Somali">Somalia</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Surinam">Suriname</option>
                    <option value="Suriye">Syria</option>
                    <option value="Suudi Arabistan">Saudi Arabia</option>
                    <option value="Svalbard ve Jan Mayen">
                      Svalbard and Jan Mayen
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Şili">Chile</option>
                    <option value="Tacikistan">Tajikistan</option>
                    <option value="Tanzanya">Tanzania</option>
                    <option value="Tayland">Thailand</option>
                    <option value="Tayvan">Taiwan</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad ve Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunus">Tunisia</option>
                    <option value="Turks ve Caicos Adaları">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Türkiye">Turkey</option>
                    <option value="Türkmenistan">Turkmenistan</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukrayna">Ukraine</option>
                    <option value="Umman">Oman</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Ürdün">Jordan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatikan">Vatikan</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Wallis ve Futuna">Wallis and Futuna</option>
                    <option value="Yemen">Yemeni</option>
                    <option value="Yeni Kaledonya">New Caledonia</option>
                    <option value="Yeni Zelanda">New Zealand</option>
                    <option value="Yeşil Burun Adaları">Cape Verde</option>
                    <option value="Yunanistan">Greece</option>
                    <option value="Zambiya">Zambia</option>
                    <option value="Zimbabve">Zimbabwe</option>
                  </select>
                  <label htmlFor="country">Country</label>
                </div>
                {errors.country_name && touched.country_name ? (<p className="errors">{errors.country_name}</p>) : null}
              </div>

              <div className="flex">
                {/* first name start here */}
                <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
                  <div className={styles.inputData}>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder=""
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="first_name">Name</label>
                  </div>
                  {errors.first_name && touched.first_name ? (<p className="errors">{errors.first_name}</p>): null}
                </div>
                {/* first name end here  */}

                {/* last name start here */}
                <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
                  <div className={styles.inputData}>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      placeholder=""
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="last_name">Last name</label>
                  </div>
                  {errors.last_name && touched.last_name ? (<p className="errors">{errors.last_name}</p>) : null}
                </div>
                {/* last name end here  */}
              </div>

              {/* address start here  */}
              <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
                <div className={styles.inputData}>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder=""
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="address">Address</label>
                </div>
                {errors.address && touched.address ? (<p className="errors">{errors.address}</p>): null}
              </div>
              {/* address end here  */}

              {/* apartment section start here */}
              <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
                <div className={styles.inputData}>
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    placeholder=""
                    value={values.apartment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="apartment">Apartment, flat, etc.</label>
                </div>
                {errors.apartment && touched.apartment ? (<p className="errors">{errors.apartment}</p>) : null}
              </div>
              {/* apartment section end here  */}
              <div className="flex">
                {/* postal codes start here */}
                <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
                  <div className={styles.inputData}>
                    <input
                      type="text"
                      id="postal_code"
                      name="postal_code"
                      placeholder=""
                      value={values.postal_code}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="postal_code">Postal Code</label>
                  </div>
                  {errors.postal_code && touched.postal_code ? (<p className="errors">{errors.postal_code}</p>) : null}

                </div>
                {/* postal codes end here  */}

                {/* Province start here */}
                <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
                  <div className={styles.inputData}>
                    <input
                      type="text"
                      id="Province"
                      name="province"
                      placeholder=""
                      value={values.province}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="Province">Province</label>
                  </div>
                  {errors.province && touched.province ? (<p className="errors">{errors.province}</p>) : null}
                </div>
                {/* province end here  */}
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
               {errors.phone && touched.phone ? (<p className="errors">{errors.phone}</p>) : null}

            </div>
          )}
          {/* Corporate invoice start here */}
          <div className="Corporate_invoice">
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="Corporate_invoice"
                name="corporate_invoice"
                onClick={corporateHandler}
              />
              <label htmlFor="Corporate_invoice">Company Name</label>
            </div>
            {corporateInvoice && (
              <div>
                <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
                  <div className={styles.inputData}>
                    <input
                      type="text"
                      id="company_name"
                      name="company_name"
                      placeholder=""
                      value={values.company_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="company_name">Company Name</label>
                  </div>
                  {errors.company_name && touched.company_name ? (<p className="errors">{errors.company_name}</p>) : null}
                </div>
                <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
                  <div className={styles.inputData}>
                    <input
                      type="text"
                      id="tax_number"
                      name="tax_number"
                      placeholder=""
                      value={values.tax_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="tax_number">Tax Number</label>
                  </div>
                  {errors.tax_number && touched.tax_number ? (<p className="errors">{errors.tax_number}</p>) : null}
                </div>
              </div>
            )}
          </div>
          {/* Corporate invoice end here  */}

          {/* agreed from privacy policy start here */}
          <div className="privacy_policy">
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="privacy_policy"
                name="privacy_policy"
              />
              <Label htmlFor="privacy_policy">
                I have read <Span>and</Span>
                agree <Span>to the</Span> <Span>Privacy Policy</Span>
                and <Span>the Sales Agreement</Span>.
              </Label>
            </div>
          </div>
          {/* agreed from privacy policy end here  */}

          {/* complete order button start here */}
          <button type="submit" className="paymentSubmit_btn complete_order">
            Complete Order
          </button>
          {/* complete order button end here  */}
        </form>
        {/* form end here */}
      </Wrapper_DevliveryAddress>
    </>
  );
};

export default DeliveryAddressForm;
