import * as Yup from "yup";
import "yup-phone-lite";
import valid from "card-validator";
import dayjs from "dayjs";
export const signUpSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /[a-zA-Z]/,
      "Password must contain at least one lowercase letter or uppercase letter"
    )
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

export const signUpLoginSchema = Yup.object({
  first_name: Yup.string()
    .min(2, "at least write 2 characters")
    .required("Please enter your first name"),
  last_name: Yup.string()
    .min(2, "at least write 2 characters")
    .required("Please enter your last name"),
  signup_email: Yup.string().email().required("Please enter your email"),
  signup_password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /[a-zA-Z]/,
      "Password must contain at least one lowercase letter or uppercase letter"
    )
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /[a-zA-Z]/,
      "Password must contain at least one lowercase letter or uppercase letter"
    )
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

export const forgotSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});

export const paymentFormSchema = Yup.object({
  payment_email: Yup.string().email().required("Please enter your email"),
  payment_firstname: Yup.string()
    .min(2, "at least write 2 characters")
    .required("Please enter your first name"),
  payment_lastname: Yup.string()
    .min(2, "at least write 2 characters")
    .required("Please enter your last name"),
  payment_address: Yup.string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters")
    .max(1000, "Address cannot exceed 1000 characters")
    .matches(/^[a-zA-Z0-9\s,.'-]*$/, "Address contains invalid characters"),
  payment_apartment: Yup.string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters")
    .max(100, "Address cannot exceed 100 characters")
    .matches(/^[a-zA-Z0-9\s,.'-]*$/, "Address contains invalid characters"),
  postalCode: Yup.string()
    .matches(/^[A-Za-z0-9\s\-]{3,10}$/, "Please enter a valid postal code")
    .required("Postal code is required"),
  province: Yup.string().required("Please select one option"),
  district: Yup.string().required("Please select one option"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^\+?[1-9]\d{1,14}$/,
      "Invalid phone number. Please include country code."
    ),
});

// export const cardFormSchema = Yup.object({
//   card_number: Yup.string()
//     .test(
//       "test-number",
//       "Credit Card number is invalid",
//       (value) => valid.number(value).isValid
//     )
//     .required(),
//   card_name: Yup.string().required("Please enter your card name"),
//   cc_exp: Yup.string()
//     .required("Expiry date is required")
//     .test("expiryDate", "Invalid expiry date", function (value) {
//       if (!value) return false;

//       // Split MM/YY or MM/YYYY format
//       const [month, year] = value.split("/").map((part) => parseInt(part, 10));
//       // Validate month
//       if (month < 1 || month > 12) return false;
//       // Handle both 2-digit and 4-digit year formats
//       const fullYear = year < 100 ? 2000 + year : year;
//       // Create expiry date with the last day of the expiry month
//       const expiry = dayjs(`${fullYear}-${month}-01`).endOf("month");
//       // Check if the expiry date is in the future
//       return expiry.isAfter(dayjs());
//     }),
//   cvc: Yup.string()
//     .min(3, "Please enter your cvc number")
//     .required("Please fill info"),
// });

export const deliveryAddressForm = Yup.object({

  card_number: Yup.string()
    .test(
      "test-number",
      "Credit Card number is invalid",
      (value) => valid.number(value).isValid
    )
    .required(),
  card_name: Yup.string().required("Please enter your card name"),
  cc_exp: Yup.string()
    .required("Expiry date is required")
    .test("expiryDate", "Invalid expiry date", function (value) {
      if (!value) return false;

      // Split MM/YY or MM/YYYY format
      const [month, year] = value.split("/").map((part) => parseInt(part, 10));
      // Validate month
      if (month < 1 || month > 12) return false;
      // Handle both 2-digit and 4-digit year formats
      const fullYear = year < 100 ? 2000 + year : year;
      // Create expiry date with the last day of the expiry month
      const expiry = dayjs(`${fullYear}-${month}-01`).endOf("month");
      // Check if the expiry date is in the future
      return expiry.isAfter(dayjs());
    }),
  cvc: Yup.string()
    .min(3, "Please enter your cvc number")
    .required("Please fill info"),

  country_name: Yup.string().required("Please choice any option"),
  first_name: Yup.string()
    .min(2, "at least write 2 letters")
    .required("Please enter your first name"),
  last_name: Yup.string()
    .min(2, "at least write 2 letters")
    .required("Please enter your last name"),
  address: Yup.string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters")
    .max(1000, "Address cannot exceed 1000 characters")
    .matches(/^[a-zA-Z0-9\s,.'-]*$/, "Address contains invalid characters"),
  apartment: Yup.string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters")
    .max(100, "Address cannot exceed 100 characters")
    .matches(/^[a-zA-Z0-9\s,.'-]*$/, "Address contains invalid characters"),
  postal_code: Yup.string()
    .matches(/^[A-Za-z0-9\s\-]{3,10}$/, "Please enter a valid postal code")
    .required("Postal code is required"),
  province: Yup.string().required("Please select one option"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^\+?[1-9]\d{1,14}$/,
      "Invalid phone number. Please include country code."
    ),
  company_name: Yup.string().required("Please enter your company name"),
  tax_number: Yup.string()
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      "Invalid tax number"
    )
    .required("Please enter your tax number"),
});
