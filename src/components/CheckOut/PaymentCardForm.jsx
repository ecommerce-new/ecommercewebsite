// import React, { useState } from "react";
// import styles from "../../assets/css/paymentForm.module.css";
// import styled from "styled-components";
// import classNames from "classnames";
// import { useFormik } from "formik";
// import { cardFormSchema } from "../../schemas";

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

// const initialValues = { 
//   card_number: "",
//   card_name: "",
//   cc_exp: "",
//   cvc: "",
// };
// const PaymentCardForm = ({ isFilled, formSubmit }) => {
//   const { touched, errors, values, handleChange, handleBlur, handleSubmit } =
//     useFormik({
//       initialValues: initialValues,
//       validationSchema: cardFormSchema,
//       onSubmit: (values, action) => {
//         console.log("PaymentCardForm==>", values);
//         action.resetForm();
//       },
//     });
//   // const handleInputChange = (e) => {
//   //   let inputValue = e.target.value.replace(/\D/g, ""); // Remove non-digits
//   //   if (inputValue.length >= 2) {
//   //     inputValue = inputValue.slice(0, 2) + " / " + inputValue.slice(2, 4);
//   //   }
//   // };
//   return (
//     <>
       
//        {formSubmit && isFilled && (
//           <form action="#" onSubmit={handleSubmit}>
//             {/* Card Number start here */}
//             <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
//               <div className={classNames(styles.inputData,styles.inputDataTwo)}>
//                 <input
//                   type="text"
//                   id="apartment"
//                   name="card_number"
//                   placeholder=""
//                   autoComplete="off"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.card_number}
//                 />
//                 <label htmlFor="apartment">Card Number</label>
//               </div>
//             </div>
//             {/* Name on Card  */}

//             <div className={classNames(styles.wrapperTwo, styles.wrapper)}>
//               <div className={classNames(styles.inputData,styles.inputDataTwo)}>
//                 <input
//                   type="text"
//                   id="card_name"
//                   name="card_name"
//                   placeholder=""
//                   autoComplete="off"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.card_name}
//                 />
//                 <label htmlFor="card_name">Name on Card</label>
//               </div>
//             </div>

//             {/* month and year */}
//             <div className={styles.flex}>
//               <div className={styles.wrapper}>
//                 <div className={classNames(styles.inputData,styles.inputDataTwo)}>
//                   <input
//                     type="text"
//                     id="cc-exp"
//                     name="cc_exp"
//                     autocomplete="cc-exp"
//                     inputmode="numeric"
//                     maxlength="7"
//                     placeholder=""
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.cc_exp}
//                   />
//                   <label htmlFor="cc-exp">MM / YY</label>
//                 </div>
//               </div>

//               {/* CVC start here */}

//               <div className={styles.wrapper}>
//                 <div className={classNames(styles.inputData,styles.inputDataTwo)}>
//                   <input
//                     type="text"
//                     name="cvc"
//                     autocomplete="cc-csc"
//                     inputmode="numeric"
//                     class="style-module_WithTooltip__vErQH"
//                     placeholder=""
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.cvc}
//                   />
//                   <label htmlFor="apartment">CVC</label>
//                   <div
//                     class="style-module_FormItemTooltipContainer__Het-k"
//                     data-tip="Kartınızın arkasındaki 3 haneli güvenlik kodu"
//                     data-event="touchstart focus mouseover"
//                     data-event-off="mouseout"
//                     currentitem="false"
//                   >
//                     Is it?
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* billing address  start here */}

//             {/* billing address end here  */}
//             {/* <Button type="submit" className="">
//               Complete Order
//             </Button> */}
//           </form>
//         )}
     
  
//     </>
//   );
// };

// export default PaymentCardForm;
