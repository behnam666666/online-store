import * as Yup from "yup";

import type { SignupFormValues ,SigninFormValues  } from "../type/signformvalue.type";


export const contactValidationSchemasignup: Yup.ObjectSchema<SignupFormValues> = Yup.object({
  firstname: Yup.string()
    .min(2, "Firstname must be at least 2 characters")
    .required("Firstname is required"),
  
  lastname: Yup.string()
    .min(2, "Lastname must be at least 2 characters")
    .required("Lastname is required"),
  
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be between 10 and 15 digits")
    .required("Phone is required"),
  
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character")
    .required("Password is required"),
  
  passwordconfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
});



export const contactValidationSchemasignin: Yup.ObjectSchema<SigninFormValues> = Yup.object({

  
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  

  password: Yup.string()
    .min(6, "Password must be at least 8 characters")
    .required("Password is required"),

});
