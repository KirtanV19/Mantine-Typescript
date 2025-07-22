import * as yup from "yup";
import { VALIDATION_MESSAAGE as message } from "../constants";
import { regex } from "./regex";
import { ROLES } from "../constants";
const { hasDigit, hasLowercaseLetter, hasSpecialChar, hasUppercaseLetter } =
  regex;

const {
  passwordDigit,
  passwordLength,
  passwordLower,
  passwordSpecial,
  passwordUpper,
  required,
  roleRequired,
  invalid,
  passwordMatch,
} = message;

// Register Schema
export const registerSchema = yup.object({
  name: yup.string().required(required("name")),
  email: yup
    .string()
    .trim()
    .email(invalid("email"))
    .required(required("email")),
  password: yup
    .string()
    .trim()
    .required(required("password"))
    .min(6, passwordLength)
    .matches(hasLowercaseLetter, passwordLower)
    .matches(hasUppercaseLetter, passwordUpper)
    .matches(hasDigit, passwordDigit)
    .matches(hasSpecialChar, passwordSpecial),
  role: yup
    .string()
    .oneOf(Object.values(ROLES), roleRequired)
    .required(required("role")),
});

// Login Schema
export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .min(1, message.required("email"))
    .email(message.invalid("email")),
  password: yup.string().trim().min(1, message.required("password")),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .min(1, message.required("email"))
    .email(message.invalid("email")),
  newPassword: yup
    .string()
    .min(6, passwordLength)
    .matches(hasUppercaseLetter, passwordUpper)
    .matches(hasSpecialChar, passwordSpecial)
    .required(required("new password")),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], passwordMatch)
    .required("Confirm your password"),
});
